<template lang="pug">
	section.lives
		h2.lives__headline その他のライブ
		div.lives__img
</template>

<script>
import Mixin from "@/mixins/Mixin.vue";
export default {
  name: "Lives",
  props: ["value"],
  mixins: [Mixin],
  data() {
    return {
      res: [],
      afterLiveImg: [],
    };
  },
  mounted() {
    fetch(`${this.productsData}`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        this.res = json.event[this.value];
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
