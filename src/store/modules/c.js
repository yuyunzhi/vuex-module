// c 页 store

const state = {
  countC: 10
}

const mutations = {
  add(state,param) {
    state.countC += param
  },
  reduce(state,param) {
    state.countC -= param
  }
}

const actions = {
  add:({commit},param) => {
    commit('add',param)
  },
  reduce:({commit},param) => {
    commit('reduce',param)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
