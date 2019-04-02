var fs = require('fs');
var path = require('path');
var spawn = require('child_process').spawn;
var ora = require("ora");
var chalk = require("chalk");

var spinner = ora("update...\n").start();
var componentStr = process.argv[2];
// 获取需要更新的组件
var updateArr = /^\[.+\]$/.test(componentStr)? componentStr.replace(/^\[(.+)\]$/g, '$1').split(","): [];


var update = {
    _init: function() {
        // 项目实例的根目录
        this.cwd = process.cwd();
        // 当前文件运行的路径下的/src/components/
        this.currentComponentPath = __dirname + '/src/components/';
        // 实例根目录路径下的/src/components/
        this.projectComponentPath = this.cwd + '/src/components/';
        this.updateArr = updateArr;
        this._initFiles();
        this._copy();
        this._warning();
        spinner.succeed("update success！\n");
    },
    _initFiles: function() {
        this.files = [];
        this.notFindFiles = [];
        this.existedFiles = [];
        for(var i= 0; i< updateArr.length; i++) {
            if(fs.existsSync(path.resolve(this.currentComponentPath + updateArr[i]))) {
                // 如果component存在，则添加到files数组中
                if(fs.existsSync(path.resolve(this.projectComponentPath + updateArr[i]))) {
                    this.existedFiles.push(updateArr[i]);
                } else {
                    this.files.push(['-rf', this.currentComponentPath + updateArr[i], this.projectComponentPath]);
                }
            } else {
                // 如果component不存在，则添加到notFindFiles数组中
                this.notFindFiles.push(updateArr[i]);
            }
        }
    },
    _copy: function() {
        var files = this.files;
        files.forEach(function(file) {
            spawn('cp', file);
        });
    },
    _warning: function() {
        var notFindFiles = this.notFindFiles;
        var existedFiles = this.existedFiles;
        console.log(chalk.yellow('以下组件没有查找到：\n'));
        notFindFiles.forEach(function(file) {
            console.log(chalk.yellow(file + '\n'));
        });
        console.log(chalk.yellow('以下组件已存在你当前项目中：\n'));
        existedFiles.forEach(function(file) {
            console.log(chalk.yellow(file + '\n'));
        });
    }
}

update._init();