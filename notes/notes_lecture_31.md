1. Repeat and check homework
2. Automation testing
3. Cypress install
4. First test with cypress


## 2. Automation testing
Smoke, Sanity, Regression testing
E2E - end to end testing

Frameworks:
1. Cypress (JS)
2. Selenium (Java, JS, Python, C#)
3. Playwrite (Python, Java, C#)

## 3. Cypress install

```bash
npm init -y
npm i cypress --save-dev
```

Stop Cypress: just open terminal and CTRL + C

E2E with Cypress:  
https://docs.cypress.io/app/end-to-end-testing/writing-your-first-end-to-end-test 


## 4. First test with cypress

Open find input field into devtools of elements: CTRL + F  

Xpath example:   
//input[@data-test="username"]  
//input[@data-test='login-button']  

Get element in cypress:  
cy.get('input[data-test=username]')  
//input[@data-test='login-button']
