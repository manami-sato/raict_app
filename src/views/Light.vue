<template lang="pug">
main(:style="{minHeight:lightHeight+`px`}").light
	h1.light__headline ペンライトを選択する
	ul(ref="lightImg").light__choice
		li(v-for="(data,i) in res2",ref="lightImgList",@click="colorSelect(i)").light__choice--member
			div.light__choice--member--img
				img(:src="`${path}img/profile_icon.png`")
			p.light__choice--member--name {{data.name}}
			div(ref="lightImgWidth",:class="{colorActive:data.flag}").light__choice--member--color
				img(:src="`${path}img/light_${data.color}.png`")
	div.light__select
		div(@click="selectLeft",:class="{selectDisActive:leftFlag}").light__select--left
			svg(version="1.1",xmlns="http://www.w3.org/2000/svg",xmlns:xlink="http://www.w3.org/1999/xlink",x="0px",y="0px",viewBox="0 0 10 18.8",style="enable-background:new 0 0 10 18.8;",xml:space="preserve")
				path(d="M7.8,0L10,1.8L3.7,9.4L10,17l-2.2,1.8L0,9.4L7.8,0z")
		div(@click="selectRight",:class="{selectDisActive:rightFlag}").light__select--right
			svg(version="1.1",xmlns="http://www.w3.org/2000/svg",xmlns:xlink="http://www.w3.org/1999/xlink",x="0px",y="0px",viewBox="0 0 10 18.8",style="enable-background:new 0 0 10 18.8;",xml:space="preserve")
				path(d="M7.8,0L10,1.8L3.7,9.4L10,17l-2.2,1.8L0,9.4L7.8,0z")
	Navigation(value="LiveList",ref="nav")
</template>

<script>
import Head from "@/components/Head.vue";
import Navigation from "@/components/Navigation.vue";
import Mixin from "@/mixins/Mixin.vue";
import common from "@/assets/js/common.js";
export default {
  name: "Light",
  mixins: [Mixin],
  components: {
    Head,
    Navigation,
  },
  props: {
    ticketId: Number,
  },
  data() {
    return {
      res1: [],
      res2: [],
      id: 0,
      lightHeight: 0,
      colorWidth: 0,
      colorMarginLeft: 0,
      selectCount: 0,
      leftFlag: false,
      rightFlag: false,
      choice: 0,
    };
  },
  mounted() {
    this.lightHeight = common.height;
    this.id = this.$route.params.ticketId - 1;
    fetch(`${this.productsData}`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        this.res1 = json.event[this.id];
        this.res2 = json.artist[this.res1.artistId - 1].member;
        if (this.selectCount == 0) {
          this.leftFlag = !this.leftFlag;
        }
        if (this.res2.length == 1) {
          this.leftFlag = true;
          this.rightFlag = true;
        }
      });
  },
  methods: {
    colorSelect(i) {
      this.res2[i].flag = !this.res2[i].flag;
    },
    selectLeft() {
      if (this.selectCount !== 0) {
        if (this.rightFlag) {
          this.rightFlag = !this.rightFlag;
        }
        this.selectCount--;
        this.$refs.lightImg.style.left = `${
          -this.selectCount * (common.windowWidth / 2)
        }px`;
        if (this.selectCount == 0) {
          this.leftFlag = true;
        }
      }
    },
    selectRight() {
      if (this.selectCount !== this.$refs.lightImgList.length - 1) {
        if (this.leftFlag) {
          this.leftFlag = !this.leftFlag;
        }
        this.selectCount++;
        this.$refs.lightImg.style.left = `${
          -this.selectCount * (common.windowWidth / 2)
        }px`;
        if (this.selectCount == this.$refs.lightImgList.length - 1) {
          this.rightFlag = true;
        }
      }
    },
  },
  updated() {
    if (this.res1.length == null) {
      this.colorWidth = this.$refs.lightImgWidth[0].clientWidth;
      this.colorMarginLeft = common.windowWidth / 2 - this.colorWidth;
      for (let i = 0; i < this.$refs.lightImgList.length; i++) {
        this.$refs.lightImgList[i].style.width = `${this.colorWidth}px`;
        if (i == 0) {
          this.$refs.lightImgList[0].style.marginLeft = `${
            this.colorMarginLeft + this.colorWidth / 2
          }px`;
        } else {
          this.$refs.lightImgList[
            i
          ].style.marginLeft = `${this.colorMarginLeft}px`;
        }
      }
    }
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
.light {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  background: #26215f;
  overflow: hidden;
  &__headline {
    color: #fff;
    font-style: 24px;
    font-weight: bold;
    text-align: center;
    padding: 24px 0;
  }
  &__choice {
    display: flex;
    transition: 0.5s left;
    position: relative;
    top: 0;
    left: 0;
    &--member {
      display: flex;
      align-items: center;
      flex-direction: column;
      &--img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
      &--name {
        width: max-content;
        color: #fff;
        font-size: 1.8rem;
        font-weight: bold;
        margin: 8px 0 16px;
      }
      &--color {
        height: 60vh;
        img {
          height: 100%;
          position: relative;
        }
      }
    }
  }
  &__select {
    display: flex;
    justify-content: space-between;
    width: 90vw;
    position: fixed;
    top: 45vh;
    left: 5vw;
    pointer-events: none;
    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 48px;
      height: 48px;
      background: rgba($color: #000000, $alpha: 0.6);
      border-radius: 50%;
      pointer-events: auto;
      svg {
        width: 12px;
        margin-right: 2px;
        path {
          fill-rule: evenodd;
          clip-rule: evenodd;
          fill: #ffffff;
        }
      }
    }
    &--right {
      transform: rotateY(180deg);
    }
  }
}
.selectDisActive {
  opacity: 0;
  pointer-events: none;
}
.colorActive {
  img {
    z-index: 10;
    transform: scale(1.1);
    animation: scaleAction 0.4s;
  }
  &::after {
    content: "";
    display: block;
    background: rgba($color: #000000, $alpha: 0.3);
    width: 100vw;
    height: 100vh;
    position: fixed;
    inset: 0;
    z-index: 3;
    animation: blurAction 0.4s;
    backdrop-filter: blur(8px);
  }
}
@keyframes blurAction {
  0% {
    background: rgba($color: #000000, $alpha: 0);
    backdrop-filter: blur(0);
  }
  10% {
    backdrop-filter: blur(3px);
  }
  100% {
    background: rgba($color: #000000, $alpha: 0.3);
    backdrop-filter: blur(8px);
  }
}
@keyframes scaleAction {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
}
</style>
