const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
app.use(express.json())
const routes = require('../routes/routes')

app.use('/api',routes);

app.get('/', (req, res) => {
    res.status(200).send('Todo ok')
})

module.exports = { app, PORT }