const { Given, When, Then } = require('@cucumber/cucumber')
const MainPage = require('../pages/main.page');
const ProductPage = require('../pages/product.page');
const CartPage = require('../pages/cart.page');
const BasePage = require('../pages/base.page');


Given('A webpage as {string}', async(page) => {
  MainPage.open(page);
  browser.fullscreenWindow()
})

When('Customer selects category as {string}',  async(category)  =>  {
    await MainPage.pressButton(category)
})

When('Customer picks laptop as {string}', async(laptop)  =>  {
    await MainPage.pressButton(laptop)
})













