const { Given, When, Then } = require('@cucumber/cucumber')
const MainPage = require('../pages/main.page');
const ProductPage = require('../pages/product.page');
const CartPage = require('../pages/cart.page');

const assert = require("assert");

When('Customer deletes last element',  async() => {
    await browser.pause(2000);
    const elem = await $("//*[@id='tbodyid']/tr[2]/td[4]/a");
    await elem.waitForEnabled();
    await elem.click();
    await browser.pause(2000);
})

When('Customer fills in field Name as {string}',  async(name) => {
    await CartPage.fillInEditBox("//*[@id='name']",name)
})

When('Customer fills in field Country as {string}',  async(country) => {
    await CartPage.fillInEditBox("//*[@id='country']",country)
})

When('Customer fills in field City as {string}',  async(city) => {
    await CartPage.fillInEditBox("//*[@id='city']",city)
})

When('Customer fills in field Card as {string}',  async(card) => {
    await CartPage.fillInEditBox("//*[@id='card']",card)
})

When('Customer fills in field Month as {string}',  async(month) => {
    await CartPage.fillInEditBox("//*[@id='month']",month)
})

When('Customer fills in field Year as {string}',  async(year) => {
    await CartPage.fillInEditBox("//*[@id='year']",year)
})

When('Customer clicks Purchase Button',  async() => {
    const elem = await $("//*[@id='orderModal']/div/div/div[3]/button[2]");
    await elem.waitForEnabled()
    await elem.click();
})

When('Customer clicks Close button',  async() => {
    const elem = await $("//*[@id=\"orderModal\"]/div/div/div[3]/button[1]");
    await elem.waitForEnabled()
    await elem.click();
})

Then('Match price as {string} with purchased amount', async(price) => {
    const elem = await $("/html/body/div[9]/p");
    await elem.waitForDisplayed();
    str = await elem.getText();
    str = await str.substring(str.indexOf('Amount'),str.indexOf('Card Number'));
    await console.log(str);
    await console.log(price);
    assert(str.includes(price))
})
