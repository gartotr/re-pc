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

//调用push时会一直重复调用path陷入死循环 在外定义一个
const push = VueRouter.prototype.push
const replace = VueRouter.prototype.replace

//避免编程式导航重复跳转路由报错(search) onAbout改成一个空函数
VueRouter.prototype.push = function(location, onComplete, onAbort) {
    //若要使用第三个参数时候的判断
    if (onComplete && onAbort) {
        return push.call(this, location, onComplete, onAbort)
    }

    // 改写push时候this会出现问题 修正this指向
    return push.call(this, location, onComplete, () => {})
}
VueRouter.prototype.replace = function(location, onComplete, onAbort) {
    //若要使用第三个参数时候的判断
    if (onComplete && onAbort) {
        return replace.call(this, location, onComplete, onAbort)
    }

    // 改写push时候this会出现问题 修正this指向
    return replace.call(this, location, onComplete, () => {})
}

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
