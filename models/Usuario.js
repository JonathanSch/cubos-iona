const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const UsuarioSchema = new mongoose.Schema({
    nombreUsuario: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})
UsuarioSchema.pre('save', function (next) {
    const usuario = this;
    if (!usuario.isModified('password')) return next();

    bcrypt.genSalt(10, (err, salt) => {
        if (err) return next(err);

        bcrypt.hash(usuario.password, salt, (error, hash) => {
            if (error) return next(error);

            usuario.password = hash
            return next();
        })
    })
})

const Usuario = mongoose.model('Usuario', UsuarioSchema)

module.exports = Usuario