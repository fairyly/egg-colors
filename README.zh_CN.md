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

## 依赖说明

### 依赖的 egg 版本

egg-colors 版本 | egg 1.x
--- | ---
2.x | 😁
1.x | ❌
0.x | ❌

### 依赖的插件
<!--

如果有依赖其它插件，请在这里特别说明。如

- security
- multipart

-->

## 开启插件

```js
// config/plugin.js
exports.colors = {
  enable: true,
  package: 'egg-colors',
};
```

## 使用场景

>打印不同颜色的数据
```
await ctx.balck('123456');
await ctx.red('123456');
await ctx.green('123456');
await ctx.yellow('123456');
await ctx.blue('123456');
await ctx.magenta('123456');
await ctx.cyan('123456');
await ctx.white('123456');
await ctx.gray('123456');
await ctx.grey('123456');
```

## 详细配置

请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。

## 单元测试

<!-- 描述如何在单元测试中使用此插件，例如 schedule 如何触发。无则省略。-->

## 提问交流

请到 [egg issues](https://github.com/eggjs/egg/issues) 异步交流。

## License

[MIT](LICENSE)
