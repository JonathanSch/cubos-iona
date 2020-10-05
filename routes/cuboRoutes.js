const express = require('express')
const router = express.Router()
const controllers = require('../controllers/CuboControllers')

router.post('/crear', controllers.create)
router.get('/encontrar', controllers.find)
router.post('/encontraruno', controllers.findOne)
module.exports = router