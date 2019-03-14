#!/usr/bin/env node

'use strict';

const chalk = require('chalk');
const ora = require('ora');
const fse = require('fs-extra');
const fs = require('fs');
const path = require('path');
const symbols = require('log-symbols');
const program = require('commander');
const download = require('download-git-repo');
var readlineSync = require('readline-sync');

const packageJson = require('../package.json');
const spawn = require('child_process').spawn;
const log = console.log;

const _cli = {
  author: '',
  version: '0.0.1',
  _download: (path, name, callback) => {
    download(
      path,
      name,
      {clone: true},
      err => {
        if(err) {
          log(symbols.error, chalk.red(err));
          if(spinner) {
            spinner.fail();
          }
        } else {
          callback && callback();
        }
      }
    )
  },
  _reWritePackageJson: async (name) => {
    const stPackagePath = path.resolve(process.cwd(), `${name}/package.json`);
    const data = await fse.readFile(stPackagePath, 'utf8');
    const packageJson = JSON.parse(data);
    packageJson.name = name;
    if(this.author) packageJson.author = this.author;
    packageJson.version = this.version;
    await fse.outputJson(stPackagePath, packageJson, {encoding: 'utf8', spaces: 4})
  },
  _gatherUserInfo: () => {
    // Wait for user's response.
    const userName = readlineSync.question('author: ');
    if(userName) this.author = userName;
    const version = readlineSync.question('version: ');
    if(version) this.version = version;
  }
}

_cli._gatherUserInfo()

program
    .version(packageJson.version)
    .command('init <type> <name>')
    .description('init a new react/vue project')
    .action((type, name) => {
      const root =  path.resolve(name);
      if(!fs.existsSync(name)) {
        log(`Creating a new ${type} App in ${chalk.green(root)}`)
        const spinner = ora('Downloading template...').start();
        if(type === 'react') {
          // download react template
          _cli._download(
            'https://github.com:ZnFrontEnd/zn-cli#react-template',
            name,
            () => {
              spinner.succeed();
              // 删除脚手架中的build.js文件
              spawn('rm', ['-rf', `${name}/build.js`]);
              // 重写实例中package.json中name属性
              _cli._reWritePackageJson(name);
              log(symbols.success, `Success! Created reacttest at ${path.resolve(process.cwd(), name)}
Inside that directory, you can run several commands:`);
              log(chalk.green(` cd ${name}`));
              log(chalk.green(' npm install'));
              log(chalk.green(' npm run start'));
              log('Starts the development server.');
              log(chalk.green(' npm run build'));
              log('Bundles the app into static files for production.');
            }
          )
        } else {
          // 暂时不支持
          // download vue template
        }
      } else {
        log(symbols.error, chalk.red(`The ${name} folder already exists!`));
      }
    })

program.parse(process.argv);
