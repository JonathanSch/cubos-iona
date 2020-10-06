const jwt = require('jsonwebtoken')
module.exports = {
    createToken: (usuario, contrasena) => {
        const token =jwt.sign({ usuario: usuario, contrasena: contrasena }, process.env.DB_SECRET, { expiresIn: '1d' })
        return token
    }
}