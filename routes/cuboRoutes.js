const express = require('express')
const router = express.Router()
const controllers = require('../controllers/CuboControllers')
const middleware = require('../middlewares')

router.use(middleware.verifyToken)

router.post('/crear', controllers.create)
router.get('/encontrar', controllers.find)
router.get('/encontraruno/:nombre', controllers.findOne)
module.exports = router