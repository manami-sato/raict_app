<template lang="pug">
	main(v-bind:style="{minHeight:startHeight+`px`}").signin
		div.signin__head
			div(v-on:click="flowBack",v-if="flowCount > 0").signin__head---back
				img(src="https://click.ecc.ac.jp/ecc/msatou/raict_app/img/start-back.svg",alt="back")
			h1.signin__head--logo
				img(src="https://click.ecc.ac.jp/ecc/msatou/raict_app/img/logo_white.svg",alt="raict")
		div.signin__flow
			div(v-for="(flow,i) in flowTtl",:key="i",v-bind:class="{flowOnCircle:flowCount >= i}").signin__flow--parts
				p(v-bind:class="{flowOnTxt:flowCount == i}") step{{i+1}}
				div
		h2(v-text="flowTtl[flowCount]").signin__ttl
		//- 名前、アイコン
		div(v-if="flowCount == 0").signin__contents
			div.signin__contents--file
				form(enctype="multipart/form-data")
					input(type="file",accept="image/*",capture="camera",@change="inputIcon",value="",name="upload")
			div.signin__contents--name
				p 名前／ニックネーム
				form
					input(type="text",placeholder="example",name="name",@change="inputFlag[0] == true")
		//- 性別、生年月日
		div(v-if="flowCount == 1").signin__contents
			div.signin__contents--name
				p 性別
				form
					select
						option(disabled,value="",selected) 選択してください
						option(value="male") 男性
						option(value="female") 女性
						option(value="other") その他
						option(value="noselected") 選択しない
			div.signin__contents--name
				p 生年月日
				form
					input(type="date")
		//- お気に入りのアーティスト
		div(v-if="flowCount == 2").signin__contents
			div.signin__contents--artists
				div(v-for="i in 6")
					div.signin__contents--artists--icon
						img(:src="`https://click.ecc.ac.jp/ecc/msatou/raict_app/img/${favorite.img}`")
					p.signin__contents--artists--name {{favorite.name}}
		//- 結果
		div(v-if="flowCount == 3").signin__completion
			div.signin__completion--icon
				img(:src="`https://click.ecc.ac.jp/ecc/msatou/raict_app/img/${favorite.img}`")
			div.signin__completion--name {{favorite.name}}
			div.signin__completion--txt さっそく最新のライブを確認しよう！
		div(@click="flowBtn").signin__btn
			p {{flowBtnTxt[flowCount]}}
			router-link(:to="{name:'Home'}",v-if="flowLink").signin__btn--link
</template>

<script>
import common from "@/assets/js/common.js";
export default {
  name: "Start",
  data() {
    return {
      imgPath: "",
      inputFlag: [false, false, false, false],
      startHeight: 0,
      flowCount: 0,
      flowFlag: false,
      flowTtl: [
        `写真とニックネームを
設定する`,
        `性別と年齢を
設定する`,
        `好きなアーティストを
選んでね`,
        `アカウント登録が
完了しました！`,
      ],
      flowBtnTxt: ["次へ", "次へ", "スキップ", "ライブを確認する"],
      flowLink: false,
      favorite: {
        img: "search_artists.png",
        name: "須田景凪",
      },
    };
  },
  methods: {
    flowBtn() {
      this.flowCount++;
      if (this.flowCount == 3) {
        this.flowLink = true;
        console.log("Ok");
      }
    },
    flowBack() {
      this.flowCount--;
    },
    inputIcon(value) {
      this.imgPath = value.target.value;
      // console.log(this.imgPath);
    },
  },
  mounted() {
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
    margin-bottom: 16px;
    position: relative;
    &--back {
      width: 10px;
      position: absolute;
      left: 0;
    }
    &--logo {
      width: 56px;
      height: 32px;
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
    margin: 24px 0 40px;
    white-space: pre-wrap;
  }
  &__contents {
    width: 100%;
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
    &--name {
      p {
        font-size: 1.2rem;
        margin-bottom: 16px;
      }
      form {
        font-size: 1.6rem;
        width: 100%;
        border-bottom: 1px solid #fff;
        input {
          width: 100%;
          height: 32px;
          &::placeholder {
            color: rgba($color: #fff, $alpha: 0.5);
          }
        }
      }
    }
    &--file {
      width: 88px;
      height: 88px;
      background: url("https://click.ecc.ac.jp/ecc/msatou/raict_app/img/signin_icon.png")
        no-repeat;
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
    &--artists {
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
    color: #000;
    background: #fff;
    border-radius: 10px;
    font-weight: bold;
    font-size: 1.6rem;
    margin: 40px auto 0;
    position: relative;
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
      width: 180px;
      height: 180px;
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
</style>
