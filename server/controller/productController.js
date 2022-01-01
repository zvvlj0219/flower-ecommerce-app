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

const fetchProductDetail = async (req, res) => {
  try {
    console.log(req.body._id)
    const detailData = await Product.findById(req.body._id)
    console.log([detailData])
    res.status(200).json({ result: [detailData] })
  } catch (error) {
    console.log(error)
    throw new Error()
  }
}

const updateIsLiked = async (req, res) => {
  try {
    const {_id, isLiked } = req.body
    const updatedData = await Product.findByIdAndUpdate(
      _id,
      { isLiked },
      { returnDocument: 'after' }
    )
    res.status(200).json({ result: [updatedData] })
  } catch (error) {
    console.log(error)
    throw new Error()
  }
}

const updateIsCartIn = async (req, res) => {
  try {
    const {_id } = req.body
    const updatedData = await Product.findByIdAndUpdate(
      _id,
      { isCartIn: true },
      { returnDocument: 'after' }
    )
    res.status(200).json({ result: [updatedData] })
  } catch (error) {
    console.log(error)
    throw new Error()
  }
}

module.exports.fetchInitialProducts = fetchInitialProducts
module.exports.fetchAjaxProducts = fetchAjaxProducts
module.exports.fetchProductDetail = fetchProductDetail
module.exports.updateIsLiked = updateIsLiked
module.exports.updateIsCartIn = updateIsCartIn