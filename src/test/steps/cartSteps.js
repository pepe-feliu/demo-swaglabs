const { Given, When, Then } = require("@cucumber/cucumber");
const { CartPage } = require("../pages/Cart.page");
const { pageFixture } = require("../../hooks/pageFixture");

const cartPage = new CartPage()

Then('the "CHECKOUT" button is enabled', async function() {
    await cartPage.checkoutButtonIsEnabled()
})

When('I click on the "CHECKOUT" button', async function() {
    await cartPage.proceedToCheckout()
});