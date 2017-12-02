'use strict';

const Provider = require('../provider');
const utils = require('../utils');

module.exports = class extends Provider {
  constructor() {
    super();
    this.url = `https://www.qiandw.com/Account/RegisterNew`;
    this.active = false;
  }

  async resolve(ctx) {
    const options = ctx.options;
    const page = ctx.page;

    await page.type('input#mobile', options.phone, { delay: 100 });

    await page.mouse.move(507, 349);
    await page.mouse.down();
    await page.mouse.move(837, 352, { steps: 20 });
    await page.mouse.up();

    //TODO: 验证码
  }
};
