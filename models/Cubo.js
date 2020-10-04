const mongoose = require('mongoose');

const CuboSchma = new mongoose.Schema({
    nombre:{
        type:String,
        required:true,
        unique:true
    },
    costo:{
        type:Number,
        required:true
    }
})

const Cubo = mongoose.model('Cubo',CuboSchma)

module.exports = Cubo