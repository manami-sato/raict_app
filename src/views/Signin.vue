<template lang="pug">
	main(:style="{minHeight:startHeight+`px`}").signin
		div.signin__head
			div(@click="c--",v-if="c > 0").signin__head--back
				svg(version="1.1",xmlns="http://www.w3.org/2000/svg",xmlns:xlink="http://www.w3.org/1999/xlink",x="0px",y="0px",viewBox="0 0 10 18.8",style="enable-background:new 0 0 10 18.8;",xml:space="preserve")
					path(d="M7.8,0L10,1.8L3.7,9.4L10,17l-2.2,1.8L0,9.4L7.8,0z")
			h1.signin__head--logo
				img(:src="`${path}img/logo_white.png`",alt="raict")
		div.signin__flow
			div(v-for="(flow,i) in ttl",:key="i",:class="{flowOnCircle:c >= i}").signin__flow--parts
				p(:class="{flowOnTxt:c == i}") step{{i+1}}
				div
		h2(v-text="ttl[c]").signin__ttl
		//- 
		//- 1.名前、アイコン
		//- 
		div(v-if="c == 0").signin__contents
			div(:style="{backgroundImage:'url(' + path + 'img/signin_icon.png)'}").signin__contents--file
				form(enctype="multipart/form-data")
					input(type="file",accept="image/*",capture="camera",@change="inputIcon",value="",name="upload")
			div.signin__contents--form
				p 名前／ニックネーム
				form
					input(type="text",placeholder="example",name="name",@change="btnFlag = !btnFlag")
		//- 
		//- 2.性別、生年月日
		//- 
		div(v-if="c == 1").signin__contents
			div.signin__contents--form
				p 性別
				form
					select(@change="form1")
						option(disabled,value="",selected) 選択してください
						option(value="male") 男性
						option(value="female") 女性
						option(value="other") その他
						option(value="noselected") 選択しない
			div.signin__contents--form
				p 生年月日
				form
					input(type="date",@change="form2")
		//- 
		//- 3.お気に入りのアーティスト
		//- 
		div(v-if="c == 2").signin__contents
			div.signin__contents--artist
				div(v-for="(data,i) in res",@click="artistActive(i)",:class="{artistActive:artistFlag}")
					div.signin__contents--artist--icon
						img(:src="`${path}img/${data.img}`")
					p.signin__contents--artist--name {{data.name}}
		//- 
		//- 4.結果
		//- 
		div(v-if="c == 3").signin__completion
			div.signin__completion--icon
				img(:src="`${path}img/${res[artistSelect].img}`")
			div.signin__completion--name {{res[artistSelect].name}}
			div.signin__completion--txt さっそく最新のライブを確認しよう！
		//- 
		div(@click="btnClick",:class="{btnActive:btnFlag}").signin__btn
			p {{btnTxt[c]}}
			router-link(:to="{name:'Home'}",v-if="c == 3").signin__btn--link
</template>

