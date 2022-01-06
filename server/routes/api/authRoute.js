const express = require('express')
const router = express.Router()
const { listenAuth, signIn, register } = require('../../controller/authController')

router.post('/listenAuth', listenAuth)

router.post('/signin', signIn)

router.post('/register', register)

module.exports = router
