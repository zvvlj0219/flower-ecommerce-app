const jwt  = require('jsonwebtoken')

const verifytoken = async (req,res,next) =>{
  try {
    const token = req.headers.Authorization.split(" ")[1]

    console.log(token)

    if(!token){
      return res.status(401).send('Access Denied');
    }
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);

    req.userId = verified;

    next();
  } catch (error) {
    console.log(error)
    throw new Error()
  }
}

module.exports.verifytoken = verifytoken