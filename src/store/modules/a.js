// a 页 store

const state = {
  countA: 1
}

const mutations = {
  add(state) {
      state.countA ++
  },
  reduce(state) {
    state.countA --
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
