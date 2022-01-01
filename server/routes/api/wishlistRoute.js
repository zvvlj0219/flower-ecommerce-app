const express = require('express')
const router = express.Router()

const { fetchWishlist } = require('../../controller/wishlistController')

router.post('/',fetchWishlist)

module.exports = router
