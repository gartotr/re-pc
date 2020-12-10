import request from "@utils/request"
import mockRequest from "@utils/mockRequest"
//三级分类
export const reqGetBaseCategoryList = () => {
    return request({
        method: "GET",
        url: "/product/getBaseCategoryList",
    })
}
//mock请求轮播图
export const reqGetBanners = () => {
    return mockRequest({
        method: "GET",
        url: "/banners",
    })
}
