<template lang="pug">
	nav.nav
		ul.nav__link
			li(v-for="(link,i) in links",:key="link[i]")
				router-link(:to="`/ecc/msatou/raict_app/${link.name}`")
					div
						img(:src="`https://click.ecc.ac.jp/ecc/msatou/raict_app/img/nav_${link.name}.svg`")
					p(:class="{navActive:value == link.name}") {{link.alt}}
</template>

<script>
export default {
  name: "Navgation",
  props: ["value"],
  data() {
    return {
      links: [
        { name: "home", alt: "ホーム" },
        { name: "search", alt: "検索" },
        { name: "live", alt: "ライブへ行く" },
        { name: "notice", alt: "通知" },
        { name: "profile", alt: "プロフィール" },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
.nav {
  width: 100vw;
  background: #fff;
  border-top: $background 1px solid;
  position: fixed;
  padding: 4px 0;
  bottom: 0;
  left: 0;
  &__link {
    display: flex;
    li {
      display: flex;
      justify-content: center;
      width: 25%;
      a {
        color: $gray;
        // font-size: 0.9rem;
        margin: 0 auto;
        > * {
          display: flex;
          justify-content: center;
        }
      }
    }
  }
}
.navActive {
  color: $primaryColor;
  font-weight: bold;
  fill: $primaryColor;
}
</style>
