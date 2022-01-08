const express = require('express')
const router = express.Router()

const { updateWishlist } = require('../../controller/wishlistController')

router.put('/updateWishlist', updateWishlist)

module.exports = router
