<template lang="pug">
main.live
	Navigation(value="Live",ref="nav")
</template>

<script>
import Head from "@/components/Head.vue";
import Navigation from "@/components/Navigation.vue";
// import common from "@/assets/js/common.js";
export default {
  name: "Live",
  components: {
    Head,
    Navigation,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
</style>
