const express = require('express')
const router = express.Router()
const controllers = require('../controllers/CuboControllers')

router.post('/crear', controllers.create)
router.get('/encontrar', controllers.find)
router.get('/encontraruno/:nombre', controllers.findOne)
module.exports = router