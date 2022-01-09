<template lang="pug">
main.live
	h1.live__headline ようこそ！あなたの<br>参加しているライブです
	router-link(v-for="(data,i) in res",:to="{name:'Ticket',params:{ id: `${i}`}}").live__event
		div.live__event--img
			img(:src="`${path}img/${data.img}`")
		div.live__event--ttl {{data.ttl}}
		div.live__event--name
			div &#035;{{data.artistName}}
	Navigation(value="Live",ref="nav")
</template>

<script>
import Head from "@/components/Head.vue";
import Navigation from "@/components/Navigation.vue";
import Mixin from "@/mixins/Mixin.vue";
export default {
  name: "Live",
  components: {
    Head,
    Navigation,
  },
  mixins: [Mixin],
  data() {
    return {
      res: [],
    };
  },
  mounted() {
    fetch(`${this.productsData}`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        this.res = json.event;
      });
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
.live {
  color: #fff;
  background: linear-gradient(135deg, #eead92 0%, #6018dc 100%);
  padding: 56px 0;
  &__headline {
    font-size: 2.4rem;
    margin: 0 0 24px;
    font-weight: normal;
    text-align: center;
    line-height: 4rem;
  }
  &__event {
    display: block;
    width: 90vw;
    color: #fff;
    margin: 0 auto 28px;
    font-weight: bold;
    &--img {
      width: 100%;
      height: 200px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &--ttl {
      font-size: 1.8rem;
      margin: 12px 0 8px;
    }
    &--name {
      display: flex;
      font-size: 1.3rem;
      div {
        margin-right: 8px;
        &:last-of-type {
          margin: 0;
        }
      }
    }
  }
}
</style>
