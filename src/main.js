import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router'
import { routes } from './routes';

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({ 
  routes,
  mode: 'history' // necessário configurar o servidor no back-end, para devolver sempre o index.html
 });

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});