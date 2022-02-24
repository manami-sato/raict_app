<template lang="pug">
  header
    div.signin__head
      div(@click="back",v-if="value > 0").signin__head--back
        svg(version="1.1",xmlns="http://www.w3.org/2000/svg",xmlns:xlink="http://www.w3.org/1999/xlink",x="0px",y="0px",viewBox="0 0 10 18.8",style="enable-background:new 0 0 10 18.8;",xml:space="preserve")
          path(d="M7.8,0L10,1.8L3.7,9.4L10,17l-2.2,1.8L0,9.4L7.8,0z")
      h1.signin__head--logo
        img(:src="`${path}img/logo_white.png`",alt="raict")
    div.signin__flow
      div(v-for="(flow,i) in flowTtl",:key="i",:class="{flowOnCircle:value >= i}").signin__flow--parts
        p(v-bind:class="{flowOnTxt:value == i}") step{{i+1}}
        div
    h2(v-text="flowTtl[value]").signin__ttl
</template>

<script>
import Mixin from "@/mixins/Mixin.vue";
export default {
  name: "Start",
  props: ["value"],
  mixins: [Mixin],
  data() {
    return {
      flowTtl: [
        `写真とニックネームを
設定する`,
        `性別と年齢を
設定する`,
        `好きなアーティストを
選んでね`,
        `アカウント登録が
完了しました！`,
      ],
    };
  },
  methods: {
    back() {
      history.back();
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
header {
  width: 90vw;
}
.signin {
  &__head {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
    &--back {
      width: 10px;
      position: absolute;
      left: 0;
      path {
        fill-rule: evenodd;
        clip-rule: evenodd;
        fill: #ffffff;
      }
    }
    &--logo {
      width: 104px;
      height: 64px;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
  &__flow {
    display: flex;
    width: 90%;
    margin: 0 auto;
    &--on {
      font-size: 1.5rem;
      font-weight: bold;
      &::before {
        background: $primaryColor;
      }
    }
    &--parts {
      width: 25%;
      p {
        height: 23px;
        display: flex;
        justify-content: center;
        align-items: flex-end;
      }
      &:first-child {
        div {
          &::before {
            display: none;
          }
        }
      }
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 12px;
        margin-top: 16px;
        position: relative;
        &::before {
          content: "";
          display: block;
          width: 100%;
          height: 2px;
          background: #fff;
          position: absolute;
          right: 50%;
        }
        &::after {
          content: "";
          display: block;
          width: 12px;
          height: 12px;
          background: #fff;
          border-radius: 6px;
          z-index: 1;
        }
      }
    }
  }
  &__ttl {
    font-size: 2.4rem;
    font-weight: normal;
    text-align: center;
    margin: 24px 0 32px;
    white-space: pre-wrap;
  }
}
</style>
