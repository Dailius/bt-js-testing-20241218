1. Repeat and check homework
2. Cypress commands
3. Github actions pipelines


## 1. Repeat and check homework

## 2. Cypress commands

https://docs.cypress.io/api/cypress-api/custom-commands

Create function in `support/commands.js`:
```javascript
    Cypress.Commands.add('login', (user, password) => {
        cy.visit('https://www.saucedemo.com/');

        cy.get('input[data-test="username"]').type(user);
        cy.get('input[data-test="password"]').type(password);
        cy.get('input[data-test="login-button"]').click();
    })
```

Call this function within test:
```javascript
    cy.login('user_name', 'secret_password');
```

## 3. Github actions pipelines

Remove cached git files:
```bash
git rm -r -f --cached './cypress/screenshots'
```

