const BasePage = require('./base.page')

class CartPage extends BasePage {


    get laptop_price_locator () { return $('//*[@id="tbodyid"]/tr[1]/td[3]') }
    get delete_second_element_locator () { return $('//*[@id="tbodyid"]/tr[2]/td[4]/a') }
    get amount_locator()    { return $('/html/body/div[9]/p/text()[2]') }

}

module.exports = new CartPage();
