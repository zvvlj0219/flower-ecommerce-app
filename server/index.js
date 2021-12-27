const express = require('express');
const cors = require('cors');

//load .env
const dotenv = require('dotenv');
dotenv.config();

//connect to mongodb atlas
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI,{
  useUnifiedTopology : true,
  useNewUrlParser : true,
})
.then(()=>console.log('connected mongodb atlas'))
.catch(error=>console.log(error))

//import controller routes
// const productController = require('./controller/productController')

//Express initialize
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

//initial route
const Product = require('./model/productModel')
app.get('/api',async (req,res) => {
  try {
    console.log('fetchinitialproducts')
    const products = await Product.find({})
    res.status(200).json({result:products})
  } catch (error) {
    console.log(error)
    throw new Error()
  }
})
//routes middleware

//handle production

//server 
const port = process.env.PORT || 5000;
app.listen(port,()=>{
  console.log(`NODE_ENV is ${process.env.NODE_ENV}`);
  console.log(`server is active port ${port}`);
});