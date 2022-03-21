const BasePage = require('./base.page')

class MainPage extends BasePage {


    open() {

        super.open('https://www.demoblaze.com/index.html')

    }


    async pressButton(locator) {
        await super.pressButton(locator)
    }



}

module.exports = new MainPage();
