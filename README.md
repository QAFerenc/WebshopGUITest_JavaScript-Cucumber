# Webshop automated test (Technology : Javascript, WebdriverIO, Selenium, Cucumber) 

Task : 


Implement the following Web automated checks over DEMO ONLINE SHOP: https://www.demoblaze.com/index.html

    Customer navigation through product categories: Phones, Laptops and Monitors
    Navigate to "Laptop" → "Sony vaio i5" and click on "Add to cart". Accept pop up confirmation.
    Navigate to "Laptop" → "Dell i7 8gb" and click on "Add to cart". Accept pop up confirmation.
    Navigate to "Cart" → Delete "Dell i7 8gb" from cart. 
    Click on "Place order".
    Fill in all web form fields.
    Click on "Purchase"
    Capture and log purchase Id and Amount.
    Assert purchase


Environment :

    Development tools :  WebdriverIO, Cucumber, nodejs
    Operating system  :  Microsoft Windows 10 Pro (version : 10.0.19042)
    Browser           :  99.0.4844.74
 
For setting up development tools visit : https://docs.getxray.app/display/XRAY/Testing+using+WebDriverIO+and+Cucumber+in+JavaScript

Running video :  https://www.youtube.com/watch?v=vWN0ewVPw2Q

Screenshot    : screenshots\test_results.png
         
Test Execution from node.js command line : 

    The test can be executed from the main directory (level of wdio.conf.js) :   npx wdio run wdio.conf.js
    

Reporting     : Allure  (https://webdriver.io/docs/allure-reporter/)

Code :

  The code follows the Page Object Model (POM) design pattern :    - Feature file (features\web_test.js)
                                                                   - Test Step files (features\step-definitions\*.js)
                                                                   - Page files (features\pages\*.js)

  According to the URL endings in the different pages of the test process, we can identify the following file names :

                         index.html
                         prod.html
                         cart.html
                         
                          
                        
  The listed html pages are projected to "test step" and "page" files, as :

    index.html ->  main_page_steps.js   ,   main_page.js
    prod.html  ->  product_page_steps.js,   product_page.js
    cart.html  ->  cart_page_steps.js   ,   cart_page.js     
  
  
  The page related test step and page files are inherited from base files (base_page_steps.js and base_page.js)
