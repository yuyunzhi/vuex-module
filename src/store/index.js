import Vue from 'vue'
import Vuex from 'vuex'
import countA from './modules/a'
import countB from './modules/b'
import countC from './modules/c'

Vue.use(Vuex)

// 全局 modules
export default new Vuex.Store({
    state:{
        xxx:'hahaha'
    },
  modules: {
    countA,
    countB,
    countC,
  }
})
