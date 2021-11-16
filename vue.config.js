module.exports = {
    css: {
        // 启用 CSS modules
        requireModuleExtension: false,
        // 是否使用css分离插件
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-px2rem')({
                        remUnit: 192
                    })
                ]
            }
        },
    },
}
