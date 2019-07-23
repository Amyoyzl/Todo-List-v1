import axios from 'axios';

const baseUrl = "http://localhost:3001/todos"

const actions = {
    getTodos({ commit }) {
        axios.get(baseUrl).then(response => commit('loadItems', response.data));
    },
    addTodos({ dispatch }, item) {
        axios.post(baseUrl, item)
            .then(() => dispatch('getTodos'));
    },
    updateTodo({ dispatch }, item) {
        axios.put(`${baseUrl}/${item.id}`, item).then(() => dispatch('getTodos'));
    },
    deleteTodo({ dispatch }, id) {
        axios.delete(`${baseUrl}/${id}`).then(() => dispatch('getTodos'));
    }
}

export default actions;