<template>
  <div>
    <h1>Nuxt 2 template</h1>
    <span class="test"> Hello there </span>
    <button @click="getProd">Click me</button>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  computed: {
    productById(id) {
      return this.$store.getters["products/getProductById"](id);
    },
  },
  methods: {
    getProd() {
      console.log(this.$store.getters["products/getProductById"](1));
    },
  },
};
</script>

<style lang="sass" scoped>
div
  .test
    color: red
</style>
