'use strict'
const co = require('co');
const inquirer = require('inquirer');
const fse = require('fs-extra');

const table = require('../table');
const tip = require('../tip');
const tpl = require('../../template');

const templatePath = `${process.cwd()}/template.json`;

const _writeFile = (err) => {
  if (err) {
    console.log(err);
    tip.fail('请重新运行!');
    process.exit();
  }
  tip.suc('模板删除成功!');

  if (JSON.stringify(tpl) !== '{}') {
    table(tpl);
  } else {
    tip.info('还未添加模板!');
  }

  process.exit();
};

const _resolve = (tplName) => {
  // 删除对应的模板
  if (tpl[tplName]) {
    delete tpl[tplName];
  } else {
    tip.fail('模板不经存在!');
    process.exit();
  }

  // 写入template.json
  fse.outputJson(templatePath, tpl, {encoding: 'utf8', spaces: 4}, _writeFile);
};

module.exports = () => {
  co(function *() {
    // 分步接收用户输入的参数
    const { tplName } = yield inquirer.prompt([{
      type: 'list',
      message: '请选择需要删除的模板:',
      name: 'tplName',
      choices: Object.keys(tpl)
    }]);
    return new Promise((resolve, reject) => {
      resolve(tplName);
    });
  }).then(_resolve);
};
