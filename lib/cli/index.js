#!/usr/bin/env node

'use strict';

const program = require('commander');
const packageJson = require('../../package.json');

program
  .version(packageJson.version)

program
  .command('init')
  .description('生成一个项目')
  .alias('i')
  .action(() => {
    require('../cmd/init')();
  });

program
  .command('list')
  .description('查看模板列表')
  .alias('l')
  .action(() => {
    require('../cmd/list')();
  });

program
  .command('add')
  .description('添加模板')
  .alias('a')
  .action(() => {
    require('../cmd/add')();
  });

program
  .command('delete')
  .description('删除模板')
  .alias('d')
  .action(() => {
    require('../cmd/delete')();
  });

program.parse(process.argv);

if(!program.args.length){
  program.help();
}