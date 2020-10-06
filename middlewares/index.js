const jwt = require('jsonwebtoken')
module.exports = {
    verifyToken : (req,res,next) =>{
        if(!req.headers.authorization)  res.status(403).send({message : "Necesitas un token para continuar"})
        const {authorization} = req.headers;
        const splitted = authorization.split(' ');
        if(splitted[0] != "cubiona"){
            res.status(403).send({message : "Tu Bearer es incorrecto"})
        }
        const decode = jwt.verify(splitted[1] , process.env.DB_SECRET)
        req.decoded = decode;
        next()
    }
}