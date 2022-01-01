const express = require('express')
const router = express.Router()
const { fetchInitialProducts, 
        fetchAjaxProducts,
        fetchProductDetail,
        updateIsLiked,
        updateIsCartIn } = require('../../controller/productController')

router.get('/',fetchInitialProducts)

router.post('/ajax',fetchAjaxProducts)

router.post('/product-detail',fetchProductDetail)

router.put('/product-detail/isLiked',updateIsLiked)

router.put('/product-detail/isCartIn',updateIsCartIn)

module.exports = router
