function errorHandler(err, req, res, next) {
    // jwt authorization error
    if (err.name === "UnauthorizedError") {
      return res.status(401).json({ message: "The user is not authorized" });
    }
  
    // validation error
    if (err.name === "ValidationError") {
      return res.status(422).json({ message: err });
    }
  
    // default error handling
    return res.status(500).json({ message: "Server error" });
  }
  
  module.exports = errorHandler;
  