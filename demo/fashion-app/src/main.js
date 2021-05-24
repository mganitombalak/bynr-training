import { createApp } from 'vue'
import {createRouter,createWebHistory} from 'vue-router'
import root from './pages/Root';
import shopPage from './pages/shop/Shop';
import HomePage from './pages/home/Home';

import '../src/assets/css/style.css';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path:'/',component:HomePage},
        { path: '/shop', component: shopPage },
        { path: '/shop/:id', component: shopPage },
        { path: '/', component: shopPage },
    ],
    linkActiveClass:'active'
});


let app = createApp(root);
app.use(router);
app.mount('#app')