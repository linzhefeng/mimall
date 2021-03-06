import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../pages/home.vue'),
        redirect: '/index',
        children: [
            {
                path: 'index',
                name: 'index',
                component: () => import('../pages/index.vue')
            },
            {
                path: 'product/:id',
                name: 'product',
                component: () => import('../pages/product.vue')
            },
            {
                path: 'detail/:id',
                name: 'detail',
                component: () => import('../pages/detail.vue')
            }
        ]
    },
    {
        path: '/cart',
        name: 'cart',
        component: () => import('../pages/cart.vue')
    },
    {
        path: '/order',
        name: 'order',
        component: () => import('../pages/order.vue'),
        children: [
            {
                path: 'list',
                name: 'list',
                component: () => import('../pages/orderList.vue')
            },
            {
                path: 'confirm',
                name: 'confirm',
                component: () => import('../pages/orderConfirm.vue')
            },
            {
                path: 'pay',
                name: 'pay',
                component: () => import('../pages/orderPay.vue')
            },
            {
                path: 'alipay',
                name: 'alipay',
                component: () => import('../pages/alipay.vue')
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../pages/login.vue')
    }
]

const router = new VueRouter({
    // mode: 'history',
    // base: process.env.BASE_URL,
    routes
})

export default router
