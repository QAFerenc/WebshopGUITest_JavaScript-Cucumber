const BasePage = require('./base.page')

class ProductPage extends BasePage {


    addToCart(button) {

        super.pressButton(button)

    }

   pressButton(button)
   {

        super.pressButton(button)

    }

}

module.exports = new ProductPage();