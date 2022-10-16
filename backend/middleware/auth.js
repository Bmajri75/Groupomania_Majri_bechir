const jswtoken = require("jsonwebtoken");
require("dotenv").config();


module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    console.log(token)

    const decodeur = await jswtoken.verify(token, `${process.env.TOKEN_CODE}`);
    // const userId = await decodeur
console.log(decodeur)
    // if (req.body.userId && req.body.userId !== userId) {
    //   throw "User ID non valable ! ";
    // } else {
    //   next();
    // }
  } catch {
    res.status(403).json({
      error: new Error(" unauthorized request."),
    });
  }
};
