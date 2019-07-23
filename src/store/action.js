import axios from 'axios';

const baseUrl = "http://localhost:3001/todos"

const actions = {
    addTodos({ dispatch }, item) {
        axios.post(baseUrl, item)
            .then(response => dispatch('getTodos'));
    },
    getTodos({ commit }) {
        axios.get(baseUrl).then(response => commit('loadItems', response.data));
    },
    updateTodo({ dispatch }, item) {
        axios.put(`${baseUrl}/${item.id}`).then(response => dispatch('getTodos'));
    },
    deleteTodo({ dispatch }, id) {
        axios.delete(`${baseUrl}/${id}`).then(response => dispatch('getTodos'));
    }

}

export default actions;