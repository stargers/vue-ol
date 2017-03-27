import Vue from 'vue'
import App from './App.vue'
import './store/stores'

import './assets/css/ol.css'
import './assets/css/app.css'
import './assets/css/iview.css'

new Vue({
  el: '#app',
  render: h => h(App)
})
