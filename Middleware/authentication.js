const jwt = require("jsonwebtoken");
require("dotenv").config();

const authentication = (req, res, next) => {
  const token = req.headers?.authorization?.split(" ")[1];

  if (!token) {
    res.send("Please Login Again");
  }

  const decoded = jwt.verify(token, process.env.JWT_KEY);
  const userId = decoded.userId;
  if (decoded) {
    req.body.userId = userId;
    next();
  } else {
    res.send("Plase login");
  }
};

module.exports = {
  authentication,
};
