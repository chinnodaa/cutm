const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
const cors = require('cors');
const express = require('express');
const app = express();
app.use(cors());

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token)
     return res.status(401).json({ error: 'Access denied. No token provided.' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // contains { id, role }
    next();
  } catch (error) {
    res.status(403).json({ error: 'Invalid token.' });
  }
};

module.exports = authMiddleware;
