const { Given, When, Then } = require('@cucumber/cucumber')
const MainPage = require('../pages/main.page');
const ProductPage = require('../pages/product.page');
const CartPage = require('../pages/cart.page');
const BasePage = require('../pages/base.page');


Given('A webpage as {string}', async(page) => {
  MainPage.open(page);
  browser.fullscreenWindow()
})
/*
When('Customer clicks Button as {string}',  async(button) => {
    await BasePage.pressButton(button)
})
*/
When('Customer selects category as {string}',  async(category)  =>  {
    //  browser.fullscreenWindow()
    //  browser.pause(5000)
      await MainPage.pressButton(category)
})

When('Customer picks laptop as {string}', async(laptop)  =>  {
     await MainPage.pressButton(laptop)
})

/*When('Customer clicks Button Add to Cart',  async() => {
     ProductPage.addToCart("Add to cart")

})

When('Customer clicks Button Accept Alert',  () => {
    browser.acceptAlert();
})
*/
When('Customer clicks Home',  async() => {
    const elem = await $("//*[@id='navbarExample']/ul/li[1]/a");
    await elem.click();
})

When('Customer clicks Cart',  async() => {
//    const elem= await $("//*[@id='cartur']")
//    await elem.click();
    ProductPage.pressButton("Add to cart")
})



/*When('Customer clicks button Place Order',  async() => {
    const elem = await $("//button[contains(text(),'Place Order')]")
    await elem.waitForDisplayed();
    await elem.click();
})*/










