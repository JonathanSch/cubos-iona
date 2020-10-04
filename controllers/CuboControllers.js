const CuboServices = require('../services/CuboServices');
const services = require('../services/CuboServices')

module.exports = {
    create: async (req, res) => {
        const cubo = req.body;
        try {
            const creado = await CuboServices.create(cubo);
            res.send(creado).status(201)
        } catch (error) {
            res.send(error).status(400)
        }
    },
    find: async (req, res) => {
        try {
            const coleccion = await CuboServices.find()
            res.send(coleccion).status(200)
        } catch (error) {
            res.send(error).status(400)
        }
    },
    findOne: async (req, res) => {
        try {
            const cubo = await CuboServices.findOne({ nombre: req.body.nombre })
            res.send(cubo).status(200)
        } catch (error) {
            res.send(error).status(400);
        }
    }
}