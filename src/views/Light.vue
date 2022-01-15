<template lang="pug">
main(:style="{minHeight:lightHeight+`px`}").light
	h1.light__headline ペンライトを選択する
	ul.light__choice
		li(v-for="(data,i) in res2.member",ref="lightImg").light__choice--member
			div.light__choice--member--img
				img(:src="`${path}img/profile_icon.png`")
			p.light__choice--member--name {{data}}
			div.light__choice--member--color
				img(:src="`${path}img/light_${res2.color[i]}.png`")
		div.light__select
			div.light__select--left
				svg(version="1.1",xmlns="http://www.w3.org/2000/svg",xmlns:xlink="http://www.w3.org/1999/xlink",x="0px",y="0px",viewBox="0 0 10 18.8",style="enable-background:new 0 0 10 18.8;",xml:space="preserve")
					path(d="M7.8,0L10,1.8L3.7,9.4L10,17l-2.2,1.8L0,9.4L7.8,0z")
			div.light__select--right
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
      test: 0,
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
        this.res2 = json.artist[this.res1.artistId - 1];
        console.log(this.res2.member);
      });
  },
  updated() {
    console.log(this.$refs.lightImg[this.$refs.lightImg.length - 1]);
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
.light {
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #26215f;
  &__headline {
    color: #fff;
    font-style: 24px;
    font-weight: bold;
    text-align: center;
    padding: 24px 0;
  }
  &__choice {
    display: flex;
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
        color: #fff;
        font-size: 1.8rem;
        font-weight: bold;
        margin: 8px 0 16px;
      }
      &--color {
        // width: 64px;
        // height: 480px;
        height: 60vh;
        img {
          // width: 100%;
          height: 100%;
        }
      }
    }
  }
  &__select {
    display: flex;
    justify-content: space-between;
    width: 90vw;
    position: absolute;
    top: 45vh;
    left: 5vw;
    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 48px;
      height: 48px;
      background: rgba($color: #000000, $alpha: 0.6);
      border-radius: 50%;
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
</style>
