1. Repeat and check homework
2. Unit and integration testing


## 2. Unit and integration testing

### Jest 
Contains test runner, assertion library, mocking  
Good for unit testing and has built-in support for mocking modules  
Easy configuration  

[Jest doc](https://jestjs.io/docs/getting-started)

### Supertest
Designed for HTTP assertions
Good for integration testing like routes/middleware

[Supertest doc](https://www.npmjs.com/package/supertest)

Installation:  
```bash
npm init -y
npm i --save-dev jest supertest
```

Update package.json file to add a test script:
```json
 "scripts": {
    "dev": "node --watch ."
  },
```


