'use strict'

const co = require('co');
const fse = require('fs-extra');
const inquirer = require('inquirer');
const tip = require('../tip');
const table = require('../table');
const tpl = require('../../template');

const templatePath = `${process.cwd()}/template.json`;

const _addPrompt = {
  templateName: [{
    type: 'input',
    message: '模板名称:',
    name: 'templateName',

    filter: val => {
      return val.replace(/\s/g, '');
    }
  }],
  gitBranch: [{
    type: 'input',
    message: 'git分支(默认为master):',
    name: 'gitBranch',
    default: "master", // 默认值
    filter: val => {
      return val.replace(/\s/g, '');
    }
  }],
  gitPath: [{
    type: 'input',
    message: 'git https连接:',
    name: 'gitPath',
    validate: function(val) {
      if(val.match(/https:/g)) { // 校验是否是https的地址
          return true;
      }
      return "请输入git https连接!";
    },
    filter: val => {
      return val.replace(/\s/g, '');
    }
  }],
  description: [{
    type: 'input',
    message: '模板描述:',
    name: 'description',
    filter: val => {
      return val.replace(/\s/g, '');
    }
  }]
}

const _writeFile = err => {
  // 处理错误
  if (err) {
    tip.log(err);
    tip.fail('请重新运行!');
    process.exit();
  }

  table(tpl);
  tip.suc('新模板添加成功!');
  process.exit();
};

const _resolve = templateInfo => {
  const { templateName, gitPath, gitBranch, description } = templateInfo;
  console.log(tpl)
  if (!tpl[templateName]) {
    tpl[templateName] = {};
    tpl[templateName]['url'] = gitPath.replace(/[\u0000-\u0019]/g, ''); // 过滤unicode字符
    tpl[templateName]['branch'] = gitBranch;
    tpl[templateName]['description'] = description;
  } else {
    tip.fail('模板已存在!');
    process.exit();
  }
  // 把模板信息写入template.json
  fse.outputJson(templatePath, tpl, {encoding: 'utf8', spaces: 4}, _writeFile);
}

module.exports = () => {
  co(function *() {
    const { templateName } = yield inquirer.prompt(_addPrompt.templateName);
    const { gitPath } = yield inquirer.prompt(_addPrompt.gitPath);
    const { gitBranch } = yield inquirer.prompt(_addPrompt.gitBranch);
    const { description } = yield inquirer.prompt(_addPrompt.description);
    return Promise.resolve({
      templateName,
      gitPath,
      gitBranch,
      description
    })
  }).then(_resolve);
}