const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const { verifyToken } = require('../middleware/verifyToken')

// import model
const Auth = require('../model/authModel')

// import middleware
const { signinValidation, registerValidation, comparePassword } = require('../middleware/validation')

const listenAuth = async (req, res) => {
  
  try {
    verifyToken()

    const { email, _id } = req.body
    const existedUser = await Auth.findOne({ email, _id })
    .select(['_id','email','username','cart','wishlist','information', 'order'])

    if (!existedUser) {
      res.status(404).json({ message: 'no exist' })
    }
    
    const token = jwt.sign(
      { 
        email:existedUser.email,
        _id:existedUser._id
      }, 
      process.env.TOKEN_SECRET,
      { 
        algorithm: 'HS256',
        expiresIn: '2h' 
      }
    )

    res.status(200).json({ user:existedUser, token})
  } catch (error) {
    console.log(error)
  }
}

const signIn = async (req, res) => {
  const { email, password } = req.body

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
      process.env.TOKEN_SECRET,
      { 
        algorithm: 'HS256',
        expiresIn: '2h' 
      }
    )
      
    res.status(200).json({
      user:{
        _id: existedUser._id,
        email: existedUser.email,
        username: existedUser.username,
        cart: existedUser.cart,
        wishlist: existedUser.wishlist
      },
      token
    })
  } catch (error) {
    console.log(error)
  }
}

const takeOver = async (req, res) => {
  const { _id, wishlist, cart } = req.body

  try {
    const user = await Auth.findByIdAndUpdate(
      _id,
      {
        wishlist,
        cart
      },
      { returnDocument : 'after'}
    )
    .select(['_id','email','username','cart', 'order','wishlist'])
      
    res.status(200).json({ user })
  } catch (error) {
    console.log(error)
  }
}

const register = async (req, res) => {
  const { email, username, password, confirmpassword } = req.body

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
      wishlist: [],
      order: [],
      information: {
        client: null,
        address: null,
        payment: []
      }
    })
    
    const createdAccount = await Auth.create(newAccount)

    res.status(200).json({ user: createdAccount })
  } catch (error) {
    console.log(error)
  }
}

module.exports.listenAuth = listenAuth
module.exports.signIn = signIn
module.exports.takeOver = takeOver
module.exports.register = register