import Vue from "vue"
import Vuex from "vuex"

import modules from "./modules"

Vue.use(Vuex)

const state = {}
//只读计算属性
const getters = {}
//异步请求等方法
const actions = {}
//更新数据方法
const mutations = {}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    modules,
})
