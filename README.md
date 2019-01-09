# vuex 多模块状态管理 Demo
这是一个将 `Vuex` 拆分 `store` 以及多模块管理的 `Demo`，可以应用在项目非常大的情况下，将各类状态分类处理进行维护。

## store
`store` 目录下的 `modules` 放置单独的各个模块。
> 除此之外还可以使用 `param` 传参的方式，`Demo` 中 `modules` 的 `c.js` 为传参方式。 

```JS
// a.js
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
```
<br>
`index.js` 为入口文件。

```JS
import Vue from 'vue'
import Vuex from 'vuex'
import countA from './modules/a'
import countB from './modules/b'

Vue.use(Vuex)

// 全局 modules
export default new Vuex.Store({
  modules: {
    countA,
    countB
  }
})
```

<br>
`main.js` 引入 `store` 的时候应该引入 `index.js` 入口文件
```JS
import store from './store/index'
```

## 单文件组件
值得注意的是这种方式在每个组件的 `methods` 中使用 `mapActions` 的方式和单状态库使用方式有所区别。具体区别请对照[vuex 单状态库 demo]()
```HTML
<template lang="html">
  <div class="a">
    page a  {{$store.state.countA.countA}}

    <button type="button" name="button" @click="add">增加</button>
    <button type="button" name="button" @click="reduce">删减</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: mapActions('countA',['add','reduce'])
}
</script>

<style lang="css">
</style>
```
