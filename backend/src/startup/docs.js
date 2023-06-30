const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')

const swaggerOptions = {
	swaggerDefinition: {
		info: {
			version: '1.0.0',
			title: 'Transportes Irlanda',
			description: 'API de vehículos de transporte público en Irlanda ',
		},
	},
	apis: ['./src/routes/*.js'],
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)

module.exports = swaggerDocs
