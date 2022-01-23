// import model
const Product = require('../model/productModel')

const fetchInitialProducts = async (req, res) => {
  try {
    const initialProducts = await Product.find()
    .sort({createdAt:1})
    .limit(4)
    res.status(200).json({ result: initialProducts })
  } catch (error) {
    console.log(error)
    throw new Error()
  }
}

const fetchAjaxProducts = async (req, res) => {
  try {
    const { _id } = req.body
    console.log(_id)
    const ajaxProducts = await Product.find({
      _id: {
        $nin: _id
      }
    })
    .limit(6)
    res.status(200).json({ result: ajaxProducts })
  } catch (error) {
    console.log(error)
    throw new Error()
  }
}

const fetchProductDetail = async (req, res) => {
  try {
    const { _id } = req.body
    const detailData = await Product.findById(_id)
    res.status(200).json({ result: [detailData] })
  } catch (error) {
    console.log(error)
    throw new Error()
  }
}


module.exports.fetchInitialProducts = fetchInitialProducts
module.exports.fetchAjaxProducts = fetchAjaxProducts
module.exports.fetchProductDetail = fetchProductDetail