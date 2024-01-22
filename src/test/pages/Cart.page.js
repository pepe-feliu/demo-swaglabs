const { setDefaultTimeout } = require("@cucumber/cucumber");
const { pageFixture } = require("../../hooks/pageFixture");
const { expect } = require("@playwright/test");

setDefaultTimeout(1 * 60 * 1000);

exports.CartPage = class CartPage {
    async checkoutButtonIsEnabled() {
        await expect(pageFixture.page.getByText('CHECKOUT')).not.toBeEnabled();
    }
    async proceedToCheckout() {
        await pageFixture.page.getByText('CHECKOUT').click({ force: true });
    }

    async goBackToHomePage() {
        // TODO
    }
}