# demoblaze_web_test
This test task is part of an interviewing process

Environment :

    Development tools :  WebdriverIO, Cucumber
    Operating system  :  Windows 10
    Browser           :  99.0.4844.74
 
Setting up development tools visit : https://docs.getxray.app/display/XRAY/Testing+using+WebDriverIO+and+Cucumber+in+JavaScript
         
Test Execution : 

    The test can be executed from the main directory (level of wdio.conf.js) :   npx wdio run wdio.conf.js
    
Running video :  https://www.youtube.com/watch?v=vWN0ewVPw2Q

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
