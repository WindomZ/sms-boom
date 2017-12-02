'use strict';

const Provider = require('../provider');
const utils = require('../utils');

module.exports = class extends Provider {
  constructor() {
    super();
    this.url = `http://user.ihuyi.com/register.html`;
    this.active = false;
  }

  async resolve(ctx) {
    const options = ctx.options;
    const page = ctx.page;

    await page.type('input#tel', options.phone, { delay: 100 });

    await page.mouse.move(604, 329);
    await page.mouse.down();
    await page.mouse.move(857, 335, { steps: 20 });
    await page.mouse.up();

    // TODO: 有验证码

    await page.click('a.telcode');

    // 检验是否发送成功
    //    await page.waitForSelector('a.telcode', {
    //      timeout: 1000 * 3,
    //    });
  }
};
