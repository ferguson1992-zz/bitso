import Vue from 'vue'
import Vuex from 'vuex'
import bitcoin from './bitcoin';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    getters: {},
    modules: {
        bitcoin
    }
})