

## 1. Repeat and check homework


## 2. Nonfunctional

![](/pictures/testing_types.png)


Regression - new code ruined odl code.

UI/UX

Security testing  
Performance testing: 
1. loading test
2. stress test
3. volume test
4. salability test 

## 3. Boxing
White box
- we write unit and integration tests
- require BE

Gray box:
- we understand validation based on app code.
- E2E require FE
- System testing (Rest API) require BE

Black box:
 - we do not see app code.
 - required FE


## 4. Software dev. methodologies: Waterfall, Agile

SDLC - software development lifecycle

![](/pictures/sdlc.png)

Project companies:
    Telesoftas, Softnet, BalticAmadeus

Product companies
    Vinted, NordSecurity, Kilo.Health


REQUIREMENTS:
1. Customer requirements
2. System requirements
3. Programming specification


Build v0.0.1  
>registration functionality. 

Build v0.0.1 -> testing:  
>registration functionality.  
>new bugs are available 

Build v0.0.2  
>registration functionality.  
>fixed bugs of registration func.  
>login func.  

Build v0.0.2 -> testing: 
>login func.
>regression testing -> registration functionality
>new bugs are available

Build v0.0.3:
> registration func.
> login func.
> fixed bugs.
> item catalog

Build v0.0.3 -> testing

Waterfall: Linear and sequential. Each phase (e.g., Requirements → Design → Implementation → Testing → Maintenance) must be completed before the next begins.


Agile: Iterative and incremental. Development is done in small cycles (sprints), and features are delivered continuously.

Testing
> Waterfall: Testing happens after development is complete.  
> Agile: Testing happens continuously during development.

## 5. Test Cases (TC)

https://www.saucedemo.com/

Functionality:
1. Header (Websites only)
2. Footer (Websites only)
3. Hamburger menu
4. Shopping main page
5. Item page
6. Cart
7. Purchase
8. Login
9. Filters, sorting etc.
10. Logout
11. About

Same native mob app.:
1.  Install
2.  Uninstall
3.  Close app
4. No tests for Header and Footer

TS -> Test Scenarios = one functionality

TS
TS.1. Header (Websites only)
TS.2. Footer (Websites only)
TS.3. Hamburger menu
TS.4. Shopping main page
TS.5. Item page
TS.6. Cart
TS.7. Purchase
TS.8. Login
TS.9. Filters, sorting etc.
TS.10. Logout

TC - test case

TS.8. Login
TC.8.1. Login with valid data  
(first TC always must be positive)  
* 1. Enter user name: standard_user
* 2. Enter password: secret_sauce 
* 3. Click on button 'Login'

Expected result: Open shopping main page
Actual result:

TC.8.2. Login with incorrect user name
* 1. Enter user name: some_incorrect_user_name
* 2. Enter password: secret_sauce 
* 3. Click on button 'Login'

Expected result:   
    Epic sadface: Username and password do not match any user in this service  
Actual result:

TC.8.3. Login with empty user name
* 1. Enter user name: just empty field
* 2. Enter password: secret_sauce 
* 3. Click on button 'Login'

Expected result:   
    Epic sadface: Username is required   
Actual result:

TC.8.3. Login with empty password
* 1. Enter user name: standard_user
* 2. Enter password: just empty field 
* 3. Click on button 'Login'

Expected result:   
    Epic sadface: Password is required  
Actual result:
