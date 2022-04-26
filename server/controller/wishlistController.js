const mongoose = require('mongoose');

// import model
const Product = require('../model/productModel')
const Auth = require('../model/authModel')

const fetchWishlist = async (req, res) => {
  try {
    const { _id } = req.body

    const allProducts = await Product.find()

    const wishlist = allProducts.filter(el => {
      return _id.find(id => {
        const wishlistId = new mongoose.Types.ObjectId(id)
        console.log(wishlistId)
        console.log(el._id)
        console.log(wishlistId === el._id)
        return wishlistId === el._id
      })
    })

    console.log(wishlist)
      
    res.status(200).json({ result: wishlist })
  } catch (error) {
    console.log(error)
  }
}

const updateWishlist = async (req, res) => {
  try {
    const { _id, wishlist } = req.body

    const user = await Auth.findByIdAndUpdate(
      _id,
      { wishlist },
      { returnDocument : 'after'}
    )
    .select(['_id','email','username','cart','wishlist','information'])

    res.status(200).json({ user })
  } catch (error) {
    console.log(error)
  }
}

module.exports.fetchWishlist = fetchWishlist
module.exports.updateWishlist = updateWishlist
