<template>
  <div class="v-cart-item">
    <img class="v-cart-item__image" :src="require('../assets/images/' + cart_item_data.image)" alt="alt">
    <div class="cart_item__info">
      <p>{{ cart_item_data.name }}</p>
      <p>{{ cart_item_data.price }}</p>
      <p>{{ cart_item_data.article }}</p>
    </div>
    <div class="cart_item_data__quantity">
      <p>Qty:</p>
      <span>
        <span class="quantity_btn" @click="decrementItem">-</span>
        {{ cart_item_data.quantity }}
        <span class="quantity_btn" @click="incrementItem">+</span>
      </span>

    </div>
    <button @click="deleteFromCart">Delete</button>
  </div>
</template>

<script>

export default {
  name: "v-cart-item",
  props: {
    cart_item_data:{
      type: Object,
      default(){
        return {};
      }
    }
  },
  methods:{
    deleteFromCart(){
      this.$emit('deleteFromCart')
    },
    decrementItem(){
      this.$emit('decrement')
    },
    incrementItem(){
      this.$emit('increment')
    }
  }
}
</script>

<style lang="scss">
  .v-cart-item{
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 5px 0 #e0e0e0;
    padding: $pad*2;
    margin-bottom: $mar*2;
  }
  .v-cart-item__image{
    width: 48px;
    box-shadow: 0 0 2px 0 #e0e0e0;
    padding: $pad/2;
    margin-bottom: $mar/2;
  }
  .quantity_btn {
    cursor: pointer;
    padding: 5px 8px;
    box-shadow: 0 0 2px 0 #e0e0e0;
    font-size: 1.2em;
  }
</style>
