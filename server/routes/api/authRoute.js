const express = require('express')
const router = express.Router()
const { listenAuth, signIn, testLogin, register, takeOver } = require('../../controller/authController')

const { verifyToken } = require('../../middleware/verifytoken')

router.post('/listenAuth',verifyToken,  listenAuth)

router.post('/signin', signIn)

router.get('/testLogin', testLogin)

router.post('/takeOver', takeOver)

router.post('/register', register)

module.exports = router
