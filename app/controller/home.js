'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    let text = await this.ctx.red('1111111111');
    console.log(text)
    ctx.body = text;
  }
}

module.exports = HomeController;
