<template>
  <header>
    <nav class="navbar">
      <div class="navbar__item">
        <nuxt-link exact active-class="active" to="/">Home</nuxt-link>
        <nuxt-link active-class="active" to="/products">Shop</nuxt-link>
        <nuxt-link active-class="active" to="/about">About us</nuxt-link>
      </div>

      <div>
        <nuxt-link active-class="active" to="/cart">Cart</nuxt-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "navbar",
};
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  background-color: #333;

  .navbar__item {
    display: flex;
  }

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
  background-color: #4caf50;
}
</style>
