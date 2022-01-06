const jwt  = require('jsonwebtoken')
const { TOKEN_SECRET } = require('../config/config')

const verifyToken = async (req,res,next) =>{
  try {
    // const token = req.headers.authorization
    const token = req.headers.authorization.split(" ")[1]

    console.log(token)

    if(!token){
      return res.status(401).send('Access Denied');
    }
    const verified = jwt.verify(
      token,
      TOKEN_SECRET,
      {
        algorithm: 'HS256',
        maxAge: '2h' 
      }
    );

    console.log(verified)

    req.userId = verified;

    next();
  } catch (error) {
    console.log(error)
    throw new Error('verify error')
  }
}

module.exports.verifyToken = verifyToken