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

program.parse(process.argv);

if(!program.args.length){
  program.help()
}