<template lang="pug">
main(:style="{minHeight:height+`px`, background:`linear-gradient(150deg,` + bgColor1 + ` 0%, ` + bgColor2 + ` 100%)`}").watchLive
	div(v-if="loadFlag").watchLive__load
		p.watchLive__load--txt ライブ開始までお待ちください。
		svg(version="1.1",xmlns="http://www.w3.org/2000/svg",xmlns:xlink="http://www.w3.org/1999/xlink",x="0px",y="0px",viewBox="0 0 512 512",xml:space="preserve").watchLive__load--icon
			g
				path(d="M389.618,88.15l-54.668,78.072c6.58,4.631,12.713,9.726,18.366,15.396c25.042,25.057,40.342,59.202,40.374,97.38c-0.032,38.177-15.332,72.258-40.374,97.348c-25.025,24.978-59.17,40.31-97.292,40.31c-20.906,0-40.566-4.663-58.197-12.856c-3.689-1.709-7.218-3.57-10.636-5.606c-3.514-1.996-6.868-4.184-10.094-6.452c-6.596-4.6-12.728-9.758-18.446-15.396c-24.978-25.089-40.31-59.17-40.31-97.348c0-38.178,15.332-72.323,40.31-97.38c16.689-16.657,37.435-28.986,60.751-35.383v41.068l92.534-93.636L219.403,0v48.854C108.105,66.454,23.046,162.74,23.03,278.998c0.016,78.926,39.288,148.685,99.385,190.816c5.51,3.857,11.196,7.49,17.104,10.94c5.861,3.33,11.85,6.516,18.031,9.398c29.897,13.951,63.244,21.792,98.475,21.848c128.706-0.08,232.93-104.304,232.946-233.002C488.97,200.016,449.699,130.32,389.618,88.15z")
	div(v-if="!loadFlag").watchLive__shake
		div(:class="[{test1:count == 1},{test2:count == 2},{test3:count == 3},{test4:count == 4},{test5:count == 5},{test6:count == 6},{test6:count == 6},{test7:count == 7},{test8:count == 8}]").watchLive__shake--circle
	Navigation(value="LiveList",ref="nav")
</template>

<script>
import Head from "@/components/Head.vue";
import Back from "@/components/Back.vue";
import Navigation from "@/components/Navigation.vue";
import Mixin from "@/mixins/Mixin.vue";
import common from "@/assets/js/common.js";
export default {
  name: "WatchLive",
  components: {
    Head,
    Back,
    Navigation,
  },
  mixins: [Mixin],
  props: ["colorId"],
  data() {
    return {
      res: [],
      id: "",
      height: 0,
      bgData: "",
      bgColor1: "",
      bgColor2: "",
      loadFlag: true,
      x: 0,
      beforeMotion: 0,
      count: 0,
      signBeforeMotion: 0,
      signX: 0,
      num: 3,
    };
  },
  methods: {
    flag() {
      this.loadFlag = false;
    },
    saveMotion() {
      this.beforeMotion = this.x; //0.7秒前の値を保存
    },
  },
  mounted() {
    this.id = this.$route.params.colorId;
    this.height = common.height;
    fetch(`${this.productsData}`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        this.res = json.color;
        for (let i = 0; i < this.res.length; i++) {
          if (this.res[i].color == this.id) {
            this.bgData = this.res[i];
          }
        }
        this.bgColor1 = this.bgData.bg[0];
        this.bgColor2 = this.bgData.bg[1];
      });

    if (
      DeviceMotionEvent &&
      typeof DeviceMotionEvent.requestPermission === "function"
    ) {
      // iOS 13+ の Safari
      // 許可を取得
      DeviceMotionEvent.requestPermission()
        .then((permissionState) => {
          if (permissionState === "granted") {
            // // 許可を得られた場合、devicemotionをイベントリスナーに追加
            const motion = () => {
              window.addEventListener("devicemotion", (event) => {
                if (!event.accelerationIncludingGravity) {
                  alert("event.accelerationIncludingGravity is null");
                  return;
                }
                this.x = Math.round(event.accelerationIncludingGravity.x);
              });
              // xの値が0.7秒以内に±5以上になった時にカウント
              // console.log(this.beforeMotion, this.x);
              this.signX = Math.sign(this.x); // Math.sign(el); 正の数なら1 負の数なら-1を返す
              this.signBeforeMotion = Math.sign(this.beforeMotion);
              if (Math.abs(this.signX + this.signBeforeMotion) == 2) {
                // 正の数同士or負の数同士 符号を外している
                if (Math.abs(this.beforeMotion - this.x) >= this.num) {
                  // ex. -9 - -4 および、 12 - 5
                  this.count++;
                  if (this.count > 8) {
                    this.count = 8;
                  }
                } else {
                  this.count--;
                  if (this.count < 0) {
                    this.count = 0;
                  }
                }
              } else if (
                this.signX + this.signBeforeMotion == 0 ||
                Math.abs(this.signX + this.signBeforeMotion) == 1
              ) {
                // 正の数と負の数 or 0を含む
                if (Math.abs(this.beforeMotion + this.x) >= this.num) {
                  // ex -3 + 2 および、 0 + -5
                  this.count++;
                  if (this.count > 8) {
                    this.count = 8;
                  }
                } else {
                  this.count--;
                  if (this.count < 0) {
                    this.count = 0;
                  }
                }
              }
              console.log(this.count);
              this.saveMotion();
              setTimeout(motion, 700);
            };
            motion();
          }
        })
        .catch(console.error);
    } else {
      alert("DeviceMotionEvent.requestPermission is not found");
    }
  },
  updated() {
    setTimeout(this.flag, 2200);
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
.watchLive {
  display: flex;
  align-items: center;
  justify-content: center;
  &__load {
    display: flex;
    align-items: center;
    flex-direction: column;
    &--txt {
      color: #fff;
      font-size: 1.6rem;
      font-weight: bold;
      margin-bottom: 24px;
    }
    &--icon {
      width: 64px;
      height: 64px;
      animation: loadAnime 2s;
      path {
        fill: #fff;
      }
    }
  }
  &__shake {
    &--circle {
      min-width: 80px;
      min-height: 80px;
      background: rgba($color: #fff, $alpha: 0.8);
      box-shadow: 0 4px 16px rgba($color: #000, $alpha: 0.2);
      border-radius: 50%;
      transition: 0.2s width, 0.2s height, 0.2s background;
    }
  }
}
@keyframes loadAnime {
  0% {
    transform: rotateZ(0);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
.test1 {
  width: 120px;
  height: 120px;
}
.test2 {
  width: 160px;
  height: 160px;
}
.test3 {
  width: 200px;
  height: 200px;
}
.test4 {
  width: 240px;
  height: 240px;
}
.test5 {
  width: 240px;
  height: 240px;
  background: rgba($color: lighten($primaryColor, 25%), $alpha: 0.8);
}
.test6 {
  width: 240px;
  height: 240px;
  background: rgba($color: lighten($primaryColor, 15%), $alpha: 0.8);
}
.test7 {
  width: 240px;
  height: 240px;
  background: rgba($color: lighten($primaryColor, 10%), $alpha: 0.8);
}
.test8 {
  width: 240px;
  height: 240px;
  background: rgba($color: $primaryColor, $alpha: 0.8);
}
</style>
