<template>
  <div class="card" :class="cardClass" @click="openCard">
    <h2 class="card__title">{{ title }}</h2>
    <img :src="imgSrc" :alt="category" class="card__image" />

    <div class="card__desc">
      <h3 class="card__desc_title">Description:</h3>
      <p>
        {{ description }}
      </p>
    </div>
    <div class="card__price">Preice: {{ price }}</div>
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
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 10px 12px 14px 12px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  &__title {
    color: #222221;
    line-height: 1.3;
    letter-spacing: 0.3px;
    font-weight: normal;
    text-align: center;
    font-size: 20px;
    min-height: 54px;
  }

  &__image {
    display: block;
    max-width: 100%;
    height: 200px;
    margin: 0 auto;
  }

  &__desc {
    color: #000;
    font-size: 14px;
    line-height: 1.8;
    position: relative;
    padding-bottom: 20px;

    &_title {
      text-transform: uppercase;
      line-height: 26px;
      text-transform: uppercase;
      color: rgba(35, 31, 32, 0.5);
      transition: 0.3s;
    }

    p {
      overflow: hidden;
      height: 20px;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }

  &__price {
    font-size: 25px;
    line-height: 25px;
    color: #646464;
    margin-top: auto;
    padding-top: 16px;
  }
}
</style>
