<template lang="pug">
main(:style="{minHeight:ticketHeight+`px`}",@touchstart="ticketTouchStart",@touchmove="ticketTouchMove",@touchend="ticketTouchEnd").ticket
	Back
	ul(:class="{ticketTransition:transitionFlag}",ref="ticketImg").ticket__img
		li(v-for="(data,i) in res",ref="ticketImgList").ticket__img--list
			router-link(:to="`${routerPath}light/${i+1}`")
				img(:src="`${path}img/${data.img}`")
	div.ticket__announce
		p.ticket__announce--txt 横にスワイプでライブを選択！
		p(ref="pictogram",v-if="pictogramFlag").ticket__announce--pictogram
			svg(viewBox="0 0 178 140",xmlns="http://www.w3.org/2000/svg")
				g(clip-path="url(#clip0_163_892)")
					path(d="M8.61563 25.4604H68.0566V20.7439H8.61563L27.5183 4.12628C27.751 3.91982 27.9407 3.66963 28.0765 3.39001C28.2124 3.11038 28.2917 2.80679 28.31 2.49657C28.3283 2.18635 28.2852 1.87557 28.1831 1.58197C28.081 1.28838 27.9221 1.01772 27.7152 0.78546C27.5083 0.553195 27.2577 0.363869 26.9775 0.228292C26.6973 0.092715 26.3931 0.0135431 26.0823 -0.00470532C25.7715 -0.0229538 25.4601 0.0200781 25.1659 0.121936C24.8717 0.223794 24.6006 0.382483 24.3678 0.588941L0.786781 21.3335C0.53536 21.5548 0.333999 21.8269 0.196074 22.1319C0.0581481 22.4368 -0.0131836 22.7676 -0.0131836 23.1021C-0.0131836 23.4367 0.0581481 23.7675 0.196074 24.0724C0.333999 24.3773 0.53536 24.6495 0.786781 24.8708L24.4151 45.6311C24.8499 46.0138 25.4106 46.2236 25.9903 46.2206C26.3246 46.2222 26.6554 46.1529 26.9609 46.0174C27.2664 45.8819 27.5396 45.6832 27.7624 45.4345C28.1755 44.9652 28.3851 44.3515 28.3452 43.7281C28.3053 43.1047 28.0193 42.5225 27.5498 42.1094L8.61563 25.4604Z")
					path(d="M177.212 21.3344L153.623 0.589918C153.391 0.38346 153.119 0.224771 152.825 0.122913C152.531 0.0210546 152.22 -0.0219772 151.909 -0.00372875C151.598 0.0145197 151.294 0.0936916 151.014 0.229269C150.733 0.364845 150.483 0.554172 150.276 0.786437C150.069 1.0187 149.91 1.28936 149.808 1.58295C149.706 1.87654 149.663 2.18732 149.681 2.49755C149.699 2.80777 149.779 3.11136 149.915 3.39099C150.05 3.67061 150.24 3.9208 150.473 4.12725L169.375 20.7449H102.326V25.4613H169.383L150.481 42.079C150.011 42.4959 149.726 43.0822 149.689 43.7087C149.652 44.3352 149.866 44.9507 150.284 45.4198C150.702 45.8889 151.289 46.1731 151.917 46.21C152.544 46.2468 153.161 46.0333 153.631 45.6163L177.212 24.8718C177.464 24.6505 177.665 24.3783 177.803 24.0734C177.941 23.7684 178.012 23.4377 178.012 23.1031C178.012 22.7685 177.941 22.4378 177.803 22.1329C177.665 21.8279 177.464 21.5557 177.212 21.3344Z")
					path(d="M131.72 57.6271C129.801 57.6311 127.929 58.2208 126.356 59.3171C125.868 53.8146 121.575 49.5069 116.361 49.5069C114.243 49.517 112.189 50.2336 110.525 51.5428C109.95 46.1504 105.697 41.9449 100.554 41.9449C98.6552 41.9522 96.8026 42.5302 95.2377 43.6035V19.298C95.2377 13.316 90.7326 8.4502 85.1957 8.4502C79.6588 8.4502 75.1458 13.316 75.1458 19.298V73.773C75.2009 77.7034 75.1457 82.1762 75.004 85.4305C74.4133 84.4165 73.8068 83.3317 73.2712 82.3806C72.0741 80.2267 70.7194 77.7978 69.3332 75.6439C63.434 66.6512 55.1562 62.3514 49.194 65.1891C48.2596 65.5959 47.4241 66.199 46.7445 66.9573C46.0649 67.7156 45.5572 68.6113 45.2559 69.5833C43.6807 74.7478 47.8865 81.9089 52.3444 89.4867C53.9984 92.2851 55.6996 95.1779 57.0228 97.8505C57.9365 99.6978 58.7792 101.419 59.5747 103.054C64.5603 113.273 67.8525 119.986 75.1773 129.136C81.0292 136.447 88.7557 140 98.8056 140H111.667C124.269 140 133.783 134.262 137.194 124.664C141.754 111.827 141.809 76.8702 141.809 75.3924V68.4749C141.77 62.4929 137.265 57.6271 131.72 57.6271ZM137.044 75.3924C137.044 75.7461 136.989 111.002 132.696 123.084C129.987 130.724 122.111 135.283 111.628 135.283H98.7662C90.2442 135.283 83.7228 132.312 78.8318 126.196C71.8378 117.447 68.8055 111.261 63.7805 100.979C62.9929 99.3441 62.1344 97.6147 61.2208 95.7596C59.8189 92.9376 58.0703 89.9662 56.3849 87.1127C52.8091 81.0443 48.7608 74.1582 49.7374 70.9825C49.8441 70.6315 50.0314 70.3102 50.2843 70.0441C50.5373 69.778 50.8489 69.5744 51.1945 69.4496C54.345 67.9482 60.4962 70.8253 65.3715 78.2301C66.6868 80.2424 67.947 82.4906 69.1599 84.6759C72.0032 89.7618 73.5784 92.4502 75.6183 93.2363C76.0041 93.3895 76.4221 93.4446 76.8345 93.3966C77.247 93.3485 77.641 93.1989 77.9811 92.9612C79.0365 92.2222 80.1392 91.4597 79.9108 73.7416V19.298C79.9108 15.9179 82.2736 13.1666 85.235 13.1666C88.1965 13.1666 90.5514 15.9179 90.5514 19.298V75.3924H95.2771V52.8006C95.2771 49.4126 97.6399 46.6613 100.593 46.6613C103.547 46.6613 105.918 49.4126 105.918 52.8006V77.0746H111.053V60.3626C111.053 56.9746 113.416 54.2234 116.377 54.2234C119.339 54.2234 121.694 56.9746 121.694 60.3626V78.8118H126.419V68.4749C126.419 65.0948 128.782 62.3435 131.736 62.3435C134.689 62.3435 137.06 65.0948 137.06 68.4749L137.044 75.3924Z")
				defs
					clipPath#clip0_163_892
						rect
	Navigation(value="LiveList",ref="nav")
