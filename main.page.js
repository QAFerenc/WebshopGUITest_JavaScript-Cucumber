const BasePage = require('./base.page')

class MainPage extends BasePage {


    open() {

        super.open('https://www.demoblaze.com/index.html')

    }

    selectCategory(category) {

        super.pressButton(category)

    }

    selectProduct(product) {

        super.pressButton(product)

    }

    async pressButton(locator) {
        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa2")
        await super.pressButton(locator)

    }



}

module.exports = new MainPage();