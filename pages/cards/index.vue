<template>
   
</template>

<script>
export default {

   mounted() {
      fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
   }
}
</script>