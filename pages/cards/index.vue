<template>
   <section class="container">
      <h2>Cards</h2>
      <ul>
         <li v-for="prod in productsAll" :key="prod.id">
            <a href="#" @click.prevent="openCart(prod)">{{ prod.title }}</a>
         </li>
      </ul>
   </section>
</template>

<script>
export default {
   async fetch({store}){
      if(!store.getters.products){
         await store.dispatch("products/all");
      }
   },
   data(){
      return{
         cards: [
            {
               category: "men's clothing",
               description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
               id: 1,
               image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
               price: 109.95,
               rating: {rate: 3.9, count: 120},
               title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
            },
            {
               category: "men's clothing",
               description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
               id: 2,
               image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
               price: 22.3,
               rating: {rate: 4.1, count: 259},
               title: "Mens Casual Premium Slim Fit T-Shirts ",
            },
            {
               category: "women's clothing",
               description: "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
               id: 20,
               image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
               price: 12.99,
               rating: {rate: 3.6, count: 145},
               title: "DANVOUY Womens T Shirt Casual Cotton Short",
            }
         ]
      }
   },

   computed: {
      productsAll(){
         console.log(this.$store.getters['products/getProductsAll']);
         return this.$store.getters['products/getProductsAll'];
      }
   },

   methods: {
      openCart(card){
         this.$router.push("/cards/"+ card.id);
      }
   },

   mounted() {
      // fetch('https://fakestoreapi.com/products')
      //       .then(res=>res.json())
      //       .then(json=>console.log(json));

      this.$axios.get('https://fakestoreapi.com/products')
   }
}
</script>