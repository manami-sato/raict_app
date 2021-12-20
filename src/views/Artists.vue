<template lang="pug">
main.artists
	header.artists__head
		div.artists__head--img
			img(src="https://click.ecc.ac.jp/ecc/msatou/raict_app/img/search_artists.png")
		h1.artists__head--name hogehoge
	div.artists__next
		h2.artists__next--headline 次のライブ
		div.artists__next--img
			img(src="https://click.ecc.ac.jp/ecc/msatou/raict_app/img/search_artists.png")
	Navigation(value="search",ref="nav")
</template>

<script>
import Head from "@/components/Head.vue";
import Navigation from "@/components/Navigation.vue";
export default {
  name: "Artists",
  components: {
    Head,
    Navigation,
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
.artists {
  &__head {
    width: 100%;
    height: 240px;
    position: relative;
    &--img {
      width: 100%;
      height: 100%;
      img {
        width: inherit;
        height: inherit;
        object-fit: cover;
      }
    }
    &--name {
      display: flex;
      align-items: flex-end;
      width: 100%;
      height: 100%;
      color: #fff;
      background: linear-gradient(
        transparent 70%,
        rgba($color: #000000, $alpha: 0.7) 100%
      );
      font-size: 2.4rem;
      padding: 16px;
      position: absolute;
      top: 0;
      bottom: 0;
    }
  }
  &__next {
    width: 90vw;
    margin: 0 auto;
    &--headline {
      font-size: 2.4rem;
      margin: 24px 0 16px;
    }
    &--img {
      width: 100%;
      height: 200px;
      img {
        width: inherit;
        height: inherit;
        object-fit: cover;
      }
    }
  }
}
</style>
