// import model
const Product = require('../model/productModel')

const fetchInitialProducts = async (req, res) => {
  try {
    const initialProducts = await Product.find()
    .sort({createdAt:1})
    .limit(3)
    res.status(200).json({ result: initialProducts })
  } catch (error) {
    console.log(error)
    throw new Error()
  }
}

const fetchAjaxProducts = async (req, res) => {
  try {
    const ajaxProducts = await Product.find({
      _id: {
        $nin: req.body._id
      }
    })
    .limit(6)
    console.log(ajaxProducts)
    res.status(200).json({ result: ajaxProducts })
  } catch (error) {
    console.log(error)
    throw new Error()
  }
}

module.exports.fetchInitialProducts = fetchInitialProducts
module.exports.fetchAjaxProducts = fetchAjaxProducts