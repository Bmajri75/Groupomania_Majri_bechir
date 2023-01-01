const jswtoken = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const decodeur = jswtoken.verify(token, `${process.env.TOKEN_CODE}`);
  const userId = decodeur.userId;
  if (req.body.userId && req.body.userId !== userId) {
    throw "User ID non valable ! ";
  } else {
    next();
  }

  res.status(403).json({
    error: new Error(" unauthorized request."),
  });
};
