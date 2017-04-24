import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import VeeValidate from 'vee-validate'
import { routes } from './routes';
import msg from './pt_BR';

//import 'bootstrap/dist/css/bootstrap.css';
//import './assets/css/teste.css'; 
//import './assets/js/teste.js';
//import 'bootstrap/dist/js/bootstrap.js';

Vue.use(VueResource);

Vue.http.options.root = process.env.API_URL ? process.env.API_URL : 'http://localhost:3000';
Vue.http.interceptors.push((req, next) => {
  //req.headers.set('Authorization', 'token');
  console.log('Lidando com o request');
  next(res => {
    console.log('Lidando com a resposta');
    console.log(res.body);
  });
});

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

