<template>
  <div class="card" :class="cardClass" @click="openCard">
    <h3 class="card__title">{{ title }}</h3>
    <img :src="imgSrc" :alt="category" class="card__img" />
    <p class="card__desc">{{ description }}</p>
    <p class="card__price">Preice: {{ price }}</p>
  </div>
</template>

<script>
//(Заголовок, опис товару(повинен відкриватись/закриватись по натисканню), зображення, ціна)
export default {
  name: "product-cart",
  props: {
    title: {
      type: String,
      default: "",
    },
    imgSrc: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    price: {
      tupe: Number,
      default: 0,
    },
    category: {
      type: String,
      default: "",
    },
    cardClass: {
      type: String,
      default: "",
    },
  },
  emits: ["open"],
  methods: {
    openCard() {
      this.$emit("open");
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  &:hover {
    cursor: pointer;
  }

  &__title {
    color: #222221;
    line-height: 1.3;
    letter-spacing: 0.3px;
    font-weight: normal;
    text-align: center;
  }

  &__img {
    width: 100%;
    height: auto;
  }

  &__desc {
    color: #000;
    font-size: 14px;
    line-height: 1.8;
  }

  &__price {
    font-size: 25px;
    line-height: 25px;
    color: #646464;
  }
}
</style>
