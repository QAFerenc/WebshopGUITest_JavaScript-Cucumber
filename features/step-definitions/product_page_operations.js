const { Given, When, Then } = require('@cucumber/cucumber')
const MainPage = require('../pages/main.page');
const ProductPage = require('../pages/product.page');
const CartPage = require('../pages/cart.page');

When('Customer clicks Button Add to Cart',  async() => {
     ProductPage.pressButton("Add to cart")

})


