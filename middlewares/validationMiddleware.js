const validateData = (req, res, next) => {
    if (!req.body.data) {
      return res.status(400).json({ message: 'Data is required' });
    }
    next();
  };
  
  module.exports = validateData;
  