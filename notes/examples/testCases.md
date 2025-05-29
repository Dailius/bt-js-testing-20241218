TS 1. Login
TC.1.1. Login with valid data
1. POST  endpoint '/users'
2. Add Headers ...
3. Body:
```json
    {
        "firstName": "{{$randomFirstName}}",
        "lastName": "{{$randomLastName}}",
        "email": "{{$randomEmail}}",
        "password": "{{$randomPassword}}"
    }
```

Expected result: 
    response code: 200,
    response time up to 500ms,
    response body:
```json
    {
        "firstName": "randomFirstName",
        "lastName": "randomLastName",
        "email": "randomEmail",
        "password": "randomPassword"
    }
```


TS 2. Create User

