'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    let text = await ctx.colors.eggConsole('1111111111');
    ctx.body = text;
  }
}

module.exports = HomeController;
