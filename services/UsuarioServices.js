const Usuario = require('../models/Usuario')
const Cubo = require('../models/Cubo')

module.exports = {
    crearUsuario: (body) => {
        const usuario = new Usuario(body)
        return usuario.save()
    },
    findByUser: (user) => {
        const usuario = Usuario.findOne({ 'nombreUsuario': `${user.nombreUsuario}` })
        return usuario
    },
    addCubes :async function (user){
        const usuario = await this.findByUser(user);
        if(!usuario) throw new Error("User not found","The user was not found")

        const elNuevoCubo = new Cubo({imagen:user.imagen,
        nombre:user.nombre,
    costo:user.costo})
        const nuevoCubo = Usuario.updateOne({'nombreUsuario' : user.nombreUsuario},{
            $push:{cubos:elNuevoCubo
            }
        })
        return nuevoCubo;
    }
}