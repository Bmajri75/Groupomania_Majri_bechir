const jswtoken = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const decoded = jswtoken.verify(token, `${process.env.TOKEN_CODE}`);
  try {
    if (decoded.exp < Date.now() / 1000) {
      return res.status(401).json({
        error: new Error("Token has expired."),
      });
    }
  } catch (error) {
    return res.status(401).json({
      error: new Error("Invalid token."),
    });
  }
  const userIdDecoded = decoded.userId;
  if (req.headers.userid == userIdDecoded) {
    next();
  } else {
    return res.status(403).json({
      error: new Error("Unauthorized request."),
    });
  }
};
