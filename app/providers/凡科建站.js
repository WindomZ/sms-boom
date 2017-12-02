'use strict';

const Provider = require('../provider');
const utils = require('../utils');

module.exports = class extends Provider {
  constructor() {
    super();
    this.url = `http://jz.faisco.com/reg.html`;
    this.active = false;
  }

  async resolve(ctx) {
    const options = ctx.options;
    const page = ctx.page;

    await page.type('div#regAcctLine input#regAcct', options.phone, { delay: 50 });

    await page.click('div#validateCodeBox2 button.item_code');

    // 检验是否发送成功
    await page.waitForSelector('div#validateCodeBox2 button.item_code', {
      hidden: true,
      timeout: 1000 * 3,
    });
  }
};
