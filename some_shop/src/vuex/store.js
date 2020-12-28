import Vue from 'vue'
import Vuex from 'vuex'

import commonActions from "@/vuex/actions/actions";
import apiActions from '@/vuex/actions/api-requests';
import mutations from "@/vuex/mutations/mutations";
import getters from "@/vuex/getters/getters";

const actions = {...commonActions, ...apiActions};

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        products: [],
        cart: []
    },
    mutations,
    actions,
    getters
});

export default store;
