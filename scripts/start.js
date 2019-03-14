/* eslint-disable import/no-extraneous-dependencies */
const chalk = require("chalk");
const ora = require("ora");
const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
// 清空控制台
const clearConsole = require("react-dev-utils/clearConsole");
// 校验需要引入的文件是否存在
const checkRequiredFiles = require("react-dev-utils/checkRequiredFiles");
const openBrowser = require("react-dev-utils/openBrowser");

const paths = require("../config/paths");
const webpackDevConfig = require("../build/webpack.config.dev");
const config = require("../config/config");

// 校验请求的资源是否存在
if (!checkRequiredFiles([paths.HTML_PATH, paths.INDEX_PATH])) {
  process.exit(1);
}

const cmoplier = webpack(webpackDevConfig);
// 如果该文件是运行在终端，则清空终端打印的信息
if (process.stdout.isTTY) clearConsole();
const spinner = ora("服务启动中...\n").start();
const server = new WebpackDevServer(cmoplier, {
  port: config.dev.PORT,
  contentBase: paths.PUBLIC_PATH,
  compress: true,
  historyApiFallback: true,
  hot: true,
  https: false,
  noInfo: true,
  open: true,
  proxy: {}
});

server.listen(config.dev.PORT, "localhost", err => {
  if (err) {
    spinner.fail("启动失败！\n");
    console.log(err);
    return;
  }
  spinner.succeed("启动成功！\n");
  console.log(chalk.yellow(`通过${config.dev.LOCAL_URL}访问！\n`));
  openBrowser(config.dev.LOCAL_URL);
});
