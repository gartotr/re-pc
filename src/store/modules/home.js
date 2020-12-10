import { reqGetBaseCategoryList, reqGetBanners } from "@api/home"

export default {
    state: {
        categoryList: [],
        banners: [],
    },
    getters: {},
    actions: {
        //三级分类
        async getCategoryList({ commit }) {
            const categoryList = await reqGetBaseCategoryList()
            commit("GET_CATEGORY_LIST", categoryList)
        },
        //轮播图
        async getBannersList({ commit }) {
            const banners = await reqGetBanners()
            commit("GET_BANNERS_LIST", banners)
        },
    },
    mutations: {
        GET_CATEGORY_LIST(state, categoryList) {
            state.categoryList = categoryList
        },
        GET_BANNERS_LIST(state, banners) {
            state.banners = banners
        },
    },
}
