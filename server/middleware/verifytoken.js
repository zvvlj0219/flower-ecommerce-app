const jwt  = require('jsonwebtoken')

const verifyToken = async (req,res,next) =>{
  try {
    const token = req.headers.authorization.split(" ")[1]

    if(!token){
      return res.status(401).send('Access Denied')
    }
    const verified = jwt.verify(
      token,
      process.env.TOKEN_SECRET,
      {
        algorithm: 'HS256',
        maxAge: '2h' 
      }
    );

    req.userId = verified;

    next()
  } catch (error) {
    console.log(error)
    return res.status(400).send('ERROR : Invalid Token')
  }
}

exports.verifyToken = verifyToken