const { BeforeAll, AfterAll, Before, After, Status } = require('@cucumber/cucumber');
const { Browser, BrowserContext, chromium } = require('@playwright/test');
const { pageFixture } = require('./pageFixture');

let browser;
let context;

BeforeAll(async () => {
    // console.log(
    //     'Launch Browser using Playwright and Chromium browser, performed once, before the start of all test scenarios.'
    // );
    browser = await chromium.launch({ headless: false });
});

AfterAll(async () => {
    // console.log('Closes Browser before the start of each scenario');
    await browser.close();
});

Before(async () => {
    // console.log('Launch Browser, performed before each individual test scenario');
    context = await browser.newContext();
    const page = await context.newPage();
    pageFixture.page = page;
});

After(async ({ pickle, result }) => {
    // console.log('Browser closed after each scenario, and result?.status');
    // screenshot
    if (result?.status == Status.FAILED) {
        await pageFixture.page.screenshot({
        path: `./test-result/screenshots/${pickle.name}.png`,
        type: 'png',
    });
}

await pageFixture.page.close();
await context.close();
});
