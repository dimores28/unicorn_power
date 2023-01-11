<template>
  <div class="cart-product">
    <div class="cart-product__body">
      <a :href="`/products/${productId}`" class="cart-product__picture">
        <img :src="imgSrc" :alt="title" />
      </a>

      <a :href="`/products/${productId}`" class="cart-product__title">{{
        title
      }}</a>

      <button class="cart-product__delete" @click="remove">
        <svg
          fill="none"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 12L7 7M12 12L17 17M12 12L17 7M12 12L7 17"
            stroke="black"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
        </svg>
      </button>
    </div>
    <div class="cart-product__footer">
      <div class="cart-product__counter cart-counter">
        <button
          class="cart-counter__button button"
          :disabled="isDisabled || enable"
          @click="decrease"
        >
          <svg
            data-name="Layer 2"
            id="bbb65397-f8ad-414f-bfe7-43e2b5687c88"
            viewBox="0 0 35 35"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            aria-hidden="true"
          >
            <path
              d="M33.5,18.75H1.5a1.25,1.25,0,0,1,0-2.5h32a1.25,1.25,0,0,1,0,2.5Z"
            />
          </svg>
        </button>

        <input type="text" class="cart-counter__input" v-model="quantity" />

        <button
          class="cart-counter__button button"
          :disabled="enable"
          @click="increase"
        >
          <svg
            data-name="Layer 2"
            id="ab635b81-4e6c-4835-8954-fd99216bc317"
            viewBox="0 0 35 35"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            aria-hidden="true"
          >
            <path
              d="M33.5,18.75H1.5a1.25,1.25,0,0,1,0-2.5h32a1.25,1.25,0,0,1,0,2.5Z"
            />
            <path
              d="M17.5,34.75a1.25,1.25,0,0,1-1.25-1.25V1.5a1.25,1.25,0,0,1,2.5,0v32A1.25,1.25,0,0,1,17.5,34.75Z"
            />
          </svg>
        </button>
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
    enable: {
      tupe: Boolean,
      default: false,
    },
  },
  emits: {
    increase: null,
    decrease: null,
    remove: null,
  },
  data() {
    return {
      counter: 1,
    };
  },
  computed: {
    totalPrice() {
      return (parseFloat(this.price) * parseFloat(this.quantity)).toFixed(2);
    },
    isDisabled() {
      return this.quantity < 2;
    },
  },
  methods: {
    productById(id) {
      return this.$store.getters["products/getProductById"](id);
    },
    increase() {
      this.$emit("increase");
    },
    decrease() {
      this.$emit("decrease");
    },
    remove() {
      this.$emit("remove");
    },
  },
  mounted() {
    this.counter = this.quantity;
  },
};
</script>

<style lang="scss" scoped>
.cart-product {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin-bottom: 6px;
  padding: 16px 8px 0;

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
    width: 96px;
    height: 96px;
    margin-right: 16px;

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  &__title {
    flex-grow: 1;
    display: block;
    font-family: "Roboto";
    font-weight: 500;
    margin-bottom: 8px;
    font-size: 16px;
    color: #221f1f;
    text-decoration: none;
    margin-top: 24px;
    margin-left: 8px;
  }

  &__delete {
    width: 46px;
    height: 46px;
    background-color: #fffc;
    border: none;
    border-radius: 8px;
    transition: all 0.2s ease;
    cursor: pointer;
  }

  &__footer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;
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
    padding: 12px;
    cursor: pointer;
    background-color: hsla(0, 0%, 100%, 0.9);
    color: #221f1f;

    svg {
      fill: #086ec7;
      transition-duration: 0.2s;
      transition-property: fill;
      transition-timing-function: ease-in-out;
    }
  }

  &__button:disabled svg {
    fill: #d2d2d2;
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
