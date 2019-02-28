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

const packageJson = require('../package.json');
const spawn = require('child_process').spawn;
const log = console.log;

const _download = (path, name, callback) => {
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
}

program
    .version(packageJson.version)
    .command('init <type> <name>')
    .description('init a new <type> project')
    .action((type, name) => {
      const root =  path.resolve(name);
      if(!fs.existsSync(name)) {
        log(`Creating a new ${type} App in ${chalk.green(root)}`)
        const spinner = ora('Downloading template...').start();
        if(type === 'react') {
          // download react template
          _download(
            'https://github.com:ZnFrontEnd/zn-cli#reactTemplate',
            name,
            () => {
              spinner.succeed();
              // 删除脚手架中的build.js文件
              spawn('rm', ['-rf', `${name}/build.js`]);
              log(symbols.success, chalk.green('Download successful!'));
              log(chalk.yellow(
                `
                ===========tips==========\n
                cd ${name} && npm install\n
                npm run dev
                `
              ))
            }
          )
        } else {
          // 暂时不支持
          // download vue template
          // _download(
          //   'https://github.com:ZnFrontEnd/zn-cli#vueTemplate',
          //   name,
          //   () => {
          //     spinner.succeed();
          //     console.log(symbols.success, chalk.green('Download successful!'));
          //
          //   }
          // )
        }
      } else {
        log(symbols.error, chalk.red(`The ${name} folder already exists!`));
      }
    })

program.parse(process.argv);
