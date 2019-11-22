#!/usr/bin/env node

const tip = require('../lib/tip');

const currentNodeVersion = process.versions.node;
const semver = currentNodeVersion.split('.');
const major = semver[0];
const BASE_VERSION = 10;

if(major < BASE_VERSION) {
  tip.fail(
    'You are running Node ' +
      currentNodeVersion +
      '.\n' +
      'Create React/Vue App requires Node '+ BASE_VERSION +' or higher. \n' +
      'Please update your version of Node.'
  )
  process.exit(1);
}

require('../lib/cli/');