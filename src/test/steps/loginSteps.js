const { Given, When, Then } = require("@cucumber/cucumber");
const { LoginPage } = require("../pages/Login.page");
const { HomePage } = require("../pages/Home.page");
const { pageFixture } = require("../../hooks/pageFixture");

const loginPage = new LoginPage();
const homePage = new HomePage()

Given('I navigate to SwagLabs site', async function() {
    await loginPage.goto()
});

When('I log in with user {string} and password {string}', async function(username, password) {
    await loginPage.loginWithCredentials(username, password)
})

Then('I see the home page', async function() {
    await homePage.checkHomePageDisplay();
})