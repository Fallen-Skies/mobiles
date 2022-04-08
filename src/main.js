import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
import compents from './apis/compents.js'


Vue.use(Vant)

import axios from 'axios'
// Vue.use(axios)  // 这里这么使用会报错  Cannot read property 'protocol' 
Vue.prototype.$axios = axios;
Vue.prototype.$compents = compents
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
