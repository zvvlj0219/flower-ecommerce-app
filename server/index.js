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

//import  routes
const productRoute = require('./routes/api/productRoute')

//Express initialize
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

//routes middleware
app.use('/api',productRoute)

//handle production

//server 
const port = process.env.PORT || 5000;
app.listen(port,()=>{
  console.log(`NODE_ENV is ${process.env.NODE_ENV}`);
  console.log(`server is active port ${port}`);
});