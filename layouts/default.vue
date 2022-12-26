<template>
   <div>
      <nav-bar/>
      <main>
         <div class="container">
            <nuxt />
         </div>
      </main>
   </div>
</template>

<script>
import NavBar from "@/components/Nav.vue"
export default {
   components: {
      NavBar
   }
}
</script>