<template>
  <section class="container">
    <div class="filters">
      <label for="category"> Category: </label>
      <select v-model="selectedCategory" id="category" class="product-filter">
        <option
          v-for="category in availableCategories"
          :value="category"
          :key="category"
        >
          {{ category }}
        </option>
      </select>
    </div>

    <div class="row">
      <product-card
        v-for="prod in filteredProducts"
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
  name: "products-list",
  async fetch({ store }) {
    if (!store.getters["products/getProductsAll"]) {
      await store.dispatch("products/all");
    }

    if (!store.getters["category/getAllCategories"]) {
      await store.dispatch("category/AllCategories");
    }
  },

  components: {
    ProductCard,
  },

  data() {
    return {
      selectedCategory: null,
      filteredProducts: [],
    };
  },

  computed: {
    productsAll() {
      return this.$store.getters["products/getProductsAll"];
    },

    availableCategories() {
      return [
        "(no category)",
        ...this.$store.getters["category/getAllCategories"],
      ];
    },
  },

  methods: {
    openCart(id) {
      this.$router.push("/products/" + id);
    },

    filterByCategory() {
      if (this.selectedCategory === this.availableCategories[0]) {
        this.filteredProducts = [...this.productsAll];
      } else {
        this.filteredProducts = this.productsAll.filter(
          (pr) =>
            pr.category.toLowerCase() === this.selectedCategory.toLowerCase()
        );
      }
    },

    syncHash() {
      const urlParams = new URLSearchParams(window.location.hash.substring(1));
      const entries = Object.fromEntries(urlParams.entries());

      if (entries.category) {
        this.selectedCategory = entries.category;
      }
    },

    updateHash() {
      const urlParams = new URLSearchParams();

      if (this.selectedCategory !== "") {
        urlParams.append("category", this.selectedCategory);
      }

      window.location.hash = urlParams.toString();
    },
  },

  created() {
    this.selectedCategory = this.availableCategories[0];
    window.addEventListener("hashchange", this.syncHash);
    this.syncHash();
  },

  beforeUnmount() {
    window.removeEventListener("hashchange", this.syncHash);
  },

  watch: {
    selectedCategory() {
      this.filterByCategory();
      this.updateHash();
    },
  },
};
</script>

<style lang="scss" scoped>
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

  .filters {
    text-align: center;

    label {
      display: none;
    }
  }

  .product-filter {
    width: 260px;
  }
}
</style>
