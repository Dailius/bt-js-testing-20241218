1. Repeat and check homework
2. xpath selector
3. Intro to CI/CD
4. Virtual machines
5. Cypress run
6. Cypress configuration

## 1. Repeat and check homework


## 2. xpath selector
examples:
//div[@id='some_id']//*
//div[@id='some_id']/*
/*

(//div[@id='some_id']//*)[6]
(//div[@id='some_id']//*)[1] -> numeravimas prasideda nuo 1, o ne nuo 0.


//div[@id='some_id_1']/../..
(//div[@id='some_id_1']/../../*)[3]

```html
<div id='some_id'>
   <div>
      <div>
         <div id='some_id_1'>
            <p></p>
         </div>
      </div>
   </div>
   <div></div>
   <div>
      <div>
         <div>
            <p></p>
         </div>
      </div>
   </div>
</div>
```
functions:
text()
contains()

//p[text()='Second paragraph']
//p[contains(text(),'paragraph')]

https://www.w3schools.com/xml/xpath_syntax.asp  
https://devhints.io/xpath

https://www.cypress.io/blog/understanding-selectors-in-testing

Install xpath: 
```powershell
    npm install -D cypress-xpath
```

Setup support file in '/support/e2e.js' just paste inside file:
```js
    require('cypress-xpath');
```

Cypress code example:
```js
cy.xpath('//input[@data-test="username"]').type('standard_user');
```

## 3. Intro to CI/CD
![](/pictures/cicd.png)  


## 4. Virtual machines
![](/pictures/virtualisation.png)


* IaaS - Infrastructure as a Service  
* PaaS - Platform as a Service  
* SaaS - Software as a Service 
![](/pictures/saas.png)  

Cloud -> hostinger, azure, aws ...

## 5. Cypress run
Cypress browser: 
https://docs.cypress.io/app/references/launching-browsers  
https://docs.cypress.io/app/references/command-line  

Cypress configuration:  
https://docs.cypress.io/app/references/configuration


```bash
npx cypress run

npx cypress run --browser chrome

npx cypress run --spec "cypress\e2e\todo.cy.js"
npx cypress run -- --spec "cypress\e2e\todo.cy.js"

npx cypress run -- --spec "cypress\e2e\folder_01\folder_02_01"
```

