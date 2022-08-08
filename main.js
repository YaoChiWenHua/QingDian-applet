import Vue from 'vue'
import App from './App'

import * as api from './api'
import store from './store'
import util from './util.js'

Vue.config.productionTip = false

// 将api挂载到vue的原型上
Vue.prototype.$api = api

Vue.prototype.$store = store

Vue.prototype.$util = util
App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
