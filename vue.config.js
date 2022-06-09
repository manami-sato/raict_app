module.exports = {
  outputDir: "docs",
  assetsDir: "./",
  publicPath: "./",
  pwa: {
    name: "raict",
    themeColor: "#FFF",
    msTileColor: "#000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "white",
    iconPaths: {
      // favicon32: "imgs/icons/icon-32x32.png",
      // favicon16: "imgs/icons/icon-16x16.png",
      appleTouchIcon:
        "https://click.ecc.ac.jp/ecc/msatou/raict_app/img/app_icon_2.png",
      // maskIcon: "imgs/icons/site-tile-310x310.png",
      // msTileImage: "imgs/icons/site-tile-310x310.png",
    },
  },
};
