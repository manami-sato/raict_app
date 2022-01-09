<template lang="pug">
main.search
	div.search__form
		input(type="text",placeholder="アーティストを検索しよう",@focus="formFocus",@blur="formBlur",:class="{'formActive':formFlag}").search__form--txt
		div(v-if="formFlag",@click="formBlur").search__form--cancel キャンセル
	div
		header.search__head
			h1.search__head--txt アーティスト
		div.search__artist
			router-link(v-for="(data,i) in res",:key="data.name",:to="`${routerPath}search/${i+1}`").search__artist--link
				div.search__artist--link--img
					img(:src="`${path}img/${data.img}`")
				h2.search__artist--link--name {{data.name}}
		div(v-if="formFlag",@click="formBlur").search__bg
	Navigation(value="Search",ref="nav")
</template>

<script>
import Head from "@/components/Head.vue";
import Navigation from "@/components/Navigation.vue";
import Mixin from "@/mixins/Mixin.vue";
export default {
  name: "Search",
  components: {
    Head,
    Navigation,
  },
  mixins: [Mixin],
  data() {
    return {
      res: [],
      formFlag: false,
    };
  },
  methods: {
    formFocus() {
      this.formFlag = !this.formFlag;
    },
    formBlur() {
      this.formFlag = !this.formFlag;
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
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
.search {
  padding: 32px 0 64px;
  &__form {
    display: flex;
    align-items: center;
    width: 90vw;
    margin: 0 auto;
    padding-bottom: 8px;
    position: relative;
    &::before {
      content: "";
      display: block;
      width: 16px;
      height: 16px;
      background: url("https://click.ecc.ac.jp/ecc/msatou/raict_app/img/search_icon.png")
        no-repeat;
      background-size: contain;
      position: absolute;
      left: 16px;
    }
    + div {
      position: relative;
    }
    &--txt {
      display: flex;
      align-items: center;
      width: 100%;
      background: $background;
      font-size: 1.6rem;
      border-radius: 8px;
      padding: 8px 8px 8px 40px;
      &::placeholder {
        color: $gray;
      }
    }
    &--cancel {
      width: 20%;
      color: #0a7aff;
      font-size: 1.2rem;
      margin-left: 8px;
      text-align: center;
    }
  }
  &__head {
    padding: 16px 5vw;
    &--txt {
      font-size: 1.6rem;
    }
  }
  &__artist {
    padding: 0 5vw;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    &--link {
      width: 48%;
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
  &__bg {
    width: 100%;
    height: 100%;
    background: rgba($color: #000000, $alpha: 0.7);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
  }
}
.formActive {
  width: 80%;
}
</style>
