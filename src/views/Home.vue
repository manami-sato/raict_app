<template lang="pug">
main.home
	Head(value="ホーム",ref="head")
	nav.home__nav
		ul
			li(v-for="(item,i) in nav",:key="item[i]",:class="{homeNavActive:i == navId}",@click="homeNavAction(i)").home__nav--item {{item}}
	div(v-if="navId == 0")
		router-link(v-for="(data,i) in res",:to="`${routerPath}event/${i+1}`",:key="i").home__event
			div.home__event--img
				img(:src="`${path}img/${data.img}`")
			div.home__event--ttl {{data.ttl}}
			div.home__event--name
				div &#035;{{data.artistName}}
	div(v-if="navId == 1")
		router-link(v-for="(data,i) in favList",:to="`${routerPath}event/${i+1}`",:key="i").home__event
			div.home__event--img
				img(:src="`${path}img/${data.img}`")
			div.home__event--ttl {{data.ttl}}
			div.home__event--name
				div &#035;{{data.artistName}}
	Navigation(value="Home",ref="nav")
</template>

<script>
import Head from "@/components/Head.vue";
import Navigation from "@/components/Navigation.vue";
import Mixin from "@/mixins/Mixin.vue";
export default {
  name: "Home",
  components: {
    Head,
    Navigation,
  },
  mixins: [Mixin],
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
      favId: 1,
      favList: [],
      navId: 0,
    };
  },
  methods: {
    homeNavAction(i) {
      if (i <= 1) {
        this.navId = i;
      }
    },
  },
  mounted() {
    if (this.$route.params.favId > 0) {
      this.favId = parseInt(this.$route.params.favId) + 1;
    }
    fetch(`${this.productsData}`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        this.res = json.event;
        for (let i = 0; i < this.res.length; i++) {
          if (this.res[i].artistId == this.favId) {
            this.favList.push(this.res[i]);
          }
        }
      });
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
.home {
  padding: 56px 0;
  &__nav {
    font-weight: bold;
    padding: 16px;
    overflow: hidden;
    ul {
      display: flex;
      width: max-content;
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
