const express = require('express')
const router = express.Router()

const { updateInfo } = require('../../controller/accountController')

const { verifyToken } = require('../../middleware/verifyToken')

router.put('/account/updateInfo', verifyToken, updateInfo)

module.exports = router
