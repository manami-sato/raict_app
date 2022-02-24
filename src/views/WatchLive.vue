<template lang="pug">
main(:style="{height: height+'px'}").watchLive
	div(v-if="rotate == 0",@touchend="rotateDisplay").watchLive__vertical
		p.watchLive__vertical--txt
			|端末を横向きにして<br>
			|ライブを視聴しましょう！
		svg(version="1.1",xmlns="http://www.w3.org/2000/svg", xmlns:xlink="http://www.w3.org/1999/xlink", x="0px", y="0px", viewBox="0 0 556.9 512", style="enable-background:new 0 0 556.9 512;", xml:space="preserve").watchLive__vertical--icon
			g
				g
					path(d="M154.9,188.9l-44.1-54.2h22.5c0.4-52.9,39.9-72.5,77.9-66.2c-23.6,11.6-32.9,35.6-34,66.2H199L154.9,188.9z")
				path(d="M503.7,0H332.5c-29.3,0-53.1,23.8-53.1,53.1v161.6h31.5V67.3h214.5v190.5c4.1,9.1,6.4,19.3,6.4,29.9v171.2\
		c0,20.8-8.7,39.5-22.7,52.8c26.8-2.7,47.7-25.4,47.7-52.8V53.1C556.9,23.8,533,0,503.7,0z M445.9,53.9h-55.4\
		c-2.4,0-4.4-2.2-4.4-4.8s2-4.8,4.4-4.8h55.4c2.4,0,4.4,2.2,4.4,4.8S448.3,53.9,445.9,53.9z").st0
				path(d="M458.9,234.5H53.1C23.8,234.6,0,258.4,0,287.7v171.2C0,488.2,23.8,512,53.1,512h405.8c29.3,0,53.1-23.8,53.1-53.1V287.7\
		C512,258.4,488.2,234.5,458.9,234.5z M54,401c0,2.4-2.2,4.4-4.8,4.4s-4.8-2-4.8-4.4v-55.4c0-2.4,2.2-4.4,4.8-4.4s4.8,2,4.8,4.4V401\
		z M407.4,480.5H67.3V266h340.1V480.5z M459.1,394.8c-11.9,0-21.5-9.6-21.5-21.5c0-11.9,9.6-21.5,21.5-21.5\
		c11.9,0,21.5,9.7,21.5,21.5C480.6,385.2,471,394.8,459.1,394.8z")
		div(@click="toLiveMode").watchLive__vertical--back ペンライトモードに戻る
	div(v-if="rotate !== 0")
		div.watchLive__movie
			video(:src="`${webImgPath}img/movie.mp4`",autoplay)
		transition(name="watchContents")
			div(v-if="displayFlag")
				div.watchLive__swipe
					div(v-if="announceFlag",:class="{announceActive:announceFlag}").watchLive__swipe--nav
						|左にスワイプで<br>
						|ペンライトモードに切り替え！
					div(@click="toLiveMode").watchLive__swipe--tab
				div(@touchend="count++",:style="{background:count%2 == 0 ? bgColor1 : bgColor2}").watchLive__tap
		//- transition(name="watchContents")
		//- 	div(v-if="displayFlag",@touchend="count++",:style="{background:count%2 == 0 ? bgColor1 : bgColor2}").watchLive__tap
</template>

<script>
import Mixin from "@/mixins/Mixin.vue";
import common from "@/assets/js/common.js";
export default {
  name: "WatchLive",
  mixins: [Mixin],
  props: ["colorId"],
  data() {
    return {
      res: [],
      id: "red",
      height: 0,
      bgColor1: "",
      bgColor2: "",
      announceFlag: false,
      displayFlag: true,
      count: 0,
      rotate: 0,
      rotateFlag: false,
    };
  },
  created() {
    window.addEventListener("resize", this.rotateDisplay);
    document.addEventListener("touchstart", this.touchHandler);
  },
  destroyed() {
    window.removeEventListener("resize", this.rotateDisplay);
  },
  methods: {
    toLiveMode() {
      history.back();
    },
    displayTap() {
      this.displayFlag = !this.displayFlag;
    },
    announceDisplay() {
      if (this.announceFlag) {
        this.announceFlag = !this.announceFlag;
      }
    },
    rotateDisplay() {
      this.rotate = window.orientation;
      if (this.rotate !== 0) {
        this.height = window.screen.width;
        this.announceFlag = true;
        setTimeout(this.announceDisplay, 3000);
      } else {
        this.height = common.windowHeight;
      }
    },
  },
  mounted() {
    this.id = this.$route.params.colorId;
    this.rotateDisplay();
    console.log(this.rotate, this.height);
    fetch(`${this.productsData}`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        this.res = json.color;
        for (let i = 0; i < this.res.length; i++) {
          if (this.res[i].color == this.id) {
            this.bgColor1 = this.res[i].bg[0];
            this.bgColor2 = this.res[i].bg[1];
          }
        }
      });
    let flag = false;
    document.addEventListener(
      "touchend",
      (event) => {
        if (flag) {
          event.preventDefault();
        } else {
          flag = true;
          setTimeout(() => {
            flag = false;
          }, 500);
        }
      },
      true
    );
  },
};
</script>

<style lang="scss" scoped>
/* eslint-disable */
@import "@/assets/scss/common.scss";
.watchLive {
  display: flex;
  align-items: center;
  justify-content: center;
  touch-action: manipulation;
  overflow: hidden;
  @include liveTabSet(
    $fd: row,
    $i: 0 0 0 auto,
    $w: 24px,
    $h: 128px,
    $br: 8px 0 0 8px,
    $tabBW: 3px,
    $tabBH: 28px,
    $tabIb: auto auto auto 7px,
    $tabIa: auto 7px auto auto,
    $c: #000,
    $navBg: rgba($color: #fff, $alpha: 0.6),
    $m: 0 56px 0 0,
    $bw: 9px 0 9px 15.6px,
    $bc: transparent transparent transparent rgba($color: #fff, $alpha: 0.6),
    $i2: 0 -15.5px 0 auto
  );
  &__movie {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    video {
      width: 100%;
      height: 100%;
      object-fit: contain;
      pointer-events: none;
    }
  }
  &__swipe {
    display: flex;
    justify-content: flex-end;
    width: 320px;
    height: 375px;
    background: linear-gradient(
      to right,
      transparent 60%,
      rgba($color: #000, $alpha: 0.6) 100%
    );
    pointer-events: none;
    // &--nav {
    //   animation: announceFadeOut 0.3s;
    //   animation-delay: 2.7s;
    // }
    &--tab {
      pointer-events: auto;
    }
  }
  &__tap {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    box-shadow: 0 0 20px rgba($color: #000, $alpha: 1);
    opacity: 0.9;
    transition: 0.2s background;
    position: absolute;
    inset: auto 8% 8% auto;
    z-index: 10;
  }
  &__vertical {
    display: flex;
    align-items: center;
    flex-direction: column;
    font-weight: bold;
    &--txt {
      color: $primaryColor;
      font-size: 2.3rem;
      text-align: center;
    }
    &--icon {
      width: 144px;
      margin: 32px 0;
    }
    &--back {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 200px;
      height: 40px;
      background: $background;
      border-radius: 20px;
    }
  }
}

.watchContents-leave-active,
.watchContents-enter-active {
  transition: opacity 0.3s;
}
.watchContents-enter,
.watchContents-leave-to {
  opacity: 0;
}
.st0 {
  fill: #868686;
}
.announceActive {
  animation: announceFadeOut 0.3s;
  animation-delay: 2.7s;
}
</style>
