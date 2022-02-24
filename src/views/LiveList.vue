<template lang="pug">
main.liveList
	h1.liveList__headline ようこそ！あなたの<br>参加しているライブです
	router-link(v-for="(data,i) in res",:to="{name:'Ticket',params:{ ticketId: `${i}`}}",:key="i").liveList__event
		div.liveList__event--img
			img(:src="`${path}img/${data.img}`")
		div.liveList__event--ttl {{data.ttl}}
		div.liveList__event--name
			div &#035;{{data.artistName}}
	Navigation(value="LiveList",ref="nav")
</template>

<script>
import Head from "@/components/Head.vue";
import Navigation from "@/components/Navigation.vue";
import Mixin from "@/mixins/Mixin.vue";
export default {
  name: "LiveList",
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
.liveList {
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
