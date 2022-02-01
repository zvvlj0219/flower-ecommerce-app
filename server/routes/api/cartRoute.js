const express = require('express')
const router = express.Router()

const { updateCart, orderConfirm } = require('../../controller/cartController')

router.put('/updateCart', updateCart)

router.post('/orderConfirm', orderConfirm)

module.exports = router