const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) {
      return res.status(401).json({ response: "Auth middleware failed" });
    } else {
      req.body.userId = decoded.userId;
      return next();
    }
  });
};
