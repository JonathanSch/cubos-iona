const services = require('../services/UsuarioServices')
const bcrypt = require('bcrypt')
const utils = require('../utils')
module.exports = {
    crearUsuario: async (req, res) => {
        const usuario = req.body
        try {
            const usuariocreado = await services.crearUsuario(usuario)
            res.send(usuariocreado).status(201)
        } catch (error) {
            res.send(error).status(400)
        }
    },
    login: async (req, res) => {
        try {
            const resultado = await services.findByUser(req.body)
            const match = await bcrypt.compare(req.body.password, resultado.password);
            if (match) {
                const token = utils.createToken(resultado.nombreUsuario,resultado.password);
                res.status(200).send({ message: ' Contrasena correcta', tuToken: token})
            }
            else {
                res.status(200).send({ message: ' Contrasena incorrecta' })
            }

        } catch (error) {
            res.status(400).send(error)
        }
    }
}