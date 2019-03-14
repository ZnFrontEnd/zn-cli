/* eslint-disable import/no-extraneous-dependencies */
const webpack = require("webpack");
const chalk = require("chalk");
const ora = require("ora");
const del = require("del");
const clearConsole = require("react-dev-utils/clearConsole");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const webpackProdConfig = require("../build/webpack.config.prod");

const spinner = ora().start();
const { log } = console;

// 删除dist目录
del.sync(webpackProdConfig.output.path);
// 添加打包进度条插件
webpackProdConfig.plugins.push(
  new ProgressBarPlugin({
    format: `build [:bar]${chalk.green.bold(":percent")} (:elapsed seconds)`,
    clear: true
  })
);
if (process.stdout.isTTY) clearConsole();
const compiler = webpack(webpackProdConfig);

compiler.run((err, stats) => {
  if (err) {
    spinner.fail("building fail");
    log(err);
    process.exit(1);
  }
  process.stdout.write(
    `${stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    })}\n\n`
  );
  spinner.succeed("Compiled successfully.\n");
  log(
    chalk.yellow(
      "提示: 编译后的文件可以上传并且部署到服务器\n" +
        "通过file:// 打开index.html不会起作用.\n"
    )
  );
});
