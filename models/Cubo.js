const mongoose = require('mongoose');

const CuboSchema = new mongoose.Schema({
    imagen: {
        type: String,
        required: true,
    },
    nombre: {
        type: String,
        required: true,
        unique: true
    },
    costo: {
        type: Number,
        required: true
    },
    


})

const Cubo = mongoose.model('Cubo', CuboSchema)

module.exports = Cubo