const express = require('express')
const router = express.Router();
const controllers = require('../controllers/UsuarioControllers')

router.post('/crear', controllers.crearUsuario);

module.exports = router