<template lang="pug">
main.search
	input(type="text",placeholder="アーティストを検索しよう").search__input
	header.search__head
		h1.search__head--txt アーティスト
	div.search__artists
		article(v-for="i in 8")
			div.search__artists--img
				img(:src="`https://click.ecc.ac.jp/ecc/msatou/raict_app/img/${artistList[0].img}`")
			h2.search__artists--name {{artistList[0].name}}
	Navigation(value="search",ref="nav")
</template>

<script>
import Head from "@/components/Head.vue";
import Navigation from "@/components/Navigation.vue";
export default {
  name: "Search",
  components: {
    Head,
    Navigation,
  },
  data() {
    return {
      artistList: [{ name: "hogehoge", img: "search_artists.png" }],
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
.search {
  padding: 32px 0 64px;
  width: 90vw;
  margin: 0 auto;
  &__input {
    display: flex;
    align-items: center;
    width: 100%;
    background: $background;
    font-size: 1.6rem;
    border-radius: 8px;
    padding: 8px 16px;
    position: relative;
    &::before {
      content: "";
      display: block;
      width: 32px;
      height: 32px;
      background: url("https://click.ecc.ac.jp/ecc/msatou/raict_app/img/search_icon.svg");
      position: absolute;
      left: 24px;
    }
    &::placeholder {
      color: $gray;
    }
  }
  &__head {
    &--txt {
      font-size: 1.6rem;
      margin: 16px 0;
    }
  }
  &__artists {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    article {
      width: 48%;
    }
    &--img {
      width: 100%;
      height: 104px;
      border-radius: 4px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &--name {
      font-size: 1.2rem;
      margin: 8px 0 20px;
    }
  }
}
</style>
