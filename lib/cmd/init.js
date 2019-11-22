'use strict'

const fs = require('fs');
const co = require('co');
const ora = require('ora');
const path = require('path');
const inquirer = require('inquirer');
const { spawn } = require('child_process');
const download = require('download-git-repo');

const tip = require('../tip');
const templateJson = require('../../template.json');

/**
 * 拉取模板
 * @param {Object} info 
 * @param {Function} callBack 
 */
const _downLoad = (info, callBack ) => {
  const { projectName, url, branch } = info;
  const path = `direct:${url}#${branch}`; 
  download(
    path,
    projectName,
    {clone: true},
    err => {
      callBack && callBack(err);
    }
  )
}

/**
 * 判断当前根目录下是否有相同命名的文件夹
 * @param {String} folderName 
 */
const _hasFolder = folderName => {
  return new Promise((resolve) => {
    fs.exists(folderName, exists => {
      if (exists) {
        tip.fail(`已存在相同目录: ${folderName}!`);
        process.exit();
      } else {
        resolve();
      }
    })
  })
}

const installPackage = projectName => {
  const spinner = ora('install package...').start();
  return new Promise(resolve => {
    const ls = spawn('cd', [projectName, '&&', 'npm', 'install'], {shell: true, stdio: 'ignore'});
    ls.on('close', () => {
      spinner.succeed('install success!');
      resolve();
    });
  })
}

/**
 * 处理用户输入的信息
 * @param {Object} projectInfo 
 */
const _fetchResult = projectInfo => {
  const { projectName } = projectInfo;
  const spinner = ora('Downloading template...').start();
  _downLoad(projectInfo, err => {
    if (err) {
      spinner.fail('Download fail!');
    } else {
      spinner.succeed('Download success!');
      installPackage(projectName).then(res => {
        tip.suc(
          `Success! Created reacttest at ${path.resolve(process.cwd(), projectName)}
  Inside that directory, you can run several commands:`
        );
        tip.suc(`cd ${projectName}`);
        tip.suc('npm run start');
        tip.log('Starts the development server.');
        tip.suc('npm run build'); 
        tip.log('Bundles the app into static files for production.\n');
      })
    }
  });
}



module.exports = () => {
  // 异步co中只用来收集用户输入的信息
  co(function *() {
    // 处理用户输入
    const keys = Object.keys(templateJson)
    if(keys.length) {
      // 选择模板
      const { tplName } = yield inquirer.prompt([{
        type: 'list',
        message: '项目de模板:',
        name: 'tplName',
        choices: keys
      }]);
      const { projectName } = yield inquirer.prompt([{
        type: 'input',
        message: '项目名称:',
        name: 'projectName',
        default: "myProject", // 默认值
        filter: val => {
          return val.replace(/\s/g, '');
        }
      }]);
      yield _hasFolder(projectName);
      // 返回用户的输入和模板信息
      return Promise.resolve({
        tplName,
        projectName,
        ...templateJson[tplName]
      })
    } else {
      tip.info(
        '当前没有可用模板，请先添加!\n' +
        '===================================\n' +
        '可执行zn-cli add进行添加'
      );
      process.exit();
    }
  }).then(_fetchResult);
}