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

Code :

  The code follows the Page Object Model (POM) design pattern :    - Feature file (features\web_test.js)
                                                                   - Test Step files (features\step-definitions\*.js)
                                                                   - Page files (features\pages\*.js)

  According to the URL endings in the different pages of the test process, we can identify the following file names :

                         index.html
                         prod.html
                         cart.html
                         
                          
                        
  The listed html pages are projected to "test step" and "page files", as :

    index.html ->  main_page_operations.js   ,   main_page.js
    prod.html  ->  product_page_operations.js,   product_page.js
    cart.htnl  ->  cart_page_operations.js   ,   cart_page.js     
  
