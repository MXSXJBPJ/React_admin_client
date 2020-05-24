const {override, fixBabelImports, addLessLoader} = require('customize-cra');

module.exports = override(
    //针对antd实现
    fixBabelImports('import', {
        //针对antd实现安需打包,根据import来打包(使用babel-plugin-import)
        libraryName: 'antd',
        libraryDirectory: 'es',
        /*果是自己配置的reac项目，而非官方推荐的creat-react-app或者dva-cli等阿里自己开发的脚手架去引入antd，会有两个问题

第一，用babel-plugin-import设置style true 并不能通过less的方法引入antd 的样式。只能自动引入css。需要手动去引入less文件导入样式。

第二，既然无法自动按需引入less文件也就无法去改主题色，即使手动引入全局的antd，去改 primary-color 也不能生效。

　　　即使在loader 添加options{"modifyVars":{ "@primary-color": "#1DA57A"}}，用less 的modifyVars 去修改，依然无法对antd生效。

解决方案：1.使用 react-app-rewired （一个对 create-react-app 进行自定义配置的社区解决方案）并修改 启动配置。

　　　　　2.引入 react-app-rewire 的 less 插件 react-app-rewire-less 来帮助加载 less 样式 */
        style: 'css',//自动打包相关的样式
    }),
//使用less-loader 对源码的less的变量进行重新指定
addLessLoader({
    javascriptEnabled: true,
    modifyVars: {'@primary-color': '#1DA57A'},
    }),
);