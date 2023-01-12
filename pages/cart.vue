<template>
  <section class="container">
    <h2>Catr</h2>
    <CartItem
      v-for="prod in cartAll"
      :key="prod.productId"
      :title="productById(prod.productId).title"
      :imgSrc="productById(prod.productId).image"
      :price="productById(prod.productId).price"
      :productId="prod.productId"
      :quantity="prod.quantity"
      :enable="inProccess(prod.productId)"
      @increase="inc({ id: prod.productId, cnt: prod.quantity })"
      @decrease="dec({ id: prod.productId, cnt: prod.quantity })"
      @remove="removeItem(prod.productId)"
    />

    <div class="cart-footer">
      <div class="cart-receipt">
        <div class="cart-receipt__sum">
          <p class="cart-receipt__sum-label">Total:</p>
          <div class="cart-receipt__sum-price">
            <span>{{ totalPrice }}</span
            >&nbsp;<span>₴</span>
          </div>
        </div>
        <button class="cart-receipt__submit">Checkout</button>
      </div>
    </div>
  </section>
</template>

<script>
import CartItem from "@/components/CartItem.vue";
export default {
  name: "cart",
  async fetch({ store }) {
    if (!store.getters["products/getProductsAll"]) {
      await store.dispatch("products/all");
    }

    if (!store.getters["cart/getCart"]) {
      await store.dispatch("cart/loadCart");
    }
  },
  components: {
    CartItem,
  },
  computed: {
    cartAll() {
      return this.$store.getters["cart/getItemsInCart"];
    },
    totalPrice() {
      let arr = [];

      this.cartAll.forEach((element) => {
        let rezult =
          element.quantity * this.productById(element.productId).price;
        arr.push(rezult);
      });

      return arr.reduce((sum, current) => sum + current, 0).toFixed(2);
    },
  },
  methods: {
    productById(id) {
      return this.$store.getters["products/getProductById"](id);
    },
    inc({ id, cnt }) {
      this.$store.dispatch("cart/setCnt", { id, cnt: cnt + 1 });
    },
    dec({ id, cnt }) {
      this.$store.dispatch("cart/setCnt", { id, cnt: cnt - 1 });
    },
    inProccess(id) {
      return this.$store.getters["cart/inProccess"](id);
    },
    removeItem(productId) {
      this.$store.dispatch("cart/remove", productId);
    },
  },
};
</script>

<style lang="scss" scoped>
.cart-footer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: #fff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
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

  &__sum {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 16px;

    &-label {
      font-size: 20px;
    }

    &-price {
      margin-left: auto;
      font-size: 20px;
    }
  }

  &__submit {
    width: 100%;
    height: 48px;
    font-size: 18px;
    line-height: 48px;
    color: #fff;
    background-color: #00a046;
    border: none;
    border-radius: 4px;
    box-sizing: border-box;
    display: inline-block;
    margin: 0;
    outline: none;
    padding-left: 24px;
    padding-right: 24px;
    text-align: center;
    transition-duration: 0.2s;
    transition-property: color, background-color, border-color;
    transition-timing-function: ease-in-out;
    cursor: pointer;
  }
}

@media (min-width: 768px) {
  .cart-receipt {
    flex-direction: row;
    width: auto;
    margin-left: auto;
    padding: 24px;

    &__sum {
      width: auto;
      margin-right: 24px;
      margin-bottom: 0;

      &-label {
        display: none;
      }

      &-price {
        margin-left: 0;
        font-size: 24px;
      }
    }

    &__submit {
      width: auto;
    }
  }
}
</style>
