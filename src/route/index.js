import { createRouter, createWebHistory } from "vue-router";
import Home from '../components/home/Home.vue'
import login from '../components/login/Login.vue'

const routes = [
    {
        path: '/:pathMatch(.*)*',
        name: 'login',
        component: login
    },
    {
        path: '/',
        name: 'login',
        component: login
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/viewcontent/:id',
        name: 'viewContent',
        component: () => import(/*webpackChunkName="Details"*/"@/components/home/viewcontent.vue")
    },
    { 
        path: "/cart", 
        name:'Cart',
        component: () => import(/*webpackChunkName="Details"*/"@/components/cart/Cart.vue") 
    },
    { 
        path: "/checkout", 
        name:'checkout',
        component: () => import(/*webpackChunkName="Details"*/"@/components/cart/checkout.vue") 
    }


]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router;