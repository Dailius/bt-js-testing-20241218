// const express = require("express");
import express from "express";
import pool from "./config/db.js"
import initializeDb from "./utils/dbInitializer.js"
import { hashPassword, comparePassword } from './utils/hash.js'
import { generateToken } from './utils/jwt.js'
import { authenticate } from './utils/auth.js'

const port = 3011;
// const port = 8082;
const app = express();
app.use(express.json());

initializeDb();

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

    // if (users[username]) {
    //     return res.status(409).json({
    //         message: "Username allready exist"
    //     });
    // };

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
            user: {
                id: result.rows[0].user_id,
                username: result.rows[0].user_name,
                email: result.rows[0].email,
                createdAt: result.rows[0].created_at,
                updatedAt: result.rows[0].updated_at
            }
        })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// http://localhost:3011/user
app.get("/user", authenticate, async (req, res) => {
    // res.status(200).json(users);
    try {
        const result = await pool.query(
            `SELECT user_id, user_name, email, created_at, updated_at FROM users`
        );

        const users = result.rows.map(user => ({
            id: user.user_id,
            username: user.user_name,
            email: user.email,
            createdAt: user.created_at,
            updatedAt: user.updated_at
        }));

        res.status(200).json(users);
    } catch (error) {
        console.error("Error fetching user list: ", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// http://localhost:3011/user/:userName
// http://localhost:3011/user/user136

// app.get("/user/:name", authenticate, async (req, res) => {
// const { name } = req.params;


// Do not forget to add code line in auth.js: req.user = verifyToken(token);
// Fixed jwt.js verifiedToken, require returned object

app.get("/user/details", authenticate, async (req, res) => {
    const { username } = req.user;

    try {
        const result = await pool.query(
            `SELECT user_id, user_name, email, created_at, updated_at 
             FROM users 
             WHERE user_name = $1`,
            [username]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                message: "User not found."
            });
        }

        const user = result.rows[0];
        res.status(200).json({
            id: user.user_id,
            username: user.user_name,
            email: user.email,
            createdAt: user.created_at,
            updatedAt: user.updated_at
        });
    } catch (error) {
        console.error("Error fetching user details: ", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            const error = new Error("Username and password are required.");
            error.statusCode = 400;
            throw error;
        }

        const result = await pool.query(
            `SELECT user_id, user_name, password
            FROM users 
            WHERE user_name = $1`,
            [username]
        );

        const user = result.rows[0];

        if (result.rows.length === 0 || !user.password || !user.user_name) {
            const error = new Error("User not found new");
            error.statusCode = 404;
            throw error;
        }

        if (!comparePassword(password, user.password)) {
            const error = new Error("Invalid user name or password");
            error.statusCode = 401;
            throw error;
        }

        res.status(200).json({
            message: "Login successful",
            id: user.user_id,
            username: user.user_name,
            token: generateToken({ userId: user.user_id, username: user.user_name, }, 120)
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({ error: error.message || "Internal server error" });
    }
});

app.put("/user/:name", authenticate, async (req, res) => {
    const { name } = req.params;
    const { email, password } = req.body;

    if (
        // email === undefined 
        !email || typeof email !== 'string' || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    ) {
        return res.status(400).json({ message: "Invalid email." });
    };

    if (!password || password.trim().length < 5) {
        return res.status(400).json({ message: "Invalid password." });
    };

    const hashedPsw = await hashPassword(password)

    try {
        const result = await pool.query(
            `UPDATE users 
        SET
            email = $2,
            password = $3,
            updated_at = NOW()
        WHERE user_name = $1
        RETURNING *`,
            [name, email, hashedPsw]
        );

        const resultUserUpdated = await pool.query(
            `SELECT * FROM users WHERE user_name = $1`,
            [name]
        );

        const updatedUser = resultUserUpdated.rows[0];
        res.status(200).json({
            message: "User updated successfully",
            user: {
                id: updatedUser.user_id,
                username: updatedUser.user_name,
                email: updatedUser.email,
                createdAt: updatedUser.created_at,
                updatedAt: updatedUser.updated_at
            }
        });
    } catch (error) {
        console.error("Error updating user: ", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.delete('/user/:name', authenticate, async (req, res) => {
    const { name } = req.params;

    try {
        const result = await pool.query(
            `DELETE FROM users
	        WHERE user_name = $1
            RETURNING *`,
            [name]
        );

        const deletedUser = result.rows[0];

        if (!deletedUser) {
            return res.status(404).json({
                message: "User not found."
            });
        }

        res.status(200).json({
            message: "Account removed successfully"
        });
    } catch (error) {
        console.error("Error deleting user: ", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
