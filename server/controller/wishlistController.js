const Product = require('../model/productModel')

const fetchWishlist = async (req, res) => {
  try {
    const { list } = req.body
    const wishlist = await Product.find({
      _id: list
    })
    console.log(wishlist)
    res.status(200).json({ result: wishlist })
  } catch (error) {
    console.log(error)
    throw new Error()
  }
}

module.exports.fetchWishlist = fetchWishlist
