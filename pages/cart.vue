<template>
  <section class="container">
    <h2>Catr</h2>
    <CartItem
      :title="productById(7).title"
      :imgSrc="productById(7).image"
      :price="productById(7).price"
      productId="7"
      quantity="1"
    />

    <div class="cart-footer">
      <div class="cart-receipt">
        <div class="cart-receipt__sum"></div>
      </div>
    </div>
  </section>
</template>

<script>
import CartItem from "@/components/CartItem.vue";
export default {
  name: "cart",
  async fetch({ store }) {
    await store.dispatch("cart/loadCart");
  },
  components: {
    CartItem,
  },
  computed: {},
  methods: {
    productById(id) {
      return this.$store.getters["products/getProductById"](id);
    },
  },
  mounted() {
    console.log(this.productById(7));
  },
};
</script>

<style lang="scss" scoped>
.cart-footer {
  // position: sticky;
  // bottom: -16px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: #fff;
}

.cart-receipt {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 16px;
  background-color: #00a0461a;
  border: 1px solid #00a046;
  border-radius: 4px;
}

@media (min-width: 768px) {
  .cart-receipt {
    flex-direction: row;
    width: auto;
    margin-left: auto;
    padding: 24px;
  }
}
</style>
