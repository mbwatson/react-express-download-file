const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const fs = require('fs')

const DATA_DIR = `${ __dirname }/data/`

// CORS
app.use(cors())

// Config
const PORT = process.env.API_PORT || 3030

// Tell me it's working!
app.listen(PORT, () => {
    console.log(`The API has its ear eagerly pressed up against port ${PORT}.\n`)
    console.log(`Ready to send files from ${ DATA_DIR }.`)
})

// Custom Middleware - Route-Logging
const routeLogger = (req, res, next) => {
    console.log(`HIT: ${ req.path }`)
    next()
}
app.use(routeLogger)

// Download route
app.use('/download', (req, res) => {
    const filename = DATA_DIR + 'sample.csv'
    console.log(`Initiating download: "${ filename }"...`)
    res.status(200).download(filename)
    console.log(`Download sent.`)
})
