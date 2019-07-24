import types from './mutationType'

const mutations = {
    [types.CHANGE_SHOW_ALL]: (state, all) => {
        state.showAll = all;
    },
    [types.CHANGE_SHOW_ACTIVE]: (state, active) => {
        state.showActive = active;
    },
    [types.LOAD_ITEMS]: (state, items) => {
        state.items = items;
    },
    [types.SET_USER]: (state, user) => {
        state.user = user;
    }
}

export default mutations