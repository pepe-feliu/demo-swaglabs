const { Given, When, Then } = require("@cucumber/cucumber");
const { HomePage } = require("../pages/Home.page");
const { pageFixture } = require("../../hooks/pageFixture");

const homePage = new HomePage()

Then('the home page display is correct', async function() {
    await homePage.checkHomePageDisplay()
});

Then('the correct elements of all products are shown', async function() {
    await homePage.elementsInProductTile()
})

When('I click on "ADD TO CART" on a random product', async function() {
    await homePage.selectOneProduct();
})

Then('the product is added to the cart', async function() {
    await homePage.productIsAdded();
})

When('I click on the cart', async function() {
    await homePage.clickOnCart();
})