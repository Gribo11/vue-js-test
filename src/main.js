import Vue from 'vue'
import App from './App.vue'
import store from './store'
import axios from 'axios'
import vuetify from '@/vuetify'

Vue.config.productionTip = false


window.axios = require('axios');

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
