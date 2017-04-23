import Cadastro from './components/cadastro/Cadastro.vue';
import Home from './components/home/Home.vue';

export const routes = [
    { path: '', name: 'home', component: Home, label: 'Home', menu: true },
    { path: '/cadastro', name: 'cadastro', component: Cadastro, label: 'Cadastro', menu: true },
    { path: '/cadastro/:id', name: 'altera', component: Cadastro, label: 'Cadastro' },
    { path: '*', component: Home },
];