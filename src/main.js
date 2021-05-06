import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: '',
    // libraries: 'places',
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
