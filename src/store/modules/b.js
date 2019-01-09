// b 页 store

const state = {
  countB: 8
}

const mutations = {
  add(state) {
    state.countB ++
  },
  reduce(state) {
    state.countB --
  }
}

const actions = {
  add:({commit}) => {
    commit('add')
  },
  reduce:({commit}) => {
    commit('reduce')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
