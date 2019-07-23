import axios from 'axios';

const baseUrl = "http://localhost:3001/todos"

const actions = {
    addTodos({ dispatch, commit }, item) {
        axios.post(baseUrl, item)
            .then(response => {
                dispatch('getTodos')
            });
        // commit('addItem', response.data));
    },
    getTodos({ commit }) {
        axios.get(baseUrl).then(response => commit('loadItems', response.data));
    }

}

export default actions;