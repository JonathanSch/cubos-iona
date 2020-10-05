const Usuario = require('../models/Usuario')
module.exports = {
    crearUsuario: (body) => {
        const usuario = new Usuario(body)
        return usuario.save()
    }
}