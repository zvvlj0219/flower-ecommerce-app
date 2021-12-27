// import model
const Product = require('../model/productModel')

const fetchInitialProducts = async (req,res) => {
  try {
    console.log('fetchinitialproducts')
    const products = await Product.find({})
    res.status(200).json({result:products})
  } catch (error) {
    throw new Error()
  }
}

module.exports.fetchInitialProducts = fetchInitialProducts