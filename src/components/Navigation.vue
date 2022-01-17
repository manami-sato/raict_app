<template lang="pug">
	nav.nav
		ul.nav__link
			li(v-for="(link,i) in links",:key="link[i]",:class="{navActive:value == link.name}")
				router-link(:to="{name:`${link.name}`}")
					svg(viewBox="0 0 24 25",xmlns="http://www.w3.org/2000/svg",v-html="link.icon")
					p {{link.alt}}
</template>

<script>
export default {
  name: "Navgation",
  props: ["value"],
  data() {
    return {
      links: [
        {
          name: "Home",
          alt: "ホーム",
          icon: `<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.21265L2 10.3208V22.5001H22V10.3208L12 2.21265ZM20 11.2739V20.5001H4V11.2739L12 4.78746L20 11.2739Z">`,
        },
        {
          name: "Search",
          alt: "検索",
          icon: `<path d="M15.5 14.5H14.71L14.43 14.23C15.41 13.09 16 11.61 16 10C16 6.41 13.09 3.5 9.5 3.5C5.91 3.5 3 6.41 3 10C3 13.59 5.91 16.5 9.5 16.5C11.11 16.5 12.59 15.91 13.73 14.93L14 15.21V16L19 20.99L20.49 19.5L15.5 14.5ZM9.5 14.5C7.01 14.5 5 12.49 5 10C5 7.51 7.01 5.5 9.5 5.5C11.99 5.5 14 7.51 14 10C14 12.49 11.99 14.5 9.5 14.5Z">`,
        },
        {
          name: "LiveList",
          alt: "ライブへ行く",
          icon: `<path d="M12 2.5C6.48 2.5 2 6.98 2 12.5C2 18.02 6.48 22.5 12 22.5C17.52 22.5 22 18.02 22 12.5C22 6.98 17.52 2.5 12 2.5ZM10 16V9C10 8.59 10.47 8.35 10.8 8.6L15.47 12.1C15.74 12.3 15.74 12.7 15.47 12.9L10.8 16.4C10.47 16.65 10 16.41 10 16Z">`,
        },
        {
          name: "Notice",
          alt: "通知",
          icon: `<path fill-rule="evenodd" clip-rule="evenodd" d="M22 5.5H2V19.5H22V5.5ZM4 8.56082V17.5H20V8.56117L12.0002 14.864L4 8.56082ZM18.1152 7.5H5.88525L12.0002 12.3179L18.1152 7.5Z">`,
        },
        {
          name: "Profile",
          alt: "プロフィール",
          icon: `<path fill-rule="evenodd" clip-rule="evenodd" d="M3 14.5H21V22.5H19V16.5H5V22.5H3V14.5Z" fill="#9E9E9E"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 4.5C10.3431 4.5 9 5.84315 9 7.5C9 9.15685 10.3431 10.5 12 10.5C13.6569 10.5 15 9.15685 15 7.5C15 5.84315 13.6569 4.5 12 4.5ZM7 7.5C7 4.73858 9.23858 2.5 12 2.5C14.7614 2.5 17 4.73858 17 7.5C17 10.2614 14.7614 12.5 12 12.5C9.23858 12.5 7 10.2614 7 7.5Z">`,
        },
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
  z-index: 10;
  &__link {
    display: flex;
    li {
      display: flex;
      justify-content: center;
      width: 25%;
      &:nth-of-type(3) {
        path {
          fill: $primaryColor;
        }
      }
    }
    a {
      display: block;
      width: 100%;
      color: $gray;
      margin: 0 auto;
      > * {
        display: flex;
        justify-content: center;
      }
    }
    svg {
      display: block;
      width: 24px;
      height: 24px;
      fill: none;
      margin: 0 auto;
    }
    path {
      fill: #9e9e9e;
    }
  }
}
.navActive {
  a {
    color: $primaryColor;
    font-weight: bold;
  }
  path {
    fill: $primaryColor;
  }
}
</style>
