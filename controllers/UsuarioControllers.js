const services = require('../services/UsuarioServices')

module.exports = {
    crearUsuario : async(req,res) => {
        const usuario = req.body
        try {
            const usuariocreado = await services.crearUsuario(usuario)
            res.send(usuariocreado).status(201)
        } catch (error) {
            res.send(error).status(400)
        }
    }
}