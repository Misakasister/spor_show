import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import axios from 'axios'
Vue.use(MuseUI);
Vue.config.productionTip = false
Vue.prototype.axios = axios
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
