const express = require('express')
const router = express.Router()

const { editAccount } = require('../../controller/accountController')

router.put('/edit-account', editAccount)

module.exports = router
