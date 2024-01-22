const { setDefaultTimeout } = require("@cucumber/cucumber");
const { pageFixture } = require("../../hooks/pageFixture");

setDefaultTimeout(1 * 60 * 1000);

exports.LoginPage = class LoginPage {
    async goto() {
        await pageFixture.page.goto('https://www.saucedemo.com/v1')
    }

    async loginWithCredentials(user, password) {
        await pageFixture.page.locator('//input[@id="user-name"]').fill(user);
        await pageFixture.page.locator('//input[@placeholder="Password"]').fill(password);
        await pageFixture.page.locator('//input[@value="LOGIN"]').click({ force: true });
    }
}