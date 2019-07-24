import types from './mutationType';
import { addTodo, getTodos, putTodo, deleteTodo } from '@/apis/todo'

export default {
    async loadTodos({ commit }) {
        const result = await getTodos();
        commit(types.LOAD_ITEMS, result.data);
    },
    async addTodo({ commit }, item) {
        await addTodo(item);
        const result = await getTodos();
        commit(types.LOAD_ITEMS, result.data);
    },
    async deleteTodo({ commit }, id) {
        await deleteTodo(id);
        const result = await getTodos();
        commit(types.LOAD_ITEMS, result.data);
    },
    async updateTodo({ commit }, item) {
        await putTodo(item.id, item);
        const result = await getTodos();
        commit(types.LOAD_ITEMS, result.data);
    }
}