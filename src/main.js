import Vue from 'vue'
import store from './store'
import router from './router'
import vuetify from '@/plugins/vuetify'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
