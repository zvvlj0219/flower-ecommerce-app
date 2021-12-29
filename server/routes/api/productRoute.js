const express = require('express')
const router = express.Router()
const { fetchInitialProducts, fetchAjaxProducts } = require('../../controller/productController')

router.get('/',fetchInitialProducts)

router.post('/ajax',fetchAjaxProducts)

module.exports = router
