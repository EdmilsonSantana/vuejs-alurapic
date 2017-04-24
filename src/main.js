import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import VeeValidate from 'vee-validate'
import { routes } from './routes';
import msg from './pt_BR';

Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:3000';
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history' // necessário configurar o servidor no back-end, para devolver sempre o index.html
});


Vue.use(VeeValidate, {
  locale: 'pt_BR',
  dictionary: {
    pt_BR: {
      messages: msg.messages,
      attributes: msg.attributes,
    },
  },
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

