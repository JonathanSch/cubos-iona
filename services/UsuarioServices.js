const Usuario = require('../models/Usuario')
module.exports = {
    crearUsuario: (body) => {
        const usuario = new Usuario(body)
        return usuario.save()
    },
    findByUser: (user) => {
        const usuario = Usuario.findOne({ 'nombreUsuario': `${user.nombreUsuario}` })
        return usuario
    }
}