#### webpack.config.dev.js
**autoprefixer**
给css文件自动添加前缀，兼容性问题

**case-sensitive-paths-webpack-plugin**
这个插件就是防止不同的系统下对于大小写的问题导致路径出错

**InterpolateHtmlPlugin**
这个插件是配合html-webpack-plugin一起使用的,允许你在index.html中使用变量

**react-error-overlay**
强制显示错误页面

**WatchMissingNodeModulesPlugin**
此插件允许你安装库后自动重新构建打包文件

**ModuleScopePlugin**
用以限制自己编写的模块只能从src目录中引入

**single-line-log**
Node.js模块，它一直写入控制台（或流）中的同一行。在较长操作期间编写进度条或状态消息时非常有用。支持多行。可以用来自己实现一个下载进度条

###说明
```js
VM11304 index.js:1384 Warning: Failed prop type: Invalid prop `component` of type `object` supplied to `Route`, expected `function`.
    in Route
```
关于这个警告，我查找了一下答案，主要是react的一个类型检查的包报出的，至于为什么会报这个错，是因为我用了路由的按需加载，导致返回的类型变成了一个function而不是一个object，当然你也可以去GitHub上看一下[相应的issues](https://github.com/ReactTraining/react-router/issues/6471)

#### 附
**[polyfill为何物](https://juejin.im/post/5a579bc7f265da3e38496ba1)**
**[webpack常用插件](https://juejin.im/entry/5b0d5fa5518825153d28aec4)**
**[路由按需加载](https://reacttraining.com/react-router/web/guides/code-splitting)**


