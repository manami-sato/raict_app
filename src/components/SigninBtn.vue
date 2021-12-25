<template lang="pug">
  div
</template>

<script>
export default {
  name: "Start",
  props: ["value", "flag"],
  // data() {
  //   return {
  //     btnTxt: ["次へ", "次へ", "スキップ", "ライブを確認する"],
  //     btnLink: [
  //       { name: "Signin2" },
  //       { name: "Signin3" },
  //       { name: "Signin4" },
  //       { name: "Home" },
  //     ],
  //     btnFlag: this.flag,
  //   };
  // },
  // update() {
  //   this.btnFlag = this.flag;
  // },
};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
.signin__btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 48px;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 10px;
  font-size: 1.6rem;
  margin: 32px auto 0;
  position: relative;
  opacity: 0.4;
  pointer-events: none;
  &--link {
    display: block;
    width: 100%;
    height: 100%;
    z-index: 5;
    position: absolute;
    top: 0;
    left: 0;
  }
}
// .btnActive {
//   background: #fff;
//   font-weight: bold;
//   opacity: 1;
//   pointer-events: auto;
// }
</style>
