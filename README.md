# zn-cli

A light tool to generate projects in an easy way.

<p align="left">
  <a href="https://www.npmjs.com/package/zn-cli">
  	<img alt="npm" src="https://img.shields.io/npm/v/zn-cli.svg">
  </a>
<a href="https://github.com/ZnFrontEnd/zn-cli/blob/master/LICENSE.txt">
  <img src="https://img.shields.io/cocoapods/l/Kingfisher.svg?style=flat"></a>
</p>



```
.
├── LICENSE.txt
├── README.md
├── bin
│   └── fe.js
├── lib
│   ├── cli
│   │   └── index.js
│   ├── cmd
│   │   ├── add.js
│   │   ├── delete.js
│   │   ├── init.js
│   │   └── list.js
│   ├── table.js
│   └── tip.js
├── package-lock.json
├── package.json
└── template.json
```

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


## License

MIT.

