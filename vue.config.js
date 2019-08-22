const path = require('path');
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    lintOnSave: false,
    devServer: {
        proxy: 'http://120.26.50.233:8186/xftob-server'
        // proxy:'http://10.128.12.72:8087/xftob-server'
    },
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('$img', resolve('src/assets/img'))
    },
    publicPath: process.env.NODE_ENV === 'production' ? '/crm' : '/',
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    autoprefixer(),
                    pxtorem({
                        rootValue: 37.5,
                        propList: ['*']
                    })
                ]
            },
            less: {
                modifyVars: {

                }
            }
        }
    }
}
