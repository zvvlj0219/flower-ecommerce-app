const express = require('express')
const router = express.Router()

const { fetchWishlist, updateWishlist } = require('../../controller/wishlistController')

router.post('/', fetchWishlist)

router.put('/updateWishlist', updateWishlist)

module.exports = router
