// const express = require("express");
import express from "express";
import pool from "./config/db.js"
import initializeDb from "./utils/dbInitializer.js"
import { hashPassword, comparePassword } from './utils/hash.js'

const port = 3011;
// const port = 8082;
const app = express();
app.use(express.json());

initializeDb();

const users = {};

app.post("/user", async (req, res) => {
    // request body should contain mandatory properties: username, password, email
    const { name, password, email } = req.body;
    const username = name.trim();

    if (!username || !password || !email) {
        return res.status(400).json({
            message: "Username, password, and email are required."
        });
    };

    if (password.trim().length < 5) {
        return res.status(400).json({ message: "Invalid password." });
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

    const hashedPsw = await hashPassword(password)

    try {
        const result = await pool.query(
            `INSERT INTO users
            (user_name, email, password, created_at, updated_at)
            VALUES
            ($1, $2, $3, NOW(), NOW())
            RETURNING *;`,
            [username, email, hashedPsw]
        );

        res.status(201).json({
            message: "User registered successfully",
            user: result.rows[0]
        })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
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

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required." });
    }

    if (!users[username] || users[username].password !== password) {
        return res.status(401).json({ message: "Invalid user name or password" });
    }

    res.status(200).json({
        message: "Login successful",
        userId: users[username].id
    });
});

app.put("/user/:name", (req, res) => {
    const { name } = req.params;
    const { email, password } = req.body;

    if (!users[name]) {
        return res.status(404).json({ message: "User not found" });
    }

    if (
        // email === undefined 
        !email || typeof email !== 'string' || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    ) {
        return res.status(400).json({ message: "Invalid email." });
    };

    if (!password || password.trim().length < 5) {
        return res.status(400).json({ message: "Invalid password." });
    };

    users[name].email = email;
    users[name].password = password;

    res.status(200).json({
        message: "User updated successfully",
        user: {
            id: users[name].id,
            username: name,
            email: users[name].email
        }
    });
});

app.delete('/user/:name', (req, res) => {
    const { name } = req.params;

    if (!users[name]) {
        return res.status(404).json({ message: "User not found" });
    }

    delete users[name];

    res.status(204).json({ message: "removed" });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
