<template>
   <section>
      <h3>{{ $route.params.id }}</h3>
      <img :src="$route.params.image" :alt="$route.params.title">
      <p>{{ $route.params.title }}</p> 
      <p>Price: {{ $route.params.price }}</p>
      <p>{{ $route.params.description }}</p>
   </section>
</template>

<script>
export default {

   computed: {
      productById(){
         return this.$store.getters['products/getProductById'];
      }
   },
}
</script>