import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@views/Home'
import Register from '@views/Register'
import ShopCart from '@views/ShopCart'
import Search from '@views/Search'
import Login from '@views/Login'
import Trade from '@views/Trade'
import Center from '@views/Center'
import PaySuccess from '@views/PaySuccess'
import Pay from '@views/Pay'
//挂载路由
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            name: 'login',
            path: '/login',
            component: Login,
        },
        {
            name: 'register',
            path: '/register',
            component: Register,
        },
        {
            name: 'home',
            path: '/',
            component: Home,
        },
        {
            name: 'shopcart',
            path: '/shopcart',
            component: ShopCart,
        },
        {
            name: 'search',
            // ? 代表可选参数 可以选择带或者不带
            path: '/search/:searchText?',
            component: Search,
        },
        {
            name: 'trade',
            path: '/trade',
            component: Trade,
        },
        {
            name: 'center',
            path: '/center',
            component: Center,
        },
        {
            name: 'paysuccess',
            path: '/paysuccess',
            component: PaySuccess,
        },
        {
            name: 'pay',
            path: '/pay',
            component: Pay,
        },
    ],
})

export default router
