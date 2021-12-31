const express = require('express')
const router = express.Router()
const { fetchInitialProducts, 
        fetchAjaxProducts,
        fetchProductDetail,
        updateIsLiked } = require('../../controller/productController')

router.get('/',fetchInitialProducts)

router.post('/ajax',fetchAjaxProducts)

router.post('/product-detail',fetchProductDetail)

router.put('/product-detail/isLiked',updateIsLiked)

module.exports = router
