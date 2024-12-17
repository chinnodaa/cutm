const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
  
    // Handle specific types of errors
    if (err.name === 'ValidationError') {
      return res.status(400).json({ error: err.message });
    } else if (err.name === 'UnauthorizedError') {
      return res.status(401).json({ error: 'Invalid token.' });
    }
  
    res.status(500).json({ error: 'Something went wrong on the server.' });
  };
  
  module.exports = errorHandler;
  