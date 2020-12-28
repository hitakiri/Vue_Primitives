export default {
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
    }
}
