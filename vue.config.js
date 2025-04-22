module.exports = {
    publicPath: './', // 署应用包时的基本 URL。 vue-router hash 模式使用
    //  publicPath: '/app/', //署应用包时的基本 URL。  vue-router history模式使用
    outputDir: 'dist', //  生产环境构建文件的目录
    assetsDir: 'static', //  outputDir的静态资源(js、css、img、fonts)目录
    lintOnSave: false,//eslint 关闭
    productionSourceMap: false,
    devServer: {
      port: 8080, // 端口
      open: true, // 启动后打开浏览器
      overlay: {
        //  当出现编译器错误或警告时，在浏览器中显示全屏覆盖层
        warnings: false,
        errors: true
      }
    }
}