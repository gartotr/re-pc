import request from '@utils/request'

export const reqLogin = (user, password) => {
    //return是因为要作为promise对象返回出去  让外面知道是否成功或者失败
    return request({
        method: 'POST',
        url: '/user/passport/login',
        data: {
            user,
            password,
        },
    })
}
