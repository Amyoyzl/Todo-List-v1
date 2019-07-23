const mutations = {
    addItem: (state, item) => {
        state.items.push(item);
    },
    deleteItem: (state, item) => {
        state.items.splice(state.items.map(e => e.id).indexOf(item.id), 1);
    },
    changeShowAll: (state, all) => {
        state.showAll = all;
    },
    changeShowActive: (state, active) => {
        state.showActive = active;
    },
    updateItem: (state, item) => {
        state.items.splice(state.items.map(e => e.id).indexOf(item.id), 1, item);
    },
    loadItems: (state, items) => {
        state.items = items;
    }
}

export default mutations;