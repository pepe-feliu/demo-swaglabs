const { setDefaultTimeout } = require("@cucumber/cucumber");
const { pageFixture } = require("../../hooks/pageFixture");
const { expect } = require("@playwright/test");

setDefaultTimeout(1 * 60 * 1000);

exports.HomePage = class HomePage {
    async checkHomePageDisplay() {
        await expect(pageFixture.page.getByText('Products')).toBeVisible();
        await expect(pageFixture.page.locator('//div[@id="shopping_cart_container"]')).toBeVisible();
        await expect(pageFixture.page.locator('//div[@class="app_logo"]')).toBeVisible();
    }

    async elementsInProductTile() {
        const countProducts = await pageFixture.page.locator('//div[@class="inventory_item"]').count();
        for (let i = 0; i < countProducts; i++) {
            // await expect(pageFixture.page.locator('//a').nth(i)).toBeVisible();
            await expect(pageFixture.page.locator('//div[@class="inventory_item_name"]').nth(i)).toBeVisible();
            await expect(pageFixture.page.locator('//div[@class="inventory_item_desc"]').nth(i)).toBeVisible();
            await expect(pageFixture.page.locator('//div[@class="inventory_item_price"]').nth(i)).toBeVisible();
            await expect(pageFixture.page.getByText('ADD TO CART').nth(i)).toBeVisible();
        }
    }

    async selectOneProduct() {
        const countAddToCartButton = await pageFixture.page.getByText('ADD TO CART').count();
        const randomProduct = Math.floor(Math.random() * countAddToCartButton);
        await pageFixture.page.getByText('ADD TO CART').nth(randomProduct).click({ force: true });
    }

    async productIsAdded() {
        await expect(pageFixture.page.locator('//span[@class="fa-layers-counter shopping_cart_badge"]')).toHaveText('1')
    }

    async clickOnCart() {
        await pageFixture.page.locator('//div[@id="shopping_cart_container"]').click({ force: true });
    }

    async logOutFromTheApplication() {
        // TODO
    }
}