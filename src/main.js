import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
Vue.config.productionTip = false


// 新版写法
new Vue({
  render: h => h(App),
  store
}).$mount('#app')

// 旧版写法
// new Vue({
//   el: '#app',
//   store,
//   components: { App },
//   template: '<App/>'
// })
