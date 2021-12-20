<template lang="pug">
main.profile
	Head(value="プロフィール",ref="head")
	div.profile__data
		div.profile__data--icon
			img(src="https://click.ecc.ac.jp/ecc/msatou/raict_app/img/profile_icon.svg")
		div.profile__data--name すだ
	div(v-for="(link,i) in links",:key="link[i]").profile__link
		span.profile__link--ttl {{link.ttl}}
		ul.profile__link--content
			li(v-for="(content,i) in links[i].contents",:key="content[i]")
				a(href="#") {{content}}
	Navigation(value="profile",ref="nav")
</template>

<script>
import Head from "@/components/Head.vue";
import Navigation from "@/components/Navigation.vue";
// import common from "@/assets/js/common.js";
export default {
  name: "Profile",
  components: {
    Head,
    Navigation,
  },
  data() {
    return {
      links: [
        {
          ttl: "設定",
          contents: ["プロフィール設定", "アカウント設定", "通知"],
        },
        {
          ttl: "",
          contents: ["raictの使い方", "プライバシー", "ご利用規約"],
        },
        {
          ttl: "",
          contents: ["ログアウト"],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
.profile {
  background: $background;
  padding: 56px 0;
  &__data {
    display: flex;
    align-items: center;
    width: 90vw;
    height: 64px;
    background: #fff;
    border-radius: 8px;
    font-size: 1.3rem;
    font-weight: bold;
    margin: 32px auto 24px;
    padding: 0 20px;
    &--icon {
      width: 40px;
      height: 40px;
      border-radius: 20px;
      overflow: hidden;
      margin-right: 16px;
      img {
        width: 100%;
      }
    }
  }
  &__link {
    width: 90vw;
    margin: 0 auto 0;
    &:last-of-type {
      &--content {
        margin: 0;
      }
    }
    &--ttl {
      display: block;
      color: $gray;
      font-weight: bold;
      margin-bottom: 4px;
    }
    &--content {
      background: #fff;
      font-size: 1.3rem;
      border-radius: 8px;
      margin: 0 0 24px;
      padding: 4px 16px;
      li {
        border-bottom: $background 1px solid;
        padding: 12px 0;
        &:last-of-type {
          border-bottom: none;
          // margin: 0;
        }
      }
    }
  }
}
</style>
