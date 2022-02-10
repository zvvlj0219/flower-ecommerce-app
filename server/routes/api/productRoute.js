const express = require('express')
const router = express.Router()
const { fetchInitialProducts, 
        fetchAjaxProducts,
        fetchProductDetail,
        fetchAllProducts,
        uploadImage,
        uploadProduct } = require('../../controller/productController')

const { upload } = require('../../middleware/upload')

router.get('/', fetchInitialProducts)

router.post('/ajax',fetchAjaxProducts)

router.post('/product-detail',fetchProductDetail)

router.get('/all-products',fetchAllProducts)

router.post('/upload-image', upload.array('upload-input-name', 4), uploadImage)

router.post('/upload-product', uploadProduct)

module.exports = router
