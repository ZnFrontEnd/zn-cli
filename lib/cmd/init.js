'use strict';

const inquirer = require('inquirer');
const co = require('co');
const templateJson = require('../../template.json')
const tip = require('../tip');

const fetchResult = result => {

}



module.exports = () => {
  co(function *() {
    const keys = Object.keys(templateJson)
    if(keys.length) {
      // 选择模板
      const { tplName } = yield inquirer.prompt([{
        type: 'list',
        message: '请选择一种模板:',
        name: 'tplName',
        choices: keys
      }]);
      const { projectName } = yield inquirer.prompt([{
        type: 'input',
        message: '请输入项目名称:',
        name: 'projectName',
        default: "myProject", // 默认值
        validate: function(val) {
          return val.replace(/\s/g, '');
        }
      }]);
      return Promise.resolve({
        tplName,
        projectName,
        ...templateJson[tplName]
      })
    } else {
      tip.info(
        '当前没有可用模板，请先添加!' +
        '===================================' +
        '可执行zn-cli add进行添加'
      );
      process.exit();
    }
  }).then(fetchResult);
}