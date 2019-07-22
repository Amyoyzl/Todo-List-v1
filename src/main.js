import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        items: [],
        showItems: [],
        filterMethods: ["All", "Active", "Complete"]
    },
    mutations: {
        addItem(state, item) {
            state.items.push(item);
            state.showItems.push(item);
        },
        deleteItem(state, item) {
            state.items.splice(state.items.indexOf(item), 1);
            state.showItems.splice(state.showItems.indexOf(item), 1);
        },
        change(state, item) {
            state.items.splice(item.id, 1, item);
            state.showItems.splice(item.id, 1, item);
        },
        filter(state, method) {
            switch (method) {
                case 'All':
                    state.showItems = state.items.slice();
                    break;
                case 'Active':
                    state.showItems = state.items.filter(item => !item.isChecked);
                    break;
                case 'Complete':
                    state.showItems = state.items.filter(item => item.isChecked);
                    break;
            }
        }
    }
})

new Vue({
    store,
    render: h => h(App),
}).$mount('#app')