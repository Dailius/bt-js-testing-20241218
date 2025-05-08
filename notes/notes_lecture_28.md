## 1. coding

Create file auth.js:
```javascript
const token = req.headers.authorization?.split(' ')[1];

if (!token) return res.status(401).json({ error: 'Access denied' });

try {
    verifyToken(token);
} catch (error) {
    res.status(403).json({ error: 'Invalid token' });
}

```

```javascript

```