<script>
import common from "@/assets/js/common.js";
import Mixin from "@/mixins/Mixin.vue";
export default {
  name: "Start",
  mixins: [Mixin],
  data() {
    return {
      res: [],
      imgPath: "",
      btnFlag: false,
      startHeight: 0,
      c: 0,
      ttl: [
        `写真とニックネームを
設定する`,
        `性別と年齢を
設定する`,
        `好きなアーティストを
選んでね`,
        `アカウント登録が
完了しました！`,
      ],
      btnTxt: ["次へ", "次へ", "次へ", "ライブを確認する"],
      flowLink: false,
      artistCount: 0,
      formFlag: [false, false],
      artistFlag: false,
      artistSelect: 0,
    };
  },
  methods: {
    btnClick() {
      this.btnFlag = !this.btnFlag;
      if (this.c < 3) {
        this.c++;
      }
      if (this.c == 3) {
        this.btnFlag = true;
      }
    },
    inputIcon(value) {
      this.imgPath = value.target.value;
      // console.log(this.imgPath);
    },
    form1() {
      this.formFlag[0] = !this.formFlag[0];
      if (this.formFlag[0] == true && this.formFlag[1] == true) {
        this.btnFlag = true;
      } else {
        this.btnFlag = false;
      }
    },
    form2() {
      this.formFlag[1] = !this.formFlag[1];
      if (this.formFlag[0] == true && this.formFlag[1] == true) {
        this.btnFlag = true;
      } else {
        this.btnFlag = false;
      }
    },
    artistActive(i) {
      this.artistCount++;
      this.artistFlag = !this.artistFlag;
      this.artistSelect = i;
      this.btnFlag = !this.btnFlag;
    },
  },
  mounted() {
    fetch(`${this.productsData}`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        this.res = json.artist;
      });
    this.startHeight = common.height - common.footHeight;
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
.signin {
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #fff;
  background: linear-gradient(135deg, #eead92 0%, #6018dc 100%);
  padding: 40px 5% 0;
  &__head {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
    &--back {
      width: 10px;
      position: absolute;
      left: 0;
      path {
        fill-rule: evenodd;
        clip-rule: evenodd;
        fill: #ffffff;
      }
    }
    &--logo {
      width: 80px;
      height: 64px;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
  &__flow {
    display: flex;
    font-size: 1.3rem;
    width: 90%;
    margin: 0 auto;
    &--on {
      font-size: 1.5rem;
      font-weight: bold;
      &::before {
        background: $primaryColor;
      }
    }
    &--parts {
      width: 25%;
      p {
        height: 23px;
        display: flex;
        justify-content: center;
        align-items: flex-end;
      }
      &:first-child {
        div {
          &::before {
            display: none;
          }
        }
      }
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 12px;
        margin-top: 16px;
        position: relative;
        &::before {
          content: "";
          display: block;
          width: 100%;
          height: 2px;
          background: #fff;
          position: absolute;
          right: 50%;
        }
        &::after {
          content: "";
          display: block;
          width: 12px;
          height: 12px;
          background: #fff;
          border-radius: 6px;
          z-index: 1;
        }
      }
    }
  }
  &__ttl {
    font-size: 2.4rem;
    font-weight: normal;
    text-align: center;
    margin: 24px 0 32px;
    white-space: pre-wrap;
  }
  &__contents {
    width: 90%;
    margin: 0 auto;
    &--icon {
      width: 88px;
      height: 88px;
      border-radius: 44px;
      margin-bottom: 48px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &--form {
      p {
        font-size: 1.2rem;
        margin-bottom: 8px;
      }
      form {
        font-size: 1.6rem;
        width: 100%;
        border-bottom: 1px solid #fff;
      }
      input,
      select {
        width: 100%;
        height: 32px;
        background: transparent;
        &::placeholder {
          color: rgba($color: #fff, $alpha: 0.5);
        }
      }
      &:last-of-type {
        margin-top: 24px;
      }
    }
    &--file {
      width: 88px;
      height: 88px;
      background-repeat: no-repeat;
      background-size: cover;
      border: 4px solid #fff;
      border-radius: 50%;
      margin: 0 auto;
      position: relative;
      form {
        width: 80px;
        height: 80px;
      }
      input {
        width: inherit;
        height: inherit;
        opacity: 0;
      }
      &::before {
        contain: "";
        display: block;
        width: 24px;
        height: 24px;
        background: $background;
        border: 4px solid #fff;
        border-radius: 50%;
        position: absolute;
        right: 0;
        bottom: 0;
      }
    }
    &--artist {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      width: 80vw;
      margin: 0 auto;
      > div {
        margin-bottom: 24px;
        position: relative;
        &::after {
          content: "";
          display: block;
          width: 20px;
          height: 20px;
          background: #fff;
          border-radius: 50%;
          position: absolute;
          top: 64px;
          left: 64px;
        }
      }
      &--icon {
        width: 80px;
        height: 80px;
        border-radius: 8px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      &--name {
        color: #fff;
        font-size: 1.2rem;
        text-align: center;
        margin-top: 4px;
      }
    }
  }
  &__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 48px;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 10px;
    font-size: 1.6rem;
    margin: 32px auto 0;
    position: relative;
    opacity: 0.4;
    pointer-events: none;
    &--link {
      display: block;
      width: 100%;
      height: 100%;
      z-index: 5;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  &__completion {
    &--icon {
      width: 160px;
      height: 160px;
      border: 4px solid #fff;
      border-radius: 50%;
      margin: 0 auto;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &--name {
      font-size: 2.4rem;
      font-weight: bold;
      text-align: center;
      margin: 16px 0 8px;
    }
    &--txt {
      font-size: 1.2rem;
      text-align: center;
    }
  }
}
.flowOnTxt {
  font-weight: bold;
  font-size: 1.5rem;
}
.flowOnCircle {
  div {
    &::before,
    &::after {
      background: $primaryColor;
    }
  }
}
.btnActive {
  color: $primaryColor;
  background: #fff;
  font-weight: bold;
  opacity: 1;
  pointer-events: auto;
}
.artistActive {
  .signin__contents--artist--icon {
    border: 5px solid $primaryColor;
  }
  // .signin__contents--artist--name {
  //   color: $primaryColor;
  // }
}
</style>
