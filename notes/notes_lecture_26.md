## 1. Intro to security

 Authentication, Authorization.

1.spt login -> token was created (JWT)
2.spt request for services, Authorization added into headers


When new account created require to hash password into database.
Hash functions + salt

password hashing collision:  
https://auth0.com/blog/hashing-passwords-one-way-road-to-security/  


## 2. JWT

https://jwt.io/

Structure:
1. header
2. payload
3. signature

JWT has some time validity.

## 3. API key vs. JWT
API key good for BE (connection between systems), very bad for FE.
JWT good for FE (user authentication and authorization), very bad for BE.


## 4. Attacks
1. sniffing attack (http/https)
2. injection attack
3. dictionary attack

## 5. Coding

```bash
npm i bcryptjs dotenv jsonwebtoken
```

Separation of concerns



