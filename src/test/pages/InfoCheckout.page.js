const { setDefaultTimeout } = require("@cucumber/cucumber");
const { pageFixture } = require("../../hooks/pageFixture");
const { fakerES } = require("@faker-js/faker")

setDefaultTimeout(1 * 60 * 1000);

exports.InfoCheckout = class InfoCheckout {

    async completeShippingData() {
        await pageFixture.page.locator('//input[@placeholder="First Name"]').fill(fakerES.person.firstName());
        await pageFixture.page.locator('//input[@placeholder="Last Name"]').fill(fakerES.person.lastName());
        await pageFixture.page.locator('//input[@placeholder="Zip/Postal Code"]').fill(
            fakerES.location.streetAddress() + ' ' 
            + fakerES.location.city() + ' ' 
            + fakerES.location.zipCode());
        await pageFixture.page.waitForTimeout(2000)
        await pageFixture.page.locator('//input[@value="CONTINUE"]').click();
    }
}