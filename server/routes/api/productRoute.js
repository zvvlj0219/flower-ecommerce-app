const express = require('express');
const router = express.Router();

const { fetchInitialProucts} = require('../../controller/productController')

router.get('/',fetchInitialProucts)

module.exports = router;