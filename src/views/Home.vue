<template lang="pug">
main.home
	Head(value="ホーム",ref="head")
	nav.home__nav
		ul
			li(v-for="(item,i) in nav",:key="item[i]").home__nav--item.homeNavActive {{item}}
	router-link(v-for="(data,i) in res",:to="`/event/${i+1}`").home__event
		div.home__event--img
			img(:src="`https://click.ecc.ac.jp/ecc/msatou/raict_app/img/${data.img}`")
		div.home__event--ttl {{data.ttl}}
		div.home__event--name
			div &#035;{{data.artistName}}
	Navigation(value="Home",ref="nav")
</template>

<script>
import Head from "@/components/Head.vue";
import Navigation from "@/components/Navigation.vue";
export default {
  name: "Home",
  components: {
    Head,
    Navigation,
  },
  data() {
    return {
      res: [],
      nav: [
        "おすすめ",
        "お気に入り",
        "邦ロック",
        "男性アイドル",
        "女性アイドル",
      ],
    };
  },
  mounted() {
    fetch("https://click.ecc.ac.jp/ecc/msatou/raict_app/products.php")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        this.res = json.event;
      });
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
.home {
  padding: 56px 0;
  &__nav {
    font-size: 1.3rem;
    font-weight: bold;
    padding: 16px;
    overflow: scroll;
    ul {
      display: flex;
      width: calc(144px * 5);
    }
    &--item {
      height: 36px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 16px;
      border-radius: 18px;
    }
  }
  &__event {
    display: block;
    width: 90vw;
    margin: 0 auto 28px;
    font-weight: bold;
    &--img {
      width: 100%;
      height: 200px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &--ttl {
      font-size: 1.8rem;
      margin: 12px 0 8px;
    }
    &--name {
      display: flex;
      font-size: 1.3rem;
      div {
        margin-right: 8px;
        &:last-of-type {
          margin: 0;
        }
      }
    }
  }
}
.homeNavActive {
  background: $primaryColor;
  color: #fff;
}
</style>
