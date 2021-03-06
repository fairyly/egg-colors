# egg-colors

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-colors.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-colors
[travis-image]: https://img.shields.io/travis/eggjs/egg-colors.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-colors
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-colors.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-colors?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-colors.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-colors
[snyk-image]: https://snyk.io/test/npm/egg-colors/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-colors
[download-image]: https://img.shields.io/npm/dm/egg-colors.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-colors

<!--
Description here.
-->

## Install

```bash
$ npm i egg-colors --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.colors = {
  enable: true,
  package: 'egg-colors',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.colors = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

```
# controller/home.js

'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.red('1111111111');
    // await ctx.balck('123456');
		// await ctx.red('123456');
		// await ctx.green('123456');
		// await ctx.yellow('123456');
		// await ctx.blue('123456');
		// await ctx.magenta('123456');
		// await ctx.cyan('123456');
		// await ctx.white('123456');
		// await ctx.gray('123456');
		// await ctx.grey('123456');
    ctx.body = 'text';
  }
}

module.exports = HomeController;

```

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
