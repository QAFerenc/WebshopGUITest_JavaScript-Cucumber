const BasePage = require('./base.page')

class CartPage extends BasePage {


    get laptop_price_locator ()            { return $('//*[@id="tbodyid"]/tr[1]/td[3]') }
    get delete_second_element_locator ()   { return $('//*[@id="tbodyid"]/tr[2]/td[4]/a') }
    get amount_locator()                   { return $('/html/body/div[9]/p/text()[2]') }
    get closeButton()                      { return "//*[@id=\"orderModal\"]/div/div/div[3]/button[1]"}
    get firstElementInBasket()             { return "//*[@id='tbodyid']/tr[1]/td[2]"}
    get secondElementInBasket()            { return "//*[@id='tbodyid']/tr[2]/td[2]"}
    get deleteFirstElementButton()         { return "//*[@id='tbodyid']/tr[1]/td[4]/a"}
    get deleteSecondElementButton()        { return "//*[@id='tbodyid']/tr[2]/td[4]/a"}
    get purchaseButton()                   { return "//*[@id='orderModal']/div/div/div[3]/button[2]" }
    get priceRow()                         { return "/html/body/div[9]/p"}
    

}

module.exports = new CartPage();
