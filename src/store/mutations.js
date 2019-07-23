const mutations = {
    changeShowAll: (state, all) => {
        state.showAll = all;
    },
    changeShowActive: (state, active) => {
        state.showActive = active;
    },
    loadItems: (state, items) => {
        state.items = items;
    },
    setUser: (state, user) => {
        state.user = user;
    }
}

export default mutations;