const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// import model
const Auth = require('../model/authModel')

// import middleware
const { signinValidation, registerValidation, comparePassword } = require('../middleware/validation')

// secret key
const { TOKEN_SECRET } = require('../config/config')

const listenAuth = async (req, res) => {
  const { email, _id } = req.body

  try {
    const existedUser = await Auth.findOne({ email, _id })
    if (!existedUser) {
      res.status(404).json({ message: 'no exist' })
    }
    
    const token = jwt.sign(
      { 
        email:existedUser.email,
        _id:existedUser._id
      }, 
      TOKEN_SECRET,
      { 
        algorithm: 'HS256',
        expiresIn: '2h' 
      }
    )

    res.status(200).json({ user:existedUser, token})
  } catch (error) {
    console.log(error)
    throw new Error()
  }
}

const signIn = async (req, res) => {
  const { email, password } = req.body

  console.log(req.body)

  try {
    //validation
    const { error } = signinValidation(req.body)
    if (error) {
      return res.status(400).json({ message:error.details[0].message });
    }

    const existedUser = await Auth.findOne({ email })
    if (!existedUser) {
      res.status(404).json({ message: 'no exist' })
    }

    
    const passwordCorrect = await bcrypt.compare(password, existedUser.password)
    if (!passwordCorrect) {
      res.status(400).json({ message: 'invalid password' })
    }
    
    const token = jwt.sign(
      { 
        email:existedUser.email,
        _id:existedUser._id
      }, 
      TOKEN_SECRET,
      { 
        algorithm: 'HS256',
        expiresIn: '2h' 
      }
    )
      
    res.status(200).json({ user:existedUser, token})
  } catch (error) {
    console.log(error)
    throw new Error()
  }
}

// const takeOver = async (req, res) => {
//   const { _id, cart, wishlist } = req.body

//   console.log(req.body)

//   try {
//     const user = await Auth.findByIdAndUpdate(
//       _id,
//       {
//         cart,
//         wishlist
//       },
//       { returnDocument : 'after'}
//     )
      
//     res.status(200).json({ user })
//   } catch (error) {
//     console.log(error)
//     throw new Error()
//   }
// }

const register = async (req, res) => {
  const { email, username, password, confirmpassword } = req.body

  console.log('register')
  console.log(req.body)

  // validation
  const differentPassword = comparePassword(password, confirmpassword)
  if (differentPassword) {
    return res.status(400).json({ message: 'diffrent password'})
  }

  const { error } = registerValidation(req.body)
  if (error) {
    return res.status(400).json({ message:error.details[0].message })
  }
  
  try {
    const existedUser = await Auth.findOne({ email })
    
    if (existedUser) {
      return res.status(400).json({ message: 'existed email' })
    }
    
    
    // hash passwords
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    const newAccount = new Auth({
      email,
      username,
      password:hashedPassword,
      imagefile: null,
      cart: [],
      wishlist: []
    })
    
    const createdAccount = await Auth.create(newAccount)

    console.log(createdAccount)

    res.status(200).json({ user: createdAccount })
  } catch (error) {
    console.log(error)
    throw new Error()
  }
}

module.exports.listenAuth = listenAuth
module.exports.signIn = signIn
// module.exports.takeOver = takeOver
module.exports.register = register