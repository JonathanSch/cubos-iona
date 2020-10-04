const express = require('express')
const router = express.Router();
const rutasCubos = require('./cuboRoutes')

router.use('/cubos',rutasCubos);

module.exports = router;