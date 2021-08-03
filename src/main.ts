import "reflect-metadata"
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

import {container} from "tsyringe";
Object.defineProperty(Vue.prototype, '$container', {value: container});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
