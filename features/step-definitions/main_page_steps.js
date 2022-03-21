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

// the whole list of laptops are input parameters, and one of them is selected according to the value of index

When('Customer picks index as {string} laptops as {string}', async(index,laptops)  =>  {
     ind = parseInt(index) - 1
     laptop = await laptops.split(",")[ind]
     await MainPage.pressButton(laptop)
})













