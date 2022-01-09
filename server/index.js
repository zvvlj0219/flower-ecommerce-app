const express = require('express');
const cors = require('cors');
const { MONGODB_URI } = require('./config/config')

//load .env
const dotenv = require('dotenv');
dotenv.config();

//connect to mongodb atlas
const mongoose = require('mongoose');
mongoose.connect(
  MONGODB_URI,
  {
    useUnifiedTopology : true,
    useNewUrlParser : true,
  }
)
.then(()=>console.log('connected mongodb atlas'))
.catch(error=>console.log(error))

//import  routes
const productRoute = require('./routes/api/productRoute')
const authRoute = require('./routes/api/authRoute')
const wishlistRoute = require('./routes/api/wishlistRoute')
const cartRoute = require('./routes/api/cartRoute')
const accountRoute = require('./routes/api/accountRoute')

//Express initialize
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

//routes middleware
app.use('/api', productRoute)
app.use('/api/auth', authRoute)
app.use('/api/wishlist', wishlistRoute)
app.use('/api/cart', cartRoute)
app.use('/api/account', accountRoute)

//handle production

//server 
const port = process.env.PORT || 5000;
app.listen(port,()=>{
  console.log(`NODE_ENV is ${process.env.NODE_ENV}`);
  console.log(`server is active port ${port}`);
});