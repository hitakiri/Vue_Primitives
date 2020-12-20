<template>
  <div class="v-cart">
    <router-link :to="{name: 'catalog'}">
      <div class="v-catalog__link_to_cart">Catalog</div>
    </router-link>
    <h1>Cart</h1>
    <v-cart-item
      v-for="(cart_item, index) in cart_data"
      :key="cart_item.article"
      :cart_item_data="cart_item"
      @deleteFromCart="deleteFromCart(index)"
      @increment="increment(index)"
      @decrement="decrement(index)"

    />
    <div class="v-cart__total">
      <p class="total_name">Total:</p>
      <p>{{cartTotalCost}}</p>
    </div>
  </div>
</template>

<script>
  import vCartItem from './v-cart-item'
  import {mapActions} from 'vuex'

  export default {
    name: "v-cart",
    components: {
      vCartItem
    },
    props: {
      cart_data: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    computed: {
      cartTotalCost() {
        let result = [];

        if (this.cart_data.length){
          for (let i of this.cart_data) {
            result.push(i.price * i.quantity);
          }

          result = result.reduce(function (sum, el){
            return sum + el;
          });
          return result;
        } else {
          return 0;
        }
      }
    },
    methods: {
      ...mapActions([
        'DELETE_FROM_CART',
        'INCREMENT_CART_ITEM',
        'DECREMENT_CART_ITEM'
      ]),
      deleteFromCart(index){
        this.DELETE_FROM_CART(index);
      },
      decrement(index){
        console.log("decrement");
        this.DECREMENT_CART_ITEM(index);
      },
      increment(index){
        console.log("increment");
        this.INCREMENT_CART_ITEM(index);
      }
    }
  }
</script>

<style lang="scss">
  .v-cart__total {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    padding: $pad*2;
    display: flex;
    justify-content: center;
    background: #246b1e;
    color: #e0e0e0;
    font-size: 1.2em;
  }
  .total_name {
    margin-right: $mar*2;
  }
</style>
