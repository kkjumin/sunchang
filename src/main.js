import '@babel/polyfill';
import Vue from 'vue';
import VueLodash from 'vue-lodash';
import lodash from 'lodash';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
// lodash
Vue.use(VueLodash, { name: 'custom', lodash });
// axios
Vue.prototype.$http = axios;
// eventBus
Vue.prototype.$bus = new Vue();

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
