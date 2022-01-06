const express = require('express')
const router = express.Router()
const { fetchInitialProducts, 
        fetchAjaxProducts,
        fetchProductDetail } = require('../../controller/productController')
const { verifyToken } = require('../../middleware/verifytoken')

router.get('/', fetchInitialProducts)

router.post('/ajax',fetchAjaxProducts)

router.post('/product-detail',fetchProductDetail)

// router.put('/product-detail/isLiked',updateIsLiked)
//移動させる

// router.put('/product-detail/isCartIn',updateIsCartIn)

module.exports = router
