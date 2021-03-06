/* eslint-disable import/no-extraneous-dependencies */
import '@babel/polyfill';
import Vue from 'vue';
import VueLodash from 'vue-lodash';
import lodash from 'lodash';
import axios from 'axios';
import VueQuillEditor from 'vue-quill-editor';
import App from './App.vue';
import router from './router';
import store from './store';

import '@/assets/css/reset.css';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';

Vue.config.productionTip = false;
// lodash
Vue.use(VueLodash, { name: 'custom', lodash });
Vue.use(VueQuillEditor /* { default global options } */);
// axios
Vue.prototype.$http = axios;
// eventBus
Vue.prototype.$bus = new Vue();

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
