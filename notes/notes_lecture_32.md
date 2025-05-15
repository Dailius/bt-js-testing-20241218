1. Repeat and check homework
2. E2E tests vs integration tests.
3. Node http-server
4. Get vs contains in cypress.
5. Actions in cypress: type and click.
6. Combinator selector


## 2. E2E tests vs integration tests.

E2E - End to end testing, a way to make sure that applications behave as expected and that the flow of data is maintained for all kinds of user tasks and processes. This type of testing approach starts from the end user's perspective and simulates a real-world scenario.

**Microservices:**  
![](/pictures/microservice_architecture_image.png)

**Microservices vs. Monolithic:**  
![](/pictures/microsevice_monolithic_architecture.png)


E2E - tests the entire application, simulating real-world user scenarios from start to finish
    
Integration testing - focuses on verifying the interaction between integrated modules, components, or services.  

**AAA testing pattern:**  
https://semaphoreci.com/blog/aaa-pattern-test-automation  

**Cypress test isolation:**   
https://docs.cypress.io/app/core-concepts/test-isolation  

**Writing and Organizing Tests:**  
https://docs.cypress.io/app/core-concepts/writing-and-organizing-tests

## 3. Node http-server

```bash
npm install -g http-server
npx http-server -p 8082
``` 
Hit CTRL-C to stop the server

## 3. Get vs contains in cypress.

**Best prctices:**  
https://docs.cypress.io/app/core-concepts/best-practices  

**Get function:**  
https://docs.cypress.io/api/commands/get 

**Contains function:**  
https://docs.cypress.io/api/commands/contains


xpath examples:  
//h1[text()='Demo text']
//*[text()='Demo text']
//*[contains(text(),'Demo text')]

Cypress xpath setup:
https://www.cypress.io/blog/understanding-selectors-in-testing  


## 4. Actions in cypress: type and click.
cy.get('input[data-test="password"]').type('secret_sauce');
cy.get('input[data-test="login-button"]').click();



