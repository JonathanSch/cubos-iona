const express = require('express')
const router = express.Router();
const rutasCubos = require('./cuboRoutes')
const rutasUsuarios = require('./UsuarioRoutes')

router.use('/cubos', rutasCubos);
router.use('/usuario', rutasUsuarios)

module.exports = router;