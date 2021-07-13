const express = require('express')
require('./schema/mongoose')
const cors = require('cors')

const config = require('./config')
const api = require('./routes/api')
const port = config.PORT
const app = express()

// allow cors
app.use(cors())
// mount the router on the app
app.use('/api', api)
app.listen(port, () => {
    console.log(`Listening at port ${port}`)
}).on('error', (error) => {
    console.log(error)
})