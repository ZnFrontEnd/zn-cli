'use strict';
const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolvePath = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
    DIST_PATH: resolvePath('dist'),
    PUBLIC_PATH: resolvePath('public'),
    HTML_PATH: resolvePath('public/index.html'),
    INDEX_PATH: resolvePath('src/index.js'),
    APP_PATH: resolvePath('src')
}