1. Repeat and check homework
2. Cypress configuration
3. Single page apps (spa). Website vs web applications.
4. React
5. Cypress commands
6. Scripts
7. Github actions pipelines

## 1. Repeat and check homework


## 2. Cypress configuration

https://docs.cypress.io/app/references/configuration  
https://docs.cypress.io/api/commands/viewport  


https://docs.cypress.io/api/cypress-api/config  
https://docs.cypress.io/app/references/configuration#Test-Configuration  
https://peter.sh/experiments/chromium-command-line-switches/  

## 3. Single page apps (spa). Website vs web applications.

https://webflow.com/blog/90s-website-design 

https://react.dev/ 

## 4. React

Old react tools: 
https://create-react-app.dev/docs/getting-started/  

Current most popular React framework: 
https://vite.dev/guide/  

Create new react project
```bash
npm create vite@latest .
```
Init guidance:
1st step: type 'Y'  
2nd step: select * react  
3rd step: select * JavaScript  

Continue with actions:  
```bash
npm i
npm run dev
```
Close app CTRL + C  

https://react.dev/reference/react-dom/components  

Instal Cypress
```bash
npm i cypress --save-dev
```


## 5. Scripts

Run few scripts synchronously: 
```bash
npm i concurrently --save-dev
npm i wait-on --save-dev
```

```json
"scripts": {
    // "dev": "vite",
    // "build": "vite build",
    // "lint": "eslint .",
    // "preview": "vite preview",
    // "cyo": "npx cypress open",
    // "cyr": "npx cypress run --browser chrome",
    "tst:cyo": "concurrently \"npm run dev\" \"wait-on http://localhost:5173/ && npm run cyo\"",
    "tst:cyr": "concurrently \"npm run dev\" \"wait-on http://localhost:5173/ && npm run cyr\""
  }
```
