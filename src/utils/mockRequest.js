//拦截器

import axios from "axios"

const instance = axios.create({
    baseURL: "/mock",
    header: {},
})
//请求拦截器 处理请求之前的操作 往往只传第一个  当请求拦截器有多个的时候 第一个失败才出发第二个回调
instance.interceptors.request.use(
    //接收一个config作为参数 请求的配置对象(请求地址，请求方式，请求参数)
    //修改可以写入公共的请求参数  例如登录要有token 所以不能放在header中 要在这里处理
    config => {
        return config
    },
)
//响应拦截器  响应2xx 出发第一个回调 失败出发第二个回调
instance.interceptors.response.use(
    //响应成功 不代表请求成功 要看响应的状态码(code) 成功200 失败201 202
    //响应成功得到response
    /* 
        {
            header:{},
            state:{},
            data:{  响应过来的数据
                data:{} //这里才是需要的数据
            } 
        }
    
    */
    response => {
        if (response.data.code === 200) {
            return response.data.data
        }
        //response.data.message直接返回时成功状态
        //返回的失败的promise  失败会返回message
        return Promise.reject(response.data.message)
    },
    error => {
        console.log(error)
        return Promise.reject(error)
    },
)

export default instance
