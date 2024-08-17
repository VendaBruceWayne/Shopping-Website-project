import { createApp } from 'vue';
import App from './App.vue';
import './main.css';
import * as VueRouter from 'vue-router';
import ShoppingCartPage from './pages/ShoppingCartPage.vue';
import ProductsPage from './pages/ProductsPage.vue';
import ProductDetailPage from './pages/ProductDetailPage.vue';

const routes = [
    {
        path: '/cart',
        component: ShoppingCartPage,
    },
    {
        path: '/products',
        component: ProductsPage,  
    },
    {
        path: '/products/:productId',  
        component: ProductDetailPage,
    }
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(process.env.BASE_URL),
    routes,  // Passing the routes array here
});

createApp(App)
    .use(router)
    .mount('#app');