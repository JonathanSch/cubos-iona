require('./database')
const { app, PORT } = require('./server')
app.listen(PORT, (err) => {
    err ? console.error(err) : console.log(`Running on Port ${PORT}`)
})