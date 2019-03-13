#### webpack.config.dev.js
* 1. **autoprefixer**
给css文件自动添加前缀，兼容性问题
* 2. **case-sensitive-paths-webpack-plugin**
这个插件就是防止不同的系统下对于大小写的问题导致路径出错
* 3. **InterpolateHtmlPlugin**
这个插件是配合html-webpack-plugin一起使用的,允许你在index.html中使用变量
* 4. **react-error-overlay**
强制显示错误页面
* 5. **WatchMissingNodeModulesPlugin**
此插件允许你安装库后自动重新构建打包文件
* 6. **ModuleScopePlugin**
用以限制自己编写的模块只能从src目录中引入

#### 附
**[polyfill为何物](https://juejin.im/post/5a579bc7f265da3e38496ba1)**
**[webpack常用插件](https://juejin.im/entry/5b0d5fa5518825153d28aec4)**

