const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
app.use(express.json())
const routes = require('../routes/routes')

app.use('/api',routes);
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

app.get('/', (req, res) => {
    res.status(200).send('Todo ok')
})

module.exports = { app, PORT }