//securely manage user sessions using JWTs, ensuring that the tokens are securely stored and transmitted.

import jwt from 'jsonwebtoken'

const generateTokenAndSetCookie = (userId, res) => {
  // a JWT is created using jwt.sign(). This method takes three arguments:
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    // expire in 30 days
    expiresIn: '30d',
  })

  //The token is then sent back to the client as a cookie. The res.cookie() method is used to set a cookie named jwt
  res.cookie('jwt', token, {
    maxAge: 30 * 24 * 60 * 60 * 1000, //milliseconds formate
    httpOnly: true, //cookie is not accessible via JavaScript, making it immune to XSS attacks
    sameSite: 'strict', //CSRF attacks are prevented by setting the sameSite attribute to strict
    secure: process.env.NODE_ENV !== 'development',
  })
}

export default generateTokenAndSetCookie
