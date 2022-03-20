const { Given, When, Then } = require('@cucumber/cucumber')
//const MainPage = require('../pages/main.page');
//const ProductPage = require('../pages/product.page');
//const CartPage = require('../pages/cart.page');
const BasePage = require('../pages/base.page');


When('Customer clicks button as {string}',  async(button) =>  {
    const elem = await $("//*[contains(text(),'"+button+"')]")
    await elem.waitForDisplayed();
    await elem.click();
    //await MainPage.pressButton(button)
})

When('Customer accepts Alert', async() => {
     await browser.pause(6000);
    await browser.acceptAlert();
    await browser.pause(3000);
   

})


When('Customer clicks Button Add to Cart',  async() => {
     ProductPage.pressButton("Add to cart")

})

When('Customer clicks Button Accept Alert',  () => {
    browser.acceptAlert();
})

