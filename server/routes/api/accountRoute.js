const express = require('express')
const router = express.Router()

const { editAccount } = require('../../controller/accountController')

const { verifyToken } = require('../../middleware/verifyToken')

router.put('/edit-account', verifyToken, editAccount)

module.exports = router
