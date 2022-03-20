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
    await browser.pause(500);
    const elem = await $("//*[@id='name']");
    await elem.waitForEnabled()
    await elem.click();
    await elem.setValue(name)
})

When('Customer fills in field Country as {string}',  async(country) => {
    await browser.pause(500);
    const elem =  await $("//*[@id='country']");
    await elem.waitForEnabled()
    await elem.click();
    await elem.setValue(country)
})

When('Customer fills in field City as {string}',  async(city) => {
    const elem = await $("//*[@id='city']");
    await elem.waitForEnabled()
    await elem.click();
    await elem.setValue(city)
})

When('Customer fills in field Card as {string}',  async(card) => {
    const elem = await $("//*[@id='card']");
    await elem.waitForEnabled()
    await elem.click();
    await elem.setValue(card)
})

When('Customer fills in field Month as {string}',  async(month) => {
    const elem = await $("//*[@id='month']");
    await elem.waitForEnabled()
    await elem.click();
    await elem.setValue(month)

})

When('Customer fills in field Year as {string}',  async(year) => {
    const elem = await $("//*[@id='year']");
    await elem.waitForEnabled()
    await elem.click();
    await  elem.setValue(year)

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
