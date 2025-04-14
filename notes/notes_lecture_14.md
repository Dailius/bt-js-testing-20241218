
## 1. Homework (positive/negative API request)
https://restful-booker.herokuapp.com/apidoc/index.html

1. Create token (POST)
Request body:
```json
{
    "username" : "admin",
    "password" : "password123"
}
```
    1.1. Positive create token (provide valid credentials)
        test: response code (200), response time (~700ms), check response body, types and values (according doc)
    1.2. Negative without username
        test: response code (400), response time (~700ms), check response body, types and values (according doc)
```json
{
    "password" : "password123"
}
```
    1.3. Negative empty username
```json
{
    "username" : "",
    "password" : "password123"
}
```
    1.4. Negative not existing username
```json
{
    "username" : "some_incorrect_name",
    "password" : "password123"
}
```
    1.5. Negative without password
    1.6. Negative empty password
    1.7. Negative not existing password
    1.8. Negative with empty credentials

2. Create booing (POST)
Request body:
```json
{
    "firstname": "Sally",
    "lastname": "Brown",
    "totalprice": 111,
    "depositpaid": true,
    "bookingdates": {
        "checkin": "2013-02-23",
        "checkout": "2014-10-23"
    },
    "additionalneeds": "Breakfast"
}
```
    2.1. Positive with all required data

    2.2. Negative without firstname
        test: response code (400), check response body (mandatory field)
    2.3. Negative empty firstname
        test: response code (400), check response body (mandatory field can not be empty)
    2.4. Negative add number into firstname
        test: response code (400), check response body (firstname type miss match, text require)

    2.5. Negative without lastname
        test: response code (400), check response body (mandatory field)
    2.6. Negative empty lastname
        test: response code (400), check response body (mandatory field can not be empty)
    2.7. Negative add number into lastname
        test: response code (400), check response body (lastname type miss match, text require)

    2.8. Negative without totalprice
        test: response code (400), check response body (mandatory field)
    2.9. Negative null totalprice
        test: response code (400), check response body (mandatory field can not be empty)
    2.10. Negative add number as text into totalprice
        test: response code (200), check response body (converts texted number into number type)
    2.11. Negative add some text into totalprice
        test: response code (400), check response body (should not accept letters, symbols etc)

    2.12. Negative without depositpaid
        test: response code (400), check response body (mandatory field)
    2.13. Negative null depositpaid
        test: response code (400), check response body (mandatory field)
    2.14. Negative provide not boolean type for depositpaid
        test: response code (400), check response body (type miss match)
    
    2.15. Negative without bookingdates
        test: response code (400), check response body (mandatory field)
    2.16. Negative without checkin
        test: response code (400), check response body (mandatory field)
    2.17. Negative without checkout
        test: response code (400), check response body (mandatory field)
    2.18. Negative empty checkin
        test: response code (400), check response body (some relevant error message)
    2.19. Negative empty checkout
        test: response code (400), check response body (some relevant error message)
    2.20. Negative with incorrect date format into checkin
        test: response code (400), check response body (some relevant error message)
    2.21. Negative with incorrect date format into  checkout
        test: response code (400), check response body (some relevant error message)
    2.22. Negative with null into checkin
        test: response code (400), check response body (some relevant error message)
    2.23. Negative with null into  checkout
        test: response code (400), check response body (some relevant error message)

    2.12. Negative without additionalneeds
        test: response code (200), check response body (booking created)


1. All bookings (GET)
2. Booking details (GET)
3. Update booking (PUT)
4. Update booking (PATCH)
5. Delete booking (DELETE)

