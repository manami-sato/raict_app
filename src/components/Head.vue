<template lang="pug">
	header.head
		h1 {{value}}
</template>

<script>
export default {
  name: "Navgation",
  props: ["value"],
};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
.head {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 56px;
  background: #fff;
  border-bottom: $background 1px solid;
  font-weight: bold;
  position: fixed;
  top: 0;
  left: 0;
  h1 {
    font-size: 1.5rem;
  }
}
</style>
