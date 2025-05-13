const express = require('express');
const usersRouter = require('./routes/users');

const app = express();

// http://localhost:3012/api/users/1

// http://localhost:3012 -> app.js line 19
// /api/users -> app.js line 13
// /:id -> users.js line 13

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running');
});

app.use('/api/users', usersRouter);

module.exports = app;