# zn-cli

A light tool to generate projects in an easy way.

<p align="left">
  <a href="https://www.npmjs.com/package/zn-cli">
  	<img alt="npm" src="https://img.shields.io/npm/v/zn-cli.svg">
  </a>
<a href="https://github.com/ZnFrontEnd/zn-cli/blob/master/LICENSE.txt">
  <img src="https://img.shields.io/cocoapods/l/Kingfisher.svg?style=flat"></a>
</p>



## 安装脚手架

```nginx
npm install zn-cli -g
```

## 初始化项目

```nginx
zn-cli init [template] [projectName]
```

tips：

* `[template]` : react/vue

* `[projectName]`: 项目的名称

## 启动项目

```
cd [projectName]
npm install
npm run start
```

启动成功后，会自动在默认浏览器中打开： `localhost:3000`即可访问

## 持续集成

我们会持续更新react/vue的模板，包括公共组件、样式、第三方库等，如果你不需要可以放弃更新。

更新方式：

在生成的项目实例中执行下面命令就可以拉去最新相应代码（后期会支持选择版本的方式去更新某个版本的功能）**该操作不会覆盖你项目中业务代码，只会在指定的公共文件夹中做一些文件的操作**

```
npm run update
```

## License

MIT.

