const services = require('../services/UsuarioServices')

module.exports = {
    crearUsuario : async(req,res) => {
        const usuario = req.body
        try {
            services.crearUsuario(req.body)
            res.send(usuario).status(201)
        } catch (error) {
            res.send(error).status(400)
        }
    }
}