const express = require('express')
const router = express.Router()
const { listenAuth, signIn, register, takeOver } = require('../../controller/authController')

const { verifyToken } = require('../../middleware/verifytoken')

router.post('/listenAuth',verifyToken,  listenAuth)

router.post('/signin', signIn)

router.post('/takeOver', takeOver)

router.post('/register', register)

module.exports = router
