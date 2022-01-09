<template lang="pug">
main.ticket
	Back
	div.ticket__img
		img(:src="`${path}img/${img}`")
	p 横にスワイプでライブに参加！
	Navigation(value="Live",ref="nav")
</template>

<script>
import Head from "@/components/Head.vue";
import Back from "@/components/Back.vue";
import Navigation from "@/components/Navigation.vue";
import Mixin from "@/mixins/Mixin.vue";
export default {
  name: "Live",
  components: {
    Head,
    Back,
    Navigation,
  },
  mixins: [Mixin],
  props: {
    eventId: Number,
  },
  data() {
    return {
      res: [],
      img: "",
      id: 0,
    };
  },
  mounted() {
    this.id = this.$route.params.eventId - 1;
    fetch(`${this.productsData}`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        this.res = json.event[this.id];
        this.img = this.res.img;
      });
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
.ticket {
  background: linear-gradient(135deg, #eead92 0%, #6018dc 100%);
  &__img {
    width: 100vw;
    img {
      width: 100%;
    }
  }
}
</style>
