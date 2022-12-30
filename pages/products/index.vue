<template>
  <section class="container">
    <div class="filters">
      <label for="category">
        Category:
        <select v-model="selectedCategory" id="category" class="product-filter">
          <option
            v-for="category in availableCategories"
            :value="category"
            :key="category"
          >
            {{ category }}
          </option>
        </select>
      </label>
    </div>

    <div class="row">
      <product-card
        v-for="prod in cards"
        :key="prod.id"
        :title="prod.title"
        :imgSrc="prod.image"
        :description="prod.description"
        :price="prod.price"
        :category="prod.category"
        cardClass="col"
        @open="openCart(prod.id)"
      >
      </product-card>
    </div>
  </section>
</template>

<script>
import ProductCard from "@/components/CardProduct.vue";
export default {
  async fetch({ store }) {
    // if (!store.getters.products) {
    //   await store.dispatch("products/all");
    // }
    // if (!store.getters["category/category"]) {
    //   await store.dispatch("category/AllCategories");
    // }
  },

  components: {
    ProductCard,
  },

  data() {
    return {
      cards: [
        {
          category: "men's clothing",
          description:
            "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
          id: 1,
          image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
          price: 109.95,
          rating: { rate: 3.9, count: 120 },
          title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        },
        {
          category: "men's clothing",
          description:
            "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
          id: 2,
          image:
            "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
          price: 22.3,
          rating: { rate: 4.1, count: 259 },
          title: "Mens Casual Premium Slim Fit T-Shirts ",
        },
        {
          category: "women's clothing",
          description:
            "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
          id: 20,
          image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
          price: 12.99,
          rating: { rate: 3.6, count: 145 },
          title: "DANVOUY Womens T Shirt Casual Cotton Short",
        },
      ],
      selectedCategory: null,
    };
  },

  computed: {
    productsAll() {
      return this.$store.getters["products/getProductsAll"];
    },

    availableCategories() {
      return this.$store.getters["category/getAllCategories"];
    },
  },

  methods: {
    openCart(id) {
      this.$router.push("/products/" + id);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1180px;
  margin: 0 auto;
  padding: 15px;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
}

.col {
  width: calc(100% / 3 - 30px);
  margin: 15px;
}

.filters {
  margin-top: 30px;
  margin-bottom: 26px;
}

.product-filter {
  border: 1px solid #ccc;
  border-radius: 0px;
  display: inline-block;
  width: 300px;
  height: 34px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.5;
  color: #555;
  background-color: #fff;
}

@media screen and (max-width: 920px) {
  .col {
    width: calc(100% / 2 - 30px);
  }
}

@media screen and (max-width: 540px) {
  .col {
    width: calc(100% / 1 - 30px);
  }
}
</style>
