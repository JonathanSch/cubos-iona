const Cubo = require('../models/Cubo')

module.exports = {
    create: (body) => {
        console.log(body)
        const cubo = new Cubo(body)
        return cubo.save()
    },
    find: () => Cubo.find(),
    findOne: (nombre) => Cubo.findOne(nombre)
}