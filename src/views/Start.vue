<template lang="pug">
	main(:style="{minHeight:startHeight+`px`}").start
		section.start__info
			h1.start__info--logo
				img(:src="`${path}img/logo_color.png`")
			div.start__info--txt raictへようこそ
			p.start__info--description
				|サインインするとすべての機能が<br>
				|ご利用いただけます
		div.start__signin
			router-link(:to="{name:'Signin'}") LINEでサインイン
			router-link(:to="{name:'Signin'}") Twitterでサインイン
			router-link(:to="{name:'Signin'}") Appleでサインイン
</template>

<script>
import common from "@/assets/js/common.js";
import Mixin from "@/mixins/Mixin.vue";
export default {
  name: "Start",
  mixins: [Mixin],
  data() {
    return {
      startHeight: 0,
    };
  },
  mounted() {
    this.startHeight = common.startHeight;
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
.start {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin: 0 auto;
  &__info {
    height: calc(100vh - 200px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    // padding-bottom: 30%;
    &--logo {
      width: 60%;
      img {
        width: 100%;
      }
    }
    &--txt {
      font-weight: bold;
      font-size: 2rem;
      margin-bottom: 8px;
    }
    &--description {
      font-size: 1.2rem;
      line-height: 1.5rem;
      text-align: center;
    }
  }
  &__signin {
    width: 90%;
    margin: 0 auto;
    padding: 0 0 24px;
    a {
      &:nth-child(1) {
        @include signinSet(#59c139);
      }
      &:nth-child(2) {
        @include signinSet(#4fa1ec);
      }
      &:nth-child(3) {
        @include signinSet(#070707);
      }
    }
  }
}
</style>
