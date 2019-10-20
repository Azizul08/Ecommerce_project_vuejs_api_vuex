import Vue from 'vue'
import App from './App.vue'
// import { request } from 'https'

window.$ = window.jQuery = require('jquery')
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import {routes} from './router/index'
const router = new VueRouter({
  // mode: 'history',
  routes
  
})

import Vuex from 'vuex'
Vue.use(Vuex)
import {storage} from './store/index'
const store = new Vuex.Store(storage)

Vue.config.productionTip = false


new Vue ({
  render: h => h(App),
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
}).$mount('#app')
