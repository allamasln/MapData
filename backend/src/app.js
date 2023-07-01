require('dotenv').config()

const cors = require('cors')
const express = require('express')

const app = express()

require('./startup/db')()

app.use(cors())

const swaggerUI = require('swagger-ui-express')
const swaggerDocs = require('./startup/docs')

app.use('/api/realtime', require('./routes/realtime'))
app.use('/api', require('./routes/constants'))

app.use('/', swaggerUI.serve, swaggerUI.setup(swaggerDocs))

const port = process.env.PORT || 3000

app.listen(port, () =>
	console.log(`SERVIDOR CONECTADO EN: http://localhost:${port}`)
)
