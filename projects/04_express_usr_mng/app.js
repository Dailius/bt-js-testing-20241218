// const express = require("express");
import express from "express";

const port = 3011;
// const port = 8082;
const app = express();
app.use(express.json());

const users = {};

app.post("/user", (req, res) => {
    // request body should contain mandatory properties: username, password, email
    const { name, password, email } = req.body;
    const username = name.trim();

    if (!username || !password || !email) {
        return res.status(400).json({
            message: "Username, password, and email are required."
        });
    };

    if (users[username]) {
        return res.status(409).json({
            message: "Username allready exist"
        });
    };

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        return res.status(400).json({
            message: "Invalid email format"
        });
    }

    if (username.length > 35) {
        return res.status(400).json({
            message: "Username too long (max length 35)"
        });
    };

    const id = Date.now() // provide better solution
    users[username] = { id, email, password }

    res.status(201).json({
        "message": "User registered successfully",
        "user": {
            id: users[username].id,
            username: username,
            email: users[username].email
        }
    })
});

// http://localhost:3011/user
app.get("/user", (req, res) => {
    res.status(200).json(users);
});

// http://localhost:3011/user/:userName
// http://localhost:3011/user/user136

app.get("/user/:name", (req, res) => {
    const { name } = req.params;

    if (!users[name]) {
        return res.status(404).json({
            message: "User not found."
        });
    };

    res.status(201).json({
        id: users[name].id,
        username: name,
        email: users[name].email
    })
});

app.post("/login", (req, res)=>{
    const { username, password } = req.body;

    if(!username || !password){
        return res.status(400).json({message: "Username and password are required."});
    }

    if(!users[username] || users[username].password !== password){
        return res.status(401).json({message: "Invalid user name or password"});
    }

    res.status(200).json({
        message: "Login successful",
        userId: users[username].id
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
