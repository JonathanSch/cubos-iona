const express = require('express')
const router = express.Router();
const controllers = require('../controllers/UsuarioControllers');
const Usuario = require('../models/Usuario');
const User = require('../models/Usuario')

router.post('/crear', controllers.crearUsuario);
router.post('/login', controllers.login)
router.post('/cubo',controllers.addCubes)
router.get('/encontrar/:nombreUsuario',async(req,res)=>{
    try{
        const usuarioEncontrado =  await Usuario.findOne({nombreUsuario:`${req.params.nombreUsuario}`});
        res.send(usuarioEncontrado.cubos).status(200);
    }
    catch(error){
        console.log(error)
        res.status(400).send(error)
    }
})


module.exports = router