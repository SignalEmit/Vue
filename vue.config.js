module.exports = {
  outputDir: './dist',
  devServer: {
    open: true,
    host: '127.0.0.1',
    port: 8888,
    hot: true, // 热更新
    https: false,
    hotOnly: false,
    proxy: null, // 设置代理
    before: app => {}
   }
}