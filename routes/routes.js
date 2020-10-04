const express = require('express')
const router = express.Router();
const rutasCubos = require('./cuboRoutes')

router.use('/cubos', rutasCubos);
router.use("Access-Control-Allow-Origin", '*')

module.exports = router;