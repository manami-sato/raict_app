<template lang="pug">
	section.lives
		h2.lives__headline その他のライブ
		div.lives__img
			ul
				li(v-for="(item,i) in lives",:key="i").lives__img--list
					router-link(:to="`${routerPath}event/${item.eventId}`")
						img(:src="`${path}img/${item.img}`",:alt="item.ttl")
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
      artistId: 0,
      lives: [],
    };
  },
  mounted() {
    fetch(`${this.productsData}`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        this.res = json.event;
        this.artistId = this.res[this.value - 1].artistId;
        for (let i = 0; i < this.res.length; i++) {
          if (
            this.res[i].artistId == this.artistId ||
            this.res[i].artistId == 4
          ) {
            this.lives.push(this.res[i]);
          }
        }
      });
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
.lives {
  width: 100vw;
  // overflow: hidden;
  &__headline {
    font-size: 2.4rem;
    margin: 24px 5% 16px;
    + a {
      display: block;
    }
  }
  &__img {
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 180px;
    margin-bottom: 88px;
    overflow: hidden;
    ul {
      display: flex;
      // justify-content: center;
      width: max-content;
    }
    &--list {
      width: 88vw;
      margin-right: 4vw;
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        img {
          width: inherit;
          height: inherit;
          object-fit: cover;
        }
      }
      &:last-of-type {
        margin: 0;
      }
    }
  }
}
</style>
