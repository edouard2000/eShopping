const expressJwt = require("express-jwt");

function authJwt() {
  const secret = process.env.secret;
  const api = '/api/v1';
  
  return expressJwt({
    secret,
    algorithms: ["HS256"]
  }).unless({
    path: [
      { url: `${api}/products`, methods: ["GET", "OPTIONS"] },
      `${api}/users/login`,
      `${api}/users/register`
    ]
  });
}

module.exports = authJwt;
