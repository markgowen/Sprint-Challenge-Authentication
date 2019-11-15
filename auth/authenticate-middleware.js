/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, process.env.ENCRYPTION_KEY, (err, decodedToken) => {
      if (err) {
        console.log("Failed Verification", err);
        res.status(401).json({ message: "You must be logged in to do that" });
      } else {
        req.decodedToken = decodedToken;
        next();
      }
    });
  } else {
    res.status(400).json({ message: "No Token Provided" });
  }
};
