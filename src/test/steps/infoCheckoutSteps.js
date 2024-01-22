const { Given, When, Then } = require("@cucumber/cucumber");
const { InfoCheckout } = require("../pages/InfoCheckout.page");
const { pageFixture } = require("../../hooks/pageFixture");

const infoCheckout = new InfoCheckout();

When('I fill the form of the shipping information', async function() {
    await infoCheckout.completeShippingData()
});