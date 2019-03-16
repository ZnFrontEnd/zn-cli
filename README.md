# zn-cli

A light tool to generate projects in an easy way.

总下载量：https://img.shields.io/cocoapods/dt/AFNetworking.svg

![](https:*//img.shields.io/badge/license-MIT-000000.svg)

![](https://img.shields.io/cocoapods/v/Alamofire.svg?style=plastic)

<p align="center">
<a href="https://travis-ci.org/onevcat/Kingfisher"><img src="https://img.shields.io/travis/onevcat/Kingfisher/master.svg"></a>
<a href="https://github.com/Carthage/Carthage/"><img src="https://img.shields.io/badge/Carthage-compatible-4BC51D.svg?style=flat"></a>
<a href="https://swift.org/package-manager/"><img src="https://img.shields.io/badge/SPM-ready-orange.svg"></a>
<a href="http://onevcat.github.io/Kingfisher/"><img src="https://img.shields.io/cocoapods/v/Kingfisher.svg?style=flat"></a>
<a href="https://raw.githubusercontent.com/onevcat/Kingfisher/master/LICENSE"><img src="https://img.shields.io/cocoapods/l/Kingfisher.svg?style=flat"></a>
<a href="http://onevcat.github.io/Kingfisher/"><img src="https://img.shields.io/cocoapods/p/Kingfisher.svg?style=flat"></a>
<a href="https://codebeat.co/projects/github-com-onevcat-kingfisher"><img alt="codebeat badge" src="https://codebeat.co/assets/svg/badges/A-398b39-669406e9e1b136187b91af587d4092b0160370f271f66a651f444b990c2730e9.svg" /></a>
</p>



## 安装项目

```nginx
npm install zn-cli -g
```

## 初始化项目

```nginx
zn-cli init <template> <projectName>
```

tips：

* `<template>` : react/vue

* `<projectName>`: 项目的名称

## 启动项目

```
cd [projectName]
npm install
npm run dev
```

启动成功后，在浏览器中输入： `localhost:8080`即可访问

## 持续集成

我们会持续更新react/vue的模板，包括公共组件、样式、第三方库等，如果你不需要可以放弃更新。

更新方式：

在生成的项目实例中执行下面命令就可以拉去最新相应代码（后期会支持选择版本的方式去更新某个版本的功能）**该操作不会覆盖你项目中业务代码，只会在指定的公共文件夹中做一些文件的操作**

```
npm run update
```

## License

MIT.

