const express = require('express')
const fetch = require('node-fetch')

const router = express.Router()

const { customAxiosApi, globalConfig } = require('../services/http')

/**
 * @openapi
 * /api/realtime/vehicles:
 *   get:
 *     tags: [Real Time]
 *     description: Devuelve las posiciónes en tiempo real de los vehículo específicos que están circulando en la red de transporte.
 *
 *     responses:
 *       200:
 *         description: Devuelve array de objetos con las atualizaciones de los viajes
 */

router.get('/vehicles', async (req, res) => {
	const { data } = await customAxiosApi.get(
		'/vehicles?format=json',
		globalConfig
	)

	res.json(data.entity)
})

/**
 * @openapi
 * /api/realtime/trip-updates:
 *   get:
 *     tags: [Real Time]
 *     description: Actualización en tiempo real sobre el progreso de un vehículo a lo largo de un viaje.
 *
 *     responses:
 *       200:
 *         description: Devuelve array de objetos con las atualizaciones de los viajes
 */

router.get('/trip-updates', async (req, res) => {
	const { data } = await customAxiosApi.get(
		'/TripUpdates?format=json',
		globalConfig
	)

	res.json(data.entity)
})

module.exports = router
