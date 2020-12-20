// import './assets/styles/style.scss'
import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'
import router from "./router/router";

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
  store,
  router
}).$mount('#app')
