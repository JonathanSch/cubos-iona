const express = require('express')
const router = express.Router();
const controllers = require('../controllers/UsuarioControllers')

router.post('/crear', controllers.crearUsuario);
router.get('/login',controllers.login)

module.exports = router