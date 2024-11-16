const { verifyToken } = require('../config/jwt');

const authMiddleware = (req, res, next) => {
  verifyToken(req, res, next);
};

module.exports = authMiddleware;
