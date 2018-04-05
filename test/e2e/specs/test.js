module.exports = {
  'default e2e tests': function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementCount('img', 2)
      .waitForElementVisible('#home-btn', 5000)
      .click('#home-btn')
      .waitForElementVisible('.starwars__card', 3000)
      .click('.starwars__footer a')
      .waitForElementVisible('.about-me', 3000)
      .end();
  },
};
