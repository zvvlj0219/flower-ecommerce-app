const express = require('express')
const cors = require('cors')

//load .env
const dotenv = require('dotenv')
dotenv.config()

//connect to mongodb atlas
const connectToMongoDB = require('./db')
connectToMongoDB()

//import  routes
const productRoute = require('./routes/api/productRoute')
const authRoute = require('./routes/api/authRoute')
const wishlistRoute = require('./routes/api/wishlistRoute')
const cartRoute = require('./routes/api/cartRoute')
const accountRoute = require('./routes/api/accountRoute')

//Express initialize
const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

//routes middleware
app.use('/api', productRoute)
app.use('/api/auth', authRoute)
app.use('/api/wishlist', wishlistRoute)
app.use('/api/cart', cartRoute)
app.use('/api/account-service', accountRoute)

//handle production

//server 
const port = process.env.PORT || 5000
app.listen(port,()=>{
  console.log(`NODE_ENV is ${process.env.NODE_ENV}`)
  console.log(`server is active port ${port}`)
})