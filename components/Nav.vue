<template>
   <nav class="navbar">
      <nuxt-link active-class="active" to="/">Carts</nuxt-link>
      <nuxt-link active-class="active" to="/about">About us</nuxt-link>
   </nav>
</template>

<script>
export default {
   name: "navbar",
}
</script>

<style lang="scss" scoped>
.navbar {
   display: flex;
   background-color: #333;

   a {
      display: block;
      color: white;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
   }

   a:hover {
      background-color: #111;
   }
}

.active {
  background-color: #4CAF50;
}
</style>