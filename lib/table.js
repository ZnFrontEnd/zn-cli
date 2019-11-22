const Table = require('cli-table');

const tip = require('./tip');

const table = new Table({
  head: ['name', 'description', 'url'],
  style: {
    head: ['cyan']
  }
});

module.exports = (config) => {
  const keys = Object.keys(config);

  if(keys.length) {
    keys.forEach((key) => {
      table.push(
        [`${key}`, config[key].description, config[key].url]
      );
    });
    const list = table.toString();
    if (list) {
      tip.info('模板列表:')
      tip.suc(`${list}\n`);
    } else {
      tip.fail('还没有模板，请先添加!');
    }
  } else {
    tip.fail('还没有模板，请先添加!');
  }
};
