const mongoose = require('mongoose')
const DB_URI = process.env.DB_URI
mongoose.connect(DB_URI, (err) => {
    err ? console.error(err) : console.log(`Database connected`)
})