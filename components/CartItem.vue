<template>
  <div class="cart-product">
    <!-- <button>X</button> -->

    <div class="cart-product__body">
      <a :href="`/products/${productId}`" class="cart-product__picture">
        <img :src="imgSrc" :alt="title" />
      </a>

      <a :href="`/products/${productId}`" class="cart-product__title">{{
        title
      }}</a>
    </div>
    <div class="cart-product__footer">
      <div class="cart-product__counter cart-counter">
        <button class="cart-counter__button button" @click="decrease">-</button>

        <input type="text" class="cart-counter__input" v-model="counter" />

        <button class="cart-counter__button button" @click="increase">+</button>
      </div>

      <div class="cart-product__coast">
        <p class="cart-product__price">{{ totalPrice }} <small>₴</small></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    imgSrc: {
      type: String,
      default: "",
    },
    price: {
      tupe: Number,
      default: 0,
    },
    productId: {
      tupe: Number,
      default: 0,
    },
    quantity: {
      tupe: Number,
      default: 0,
    },
  },
  data() {
    return {
      counter: 1,
    };
  },
  computed: {
    totalPrice() {
      return parseFloat(this.price) * parseFloat(this.counter);
    },
  },
  methods: {
    increase() {
      this.counter++;
    },
    decrease() {
      if (this.counter > 1) {
        this.counter--;
      }
    },
  },
  mounted() {
    this.counter = this.quantity;
  },
};
</script>

<style lang="scss" scoped>
.cart-product {
  &__body {
    position: relative;
    display: flex;
    flex-direction: row;
  }

  &__picture {
    display: flex;
    flex-direction: row;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    max-height: 100%;
    width: 96px;
    height: 96px;
    margin-right: 16px;
  }

  &__title {
    flex-grow: 1;
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    color: #221f1f;
    text-decoration: none;
  }

  &__footer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    padding-top: 16px;
    padding-bottom: 16px;
  }

  &__coast {
    text-align: right;
    width: 28%;
    margin-left: 0;
  }

  &__price {
    font-size: 20px;
    white-space: nowrap;
  }
}

.cart-counter {
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  &__input {
    width: 56px;
    height: 40px;
    margin-left: 4px;
    margin-right: 4px;
    text-align: center;
    background-color: #fff;
    box-sizing: border-box;
    padding-left: 12px;
    padding-right: 12px;
    border: 1px solid #d2d2d2;
    border-radius: 4px;
    appearance: none;
    outline: none;
    transition: border 0.2s ease-in-out;
  }

  &__button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    font-size: 16px;
    padding: 0;
  }
}

.button {
  border: none;
  border-radius: 4px;
  box-sizing: border-box;
  margin: 0;
  outline: none;
  position: relative;
  text-align: center;
  transition-duration: 0.2s;
  transition-property: color, background-color, border-color;
  transition-timing-function: ease-in-out;
}
</style>
