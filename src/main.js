import Vue from "vue"

import App from "./App.vue"
import router from "./router"
//引入mockjs服务

import "./mock/mockServer"

import "./styles/reset.css"
import store from "./store"

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    store,
    router,
}).$mount("#app")
