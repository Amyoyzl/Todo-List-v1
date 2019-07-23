const mutations = {
    changeShowAll: (state, all) => {
        state.showAll = all;
    },
    changeShowActive: (state, active) => {
        state.showActive = active;
    },
    loadItems: (state, items) => {
        state.items = items;
    }
}

export default mutations;