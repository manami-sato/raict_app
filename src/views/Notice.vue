<template lang="pug">
main.notice
	Head(value="通知",ref="head")
	div(v-for="i in 4").notice__list
		div.notice__list--icon
			img(:src="`${path}img/${list.icon}`")
		p.notice__list--msg {{list.msg}}
		span.notice__list--date {{list.date}}日前
	Navigation(value="Notice",ref="nav")
</template>

<script>
import Head from "@/components/Head.vue";
import Navigation from "@/components/Navigation.vue";
import Mixin from "@/mixins/Mixin.vue";
export default {
  name: "Notice",
  components: {
    Head,
    Navigation,
  },
  mixins: [Mixin],
  data() {
    return {
      list: {
        icon: "profile_icon.png",
        msg: "運営からのメッセージが届きます。こんな感じで届きます。応募したアーティストからもメッセージが届いたりします。",
        date: "6",
      },
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
.notice {
  padding: 56px 0;
  &__list {
    padding: 16px 24px;
    border-bottom: $background 1px solid;
    &:last-of-type {
      border-bottom: none;
    }
    &--icon {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    &--msg {
      font-size: 1.3rem;
      margin: 8px 0;
    }
    &--date {
      color: $gray;
    }
  }
}
</style>
