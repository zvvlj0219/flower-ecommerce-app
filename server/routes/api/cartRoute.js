const express = require('express')
const router = express.Router()

const { updateCart } = require('../../controller/cartController')

router.put('/updateCart', updateCart)

module.exports = router