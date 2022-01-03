const express = require('express')
const router = express.Router()
const { signIn, register } = require('../../controller/authController')

router.post('/signin', signIn)

router.post('/register', register)

module.exports = router
