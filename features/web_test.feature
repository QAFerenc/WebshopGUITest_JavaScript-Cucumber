Feature: To test a website


Scenario Outline: Loading webpage
  Given A webpage as "https://www.demoblaze.com/index.html"
  When Customer selects category as "<category>"
  When Customer picks laptop as "<laptop_1>"
  When Customer clicks button as "Add to cart"
  When Customer accepts Alert
  When Customer clicks button as "Home"
  When Customer selects category as "<category>"
  When Customer picks laptop as "<laptop_2>"
  When Customer clicks button as "Add to cart"
  When Customer accepts Alert
  When Customer clicks button as "Cart"
  When Customer deletes last element 
  When Customer clicks button as "Place Order"
  When Customer fills in field Name as "<name>"
  When Customer fills in field Country as "<country>"
  When Customer fills in field City as "<city>"
  When Customer fills in field Card as "<card>"
  When Customer fills in field Month as "<month>"
  When Customer fills in field Year as "<year>"
  When Customer clicks Purchase Button
  When Customer clicks Close button
  Then Match price as "<price_of_laptop1>" with purchased amount 
Examples:
|category| laptop_1    | laptop_2    |  price_of_laptop_1 |name     |  country | city     | card            |  month | year |
|Laptops| Sony vaio i5 | Dell i7 8gb |        790         |  Ferenc | Budapest | Hungary  | 1234567890123456|   03   | 2022 |


  


  