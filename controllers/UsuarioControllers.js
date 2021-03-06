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
                const token = utils.createToken(resultado.nombreUsuario, resultado.password);
                res.status(200).send({ message: ' Contraseña correcta', tuToken: token })
            }
            else {
                res.status(200).send({ message: ' Contraseña incorrecta' })
            }

        } catch (error) {
            res.status(400).send(error)
        }
    },
    addCubes: async (req, res) => {
        try {
            const cubo = await services.addCubes(req.body)
            res.send(cubo).status(200);
        } catch (error) {
            res.send({ error }).status(400);
        }
    },
    getCubes: (req, res) => {
        try {
            const cubosEncontrados = services.findByUser(req.params);
            res.send(cubosEncontrados.schema).status(200);

        }
        catch (error) {
            console.log(error)
            res.send(error).status(400);
        }
    }
}