<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  head: {
    meta: [
      { name: "description", content: "#" },
      // サイトの説明
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1.0,minimum-scale=1.0",
      },
      { charset: "utf-8" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "raict" },
      { property: "og:title", content: "raict" }, // サイト自体のタイトル
      { property: "og:description", content: "#" }, // サイトの説明
      {
        property: "og:url",
        content: "http://click.ecc.ac.jp/ecc/msatou/raict_app/",
      }, //- サイトのURL
      { property: "og:image", content: "#" }, //- サイトのカバー画像
      {
        rel: "apple-touch-icon",
        href: "https://click.ecc.ac.jp/ecc/msatou/raict_app/img/app_icon_2.png",
      },
    ],
  },
};
</script>
<style lang="scss">
// @import "@/assets/scss/ress.scss";
// @import "@/assets/scss/common.scss";
</style>
