const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
app.use(express.json())
const routes = require('../routes/routes')

app.use('/api',routes);
app.use(function(req, res, next) {
    req.header("Access-Control-Allow-Origin", '*');
    req.header("Access-Control-Allow-Credentials", true);
    req.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    req.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

app.get('/', (req, res) => {
    res.status(200).send('Todo ok')
})

module.exports = { app, PORT }