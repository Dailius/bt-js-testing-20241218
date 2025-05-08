## 1. Intro to security

Create file jwt.js:
```javascript
import jwt from 'jsonwebtoken';

if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET missing in .env file");
}

export const generateToken = (payload, expiresIn = '1h') => {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });
}

export const verifyToken = (token) => {
    jwt.verify(token, process.env.JWT_SECRET)
}

```

Update POST request for user login in app.js:
```javascript
const result = await pool.query(
        `SELECT user_id, user_name, password
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

    if (!comparePassword(password, user.password)) {
        return res.status(401).json({ message: "Invalid user name or password" });
    }

    res.status(200).json({
        message: "Login successful",
        userId: user.user_id,
        username: user.user_name,
        token: generateToken({ userId: user.user_id, username: user.user_name, }, 120)
    });
```

