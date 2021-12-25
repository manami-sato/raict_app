<template lang="pug">
	section.lives
		h2.lives__headline その他のライブ
		div.lives__img
			//- Slick(ref="slick",:options="slickOptions").slick-outer.lives__img
			//- router-link(v-for="(img,i) in afterLiveImg",:key="img[i]",:to="`/search/${value}/${i+2}`").slick-img
			//- 	img(:src="img")
</template>

<script>
// import jQuery from "jquery";
// import Slick from "vue-slick";
export default {
  name: "Lives",
  // components: {
  //   jQuery,
  //   Slick,
  // },
  props: ["value"],
  data() {
    return {
      res: [],
      afterLiveImg: [],
      // live: 0,
      // slickOptions: {
      //   arrows: false, //スライドの矢印ボタン
      //   dots: true, //ドットマーク
      //   autoplay: true, //自動スライド
      //   autoplaySpeed: 4000, //自動スライド間隔(ms)
      //   pauseOnFocus: false, //ドットマークを押すとスライドショーが止まるのを防ぐ
      //   prevArrow: '<button type="button" class="slick-prev"></button>', //ひとつ前の画像に戻る矢印ボタン
      //   nextArrow: '<button type="button" class="slick-next"></button>', //ひとつ先の画像に進む矢印ボタン
      // },
    };
  },
  mounted() {
    fetch("https://click.ecc.ac.jp/ecc/msatou/raict_app/products.php")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        this.res = json.event[this.value];
        // this.live = this.res.live.length;
        // for (let i = 0; i < this.live; i++) {
        //   if (i > 0) {
        //     this.afterLiveImg.push(
        //       `https://click.ecc.ac.jp/ecc/msatou/raict_app/img/${this.res.live[i].img}`
        //     );
        //   }
        // }
      });
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
.lives {
  width: 100vw;
  overflow: hidden;
  &__headline {
    font-size: 2.4rem;
    margin: 24px 5% 16px;
    + a {
      display: block;
    }
  }
  &__img {
    height: 180px;
    div {
      width: 80vw;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
