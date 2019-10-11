const chalk = require('chalk');

const success = chalk.green.bold;
const error = chalk.bold.red;
const warning = chalk.keyword('orange');

module.exports = {
  suc: msg => console.log(success(`\n ✅${msg}\n`)),
  fail: (msg) => console.log(error(`\n ❌ ${msg}\n`)),
  info: (msg) => console.log(warning(`\n ❗${msg}\n`)),
}