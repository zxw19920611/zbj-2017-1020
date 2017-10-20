
'use strict'
// Template version: 1.1.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: process.env.PORT || 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    proxyTable: {
      '/task': {//需要匹配的路径
        target: 'http://m.zbj.com', //需要代理的目标服务器
        changeOrigin: true, //开启代理
        pathRewrite: {'^/task': '/task'} 
      },//这里重写路径/run就代理到对应地址
      '/shunt/favorite': {//需要匹配的路径
        target: 'http://m.zbj.com', //需要代理的目标服务器
        changeOrigin: true, //开启代理
        pathRewrite: {'^/shunt': '/shunt'} 
      },//这里重写路径/run就代理到对应地址
     '/api': {  
       target: 'http://localhost:8088/api',  
       changeOrigin: true,  
       pathRewrite: {'^/api': ''}  
     },
     '/v8': {//需要匹配的路径
            target: 'https://c.y.qq.com', //需要代理的目标服务器
            changeOrigin: true, //开启代理
            pathRewrite: {'^/v8': '/v8'}
          },//这里重写路径/run就代理到对应地址
      '/getHotWord': {//需要匹配的路径
            target: 'http://m.zbj.com/getHotWord', //需要代理的目标服务器
            changeOrigin: true, //开启代理
            pathRewrite: {'^/getHotWord': ''}
          },

      },
    cssSourceMap: false
  }
}
