
## 1. Repeat and check homework
## 2. Test isolation

https://docs.cypress.io/app/core-concepts/test-isolation  

https://www.browserstack.com/guide/isolation-test 

1 scenario:

POST -> create new booking  
    run test scripts on response: 
     * response code
     * response time
     * response body (!) 

GET -> booking details (booking id)
    run test scripts on response: 
     * response code
     * response time
     * response body (!)

2.1 scenario:
POST -> create new booking (require for whole project, booking id) 
GET -> booking details (booking id)
DELETE -> delete booking by id

2.2 scenario:
POST -> create new booking (only for this scenario, booking id) 
DELETE -> delete booking by id
GET -> booking details (booking id)

## 3. Newman tool

Export postman collections:  
dots on collections -> more -> export  


