<template>
  <section>
    <div class="container">
      <div class="product">
        <div class="product__img">
          <img :src="product.image" :alt="product.title" />
        </div>
        <div>
          <h3 class="product__title">{{ product.title }}</h3>
          <p class="product__price">Price: {{ product.price }} ₴</p>
          <div class="product__desc">
            <div class="product__desc_title">Description:</div>
            <div class="product__desc_text">
              {{ product.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      product: {},
    };
  },
  methods: {
    productById(id) {
      return this.$store.getters["products/getProductById"](id);
    },
  },
  mounted() {
    this.product = this.productById(this.$route.params.id);
  },
};
</script>

<style lang="scss" scoped>
.product {
  display: flex;

  &__img {
    flex-basis: 50%;
    flex-grow: 0;
    margin-right: 60px;
    flex-shrink: 0;
  }

  &__title {
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.5;
    padding-top: 12px;
    padding-bottom: 8px;
    color: #2e2f3a;
  }

  &__price {
    color: #ff445e;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: bold;
    line-height: 1.6;
  }

  &__desc {
    &_title {
      font-size: 1.2rem;
      font-weight: bold;
      line-height: 1.5;
      padding-top: 12px;
      padding-bottom: 8px;
      color: #2e2f3a;
    }
  }
}

@media screen and (max-width: 768px) {
  .product {
    flex-wrap: wrap;
    justify-content: center;

    &__img {
      margin: 0;
    }
  }
}
</style>
