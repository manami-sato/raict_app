<template lang="pug">
main.artist
	header.artist__head
		div.artist__head--img
			img(:src="`${path}img/${res1.img}`")
		h1.artist__head--name {{res1.name}}
		Back
	section.artist__live
		h2.artist__live--headline 次のライブ
		router-link(:to="`${routerPath}event/${eventLink}`")
			div.artist__live--img
				img(:src="resentLiveImg")
			h3.artist__live--ttl {{resentLiveTtl}}
	Lives(:value="$route.params.artistId")
	Navigation(value="search",ref="nav")
</template>

<script>
import Head from "@/components/Head.vue";
import Navigation from "@/components/Navigation.vue";
import Back from "@/components/Back.vue";
import Lives from "@/components/Lives.vue";
import Mixin from "@/mixins/Mixin.vue";
export default {
  name: "artist",
  mixins: [Mixin],
  components: {
    Head,
    Navigation,
    Back,
    Lives,
  },
  props: {
    artistId: Number,
  },
  data() {
    return {
      res1: [],
      res2: [],
      event: [],
      eventLink: 0,
      id: 0,
      resentLiveImg: "",
      resentLiveTtl: "",
      live: 0,
    };
  },
  mounted() {
    this.id = this.$route.params.artistId - 1;
    fetch(`${this.productsData}`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        this.res1 = json.artist[this.id];
        this.res2 = json.event;
        for (let i = 0; i < this.res2.length; i++) {
          if (this.res2[i].artistId == this.$route.params.artistId) {
            this.event.push(this.res2[i]);
          }
        }
        this.resentLiveImg = `${this.path}img/${this.event[0].img}`;
        this.resentLiveTtl = this.event[0].ttl;
        this.live = this.event.length;
        this.eventLink = this.event[0].eventId;
      });
  },
};
</script>

<style lang="scss">
@import "../../public/css/slick-theme.css";
@import "../../public/css/slick.css";
@import "@/assets/scss/common.scss";
.artist {
  @include headSet();
  &__live {
    width: 100vw;
    overflow: hidden;
    &--headline {
      font-size: 2.4rem;
      margin: 24px 5% 16px;
      + a {
        display: block;
      }
    }
    &--img {
      width: 90%;
      height: 200px;
      margin: 0 auto;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &--ttl {
      width: 90%;
      font-size: 1.4rem;
      font-weight: bold;
      margin: 8px auto 0;
    }
  }
}
</style>
