require("dotenv").config();
const jswtoken = require("jsonwebtoken");
console.log("MODULE AUTH.JS");

module.exports = (req, res, next) => {
  console.log("MODULE AUTH.JS");
  console.log(req.headers.userid);
  const token = req.headers.authorization.split(" ")[1];
  const decodeur = jswtoken.verify(token, `${process.env.TOKEN_CODE}`);
  const userIdDecoded = decodeur.userId;
  if (req.headers.userid == userIdDecoded) {
    console.log("ok c'est bon");
    next();
  } else {
    throw "User ID non valable ! ";
  }
  // res.status(403).json({
  //   error: new Error(" unauthorized request."),
  // });
};
