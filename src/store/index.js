import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        items: [],
        showAll: true,
        showActive: false
    },
    mutations: mutations,
    getters: getters
})