</template>

<script>
import Head from "@/components/Head.vue";
import Back from "@/components/Back.vue";
import Navigation from "@/components/Navigation.vue";
import Mixin from "@/mixins/Mixin.vue";
import common from "@/assets/js/common.js";
export default {
  name: "Live",
  components: {
    Head,
    Back,
    Navigation,
  },
  mixins: [Mixin],
  data() {
    return {
      res: [],
      ticketId: 0,
      ticketHeight: 0,
      img: "",
      startX: 0,
      moveX: 0,
      endX: 0,
      transitionFlag: false,
      pictogramFlag: true,
    };
  },
  methods: {
    ticketTouchStart(ev1) {
      this.startX = ev1.changedTouches[0].pageX;
    },
    ticketTouchMove(ev2) {
      this.moveX = ev2.changedTouches[0].pageX - this.startX;
    },
    ticketTouchEnd() {
      if (!this.transitionFlag) {
        this.transitionFlag = !this.transitionFlag;
      }
      if (this.moveX > 20 && this.ticketId > 0) {
        this.ticketId--;
        this.$refs.ticketImg.style.transform = `translateX(${
          -this.ticketId * common.windowWidth
        }px)`;
        // if (this.ticketId == 0) {
        //   let copyEl =
        //     this.$refs.ticketImgList[this.res.length - 1].cloneNode(true);
        //   this.$refs.ticketImg.prepend(copyEl);
        // } else if (this.ticketId < 0) {
        //   console.log(this.transitionFlag);
        //   this.transitionFlag = !this.transitionFlag;
        //   this.ticketId = this.res.length - 1;
        //   this.$refs.ticketImg.style.transform = `translateX(${
        //     -this.ticketId * common.windowWidth
        //   }px)`;
        // }
        return false;
      } else if (this.moveX < -20 && this.ticketId < this.res.length - 1) {
        this.ticketId++;
        this.$refs.ticketImg.style.transform = `translateX(${
          -this.ticketId * common.windowWidth
        }px)`;
        // if (this.ticketId == this.res.length - 1) {
        //   let copyEl = this.$refs.ticketImgList[0].cloneNode(true);
        //   this.$refs.ticketImg.appendChild(copyEl);
        // } else if (this.ticketId == this.res.length) {
        //   console.log(this.transitionFlag);
        //   this.transitionFlag = !this.transitionFlag;
        //   this.ticketId = 0;
        //   this.$refs.ticketImg.style.transform = `translateX(${-common.windowWidth}px)`;
        // }
        return false;
      } else {
        return true;
      }
    },
  },
  mounted() {
    this.ticketId = this.$route.params.ticketId;
    fetch(`${this.productsData}`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        this.res = json.event;
      });
    this.ticketHeight = common.height;
    this.$refs.ticketImg.style.transform = `translateX(${
      -this.ticketId * common.windowWidth
    }px)`;
    let pictogramDisplay = () => {
      if (this.pictogramFlag) {
        this.pictogramFlag = !this.pictogramFlag;
      }
    };
    setTimeout(pictogramDisplay, 2200);
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
.ticket {
  background: linear-gradient(135deg, #eead92 0%, #6018dc 100%);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100vw;
  overflow: hidden;
  &__img {
    display: flex;
    &--list {
      width: 100vw;
      height: 240px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  &__announce {
    &--txt {
      width: 100vw;
      color: #fff;
      font-weight: bold;
      // font-size: 2.4rem;
      font-size: 1.8rem;
      margin: 16px 0;
      position: relative;
      text-align: center;
    }
    &--pictogram {
      margin: auto;
      position: absolute;
      right: 0;
      left: 0;
      pointer-events: none;
      animation: pictogramAnimation 2s infinite, pictogramFadeOut 0.7s 1.5s;
      svg {
        display: block;
        width: 126px;
        height: 104px;
        fill: none;
        margin: 0 auto;
        path {
          fill: #fff;
        }
        rect {
          width: 100%;
          height: 100%;
          fill: #fff;
        }
      }
    }
  }
}
.ticketTransition {
  transition: 0.5s transform;
}
@keyframes pictogramAnimation {
  0% {
    transform: translateX(20px);
  }
  50% {
    transform: translateX(-20px);
  }
  100% {
    transform: translateX(20px);
  }
}
@keyframes pictogramFadeOut {
  0% {
    opacity: 1;
    display: block;
  }
  100% {
    opacity: 0;
    display: block;
  }
}
</style>
