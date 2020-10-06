const express = require('express')
const router = express.Router();
const controllers = require('../controllers/UsuarioControllers')

router.post('/crear', controllers.crearUsuario);
router.post('/login', controllers.login)

module.exports = router