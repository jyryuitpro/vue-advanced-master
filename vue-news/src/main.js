import Vue from 'vue'
import App from './App.vue'
import { router } from './routes/index.js';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // routes: routes,
  router,
}).$mount('#app')
