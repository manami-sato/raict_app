<template lang="pug">
	div(@click="back").back
		svg(version="1.1",xmlns="http://www.w3.org/2000/svg",xmlns:xlink="http://www.w3.org/1999/xlink",x="0px",y="0px",viewBox="0 0 10 18.8",style="enable-background:new 0 0 10 18.8;",xml:space="preserve").back__svg
			path(d="M7.8,0L10,1.8L3.7,9.4L10,17l-2.2,1.8L0,9.4L7.8,0z").back__svg--path
</template>

<script>
export default {
  name: "Back",
  methods: {
    back() {
      history.back();
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
.back {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background: rgba($color: #000000, $alpha: 0.6);
  border-radius: 50%;
  position: absolute;
  top: 56px;
  left: 24px;
  &__svg {
    width: 10px;
    margin-right: 2px;
    &--path {
      fill-rule: evenodd;
      clip-rule: evenodd;
      fill: #ffffff;
    }
  }
}
</style>
