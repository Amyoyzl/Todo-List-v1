import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        items: []
    },
    mutations: {
        addItem(state, item) {
            state.items.push(item);
        },
        change(state, item) {
            state.items.splice(item.id, 1, item);
        }
    }
})

new Vue({
    store,
    render: h => h(App),
}).$mount('#app')