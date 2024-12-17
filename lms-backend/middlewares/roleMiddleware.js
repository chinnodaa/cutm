const cors = require('cors');
const express = require('express');
const app = express();
app.use(cors());

const authorizeRole = (role) => (req, res, next) => {
  if (req.user.role !== role) return res.status(403).json({ error: 'Access denied: insufficient privileges' });
  next();
};
   
  
  module.exports = authorizeRole;
  