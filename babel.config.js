// 项目发布时需要用到的babel插件
const prodPlugins = []
// 判断是否为发布阶段
if (process.env.NODE_ENV === 'production') {
  prodPlugins.push('transform-remove-console')
}
module.exports = {
  // presets: [
  //   '@vue/cli-plugin-babel/preset'
  // ],
  presets: ['@vue/app'],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ],
    // 发布产品时需要的插件
    ...prodPlugins,
    '@babel/plugin-syntax-dynamic-import'
  ]
}
