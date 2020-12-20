import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        products: [],
        cart: []
    },
    mutations: {
        SET_PRODUCT_TO_STATE: (state, products) => {
            state.products = products;
        },
        SET_TO_CART: (state, product) => {
            let isProductExist = false
            state.cart.map(function (item) {
                if (item.article === product.article) {
                    isProductExist = true
                    item.quantity++
                }
            })
            isProductExist || state.cart.push({ ...product, quantity: 1 })
        },
        DEL_FROM_CART: (state, index) => {
            state.cart.splice(index, 1);
        },
        INCREMENT: (state, index) => {
            console.log(state.cart[index].quantity);
            state.cart[index].quantity++;
        },
        DECREMENT: (state, index) => {
            console.log(state.cart[index].quantity);
            if (state.cart[index].quantity > 1){
                state.cart[index].quantity--;
            }
        },
    },
    actions: {
        GET_PRODUCTS_FROM_API({commit}){
            return axios('http://localhost:3000/products', {
                method: "GET"
            }).then((products)=>{
                commit('SET_PRODUCT_TO_STATE', products.data);
                return products;
                });
        },
        ADD_TO_CART({commit}, product){
            commit('SET_TO_CART', product);
        },
        DELETE_FROM_CART({commit}, index){
            commit('DEL_FROM_CART', index)
        },
        INCREMENT_CART_ITEM({commit}, index){
            commit('INCREMENT', index);
        },
        DECREMENT_CART_ITEM({commit}, index){
            commit('DECREMENT', index);
        },
    },
    getters: {
        PRODUCTS(state){
            return state.products;
        },
        CART(state){
            return state.cart;
        }
    }

});

export default store;
