import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        items: [],
        showAll: true,
        showActive: false
    },
    mutations: {
        addItem(state, item) {
            state.items.push(item);
        },
        deleteItem(state, item) {
            state.items.splice(state.items.map(e => e.id).indexOf(item.id), 1);
        },
        changeShowAll(state, all) {
            state.showAll = all;
        },
        changeShowActive(state, active) {
            state.showActive = active;
        },
        updateItem(state, item) {
            state.items.splice(state.items.map(e => e.id).indexOf(item.id), 1, item);
        }
    }
})

new Vue({
    store,
    render: h => h(App),
}).$mount('#app')