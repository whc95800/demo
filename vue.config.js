module.exports = {
    css: {
        loaderOptions: {
            less: {
                lessOptions: {
                    modifyVars: {
                        'primary-color': 'rgba(25,36,57,0.87)',// 全局主色
                        'link-color': 'rgba(214,214,215,0.85)',//链接色
                        'link-hover-color': '#ffffff',//链接hover色
                        'border-radius-base': '2px',// 组件/浮层圆角
                        'success-color': '#52c41a', // 成功色
                        'warning-color': '#faad14', // 警告色
                        'error-color': '#f5222d', // 错误色
                        'font-size-base': '14px', // 主字号
                        'heading-color': 'rgba(238,193,12,0.85)', // 标题色
                        'text-color': 'rgb(222,12,12)', // 主文本色
                        'text-color-secondary': 'rgba(168,14,210,0.45)', // 次文本色
                        'disabled-color': 'rgb(46,187,173)', // 失效色
                        'border-color-base': '#d9d9d9', // 边框色
                        'box-shadow-base': '0 2px 8px rgba(0, 0, 0, 0.15)', // 浮层阴影
                    },
                    javascriptEnabled: true,
                },
            },
        },
    },
};
