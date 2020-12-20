<template>
  <div class="v-catalog-item">
    <img class="v-catalog-item__image" :src="require('../assets/images/' + productData.image)" alt="alt">
    <p class="v-catalog-item__name"> {{ productData.name }}</p>
    <p class="v-catalog-item__price">Price: {{ productData.price }}</p>
    <button  class="v-catalog-item__add_to_cart btn" @click="addToCart">Add to cart</button>
  </div>
</template>

<script>
export default {
  name: "v-catalog-item",
  props: {
    productData: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    addToCart() {
      this.$emit('addToCart', this.productData);
    }
  }
}
</script>

<style lang="scss">
  .v-catalog-item {
    flex-basis: 25%;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: $pad*2;
    margin-bottom: $mar*2;
  }
  .v-catalog-item__image {
    width: 100px;
  }
</style>
