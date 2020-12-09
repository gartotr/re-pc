const path = require('path')

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                // 配置路径别名(可以简写路径)
                '@views': path.resolve(__dirname, 'src/views'),
                '@assets': path.resolve(__dirname, 'src/assets'),
                '@comps': path.resolve(__dirname, 'src/components'),
                '@store': path.resolve(__dirname, 'src/store'),
                '@utils': path.resolve(__dirname, 'src/utils'),
                '@api': path.resolve(__dirname, 'src/api'),
            },
        },
    },
    //设置开发环境下的代理服务器
    devServer: {
        proxy: {
            '/api': {
                //目标服务器
                target: 'http://182.92.128.115',
                //是否允许跨域
                changeOrigin: true,
            },
        },
    },
}
