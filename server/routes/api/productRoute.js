const express = require('express')
const router = express.Router()
const { fetchInitialProducts, 
        fetchAjaxProducts,
        fetchProductDetail } = require('../../controller/productController')

router.get('/',fetchInitialProducts)

router.post('/ajax',fetchAjaxProducts)

router.post('/product-detail',fetchProductDetail)

module.exports = router
