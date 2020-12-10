import Mock from "mockjs"
import banners from "./banners.json"

Mock.mock("/mock/banners", "get", {
    //响应状态码为200
    code: 200,
    //随机4次
    "data|4": banners,
})
