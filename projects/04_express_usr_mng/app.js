// const express = require("express");
import express from "express";

const port = 3011;
// const port = 8082;
const app = express();
app.use(express.json());

const users = {};

app.post("/user", (req, res)=>{
    // request body should contain mandatory properties: username, password, email
    const { username, password } = req.body; 

    if(!username || !password){
        // compleat validation    
    }
    
    if(users[username]){
        // compleat validation    
    }

    // check email validation, 
    
    // check username validation (max length 35)

    const id = Date.now() // provide better solution
    users[username] = {id, password}

    console.log(users)
    console.log(users[username])

    res.status(201).json({
        "message": "User registered successfully",
        "id": id
    })
});

// http://localhost:3011/user
app.get("/user", (req, res) => {
    res.json([
        { 'user': 'user01' },
        { 'user': 'user01' },
        { 'user': 'user01' },
        { 'user': 'user01' }
    ]);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
