const express = require('express')

const mongoose = require('mongoose')

const Route = require('../models/route')
const Trip = require('../models/trip')
const Shape = require('../models/shape')
const StopTime = require('../models/stopTime')
const Stop = require('../models/stop')
const router = express.Router()

/**
 * @openapi
 * /api/routes:
 *   get:
 *     tags: [Routes]
 *     description: Actualización en tiempo real sobre el progreso de un vehículo a lo largo de un viaje.
 *
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */

router.get('/routes', async (req, res) => {
	const routes = await Route.find().exec()
	res.json(routes)
})

/**
 * @openapi
 * /api/routes/{routeId}:
 *   get:
 *     tags: [Routes]
 *     description: Actualización en tiempo real sobre el progreso de un vehículo a lo largo de un viaje.
 *
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */

router.get('/routes/:routeId', async (req, res) => {
	const route_id = req.params.routeId

	const route = await Route.findOne({ route_id }).exec()
	res.json(route)
})

/**
 * @openapi
 * /api/trips/route/{routeId}:
 *   get:
 *     tags: [Trips]
 *     description: Viajes para cada ruta. Un viaje es una secuencia de dos o más paradas que ocurre durante un período específico.
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */

router.get('/trips/route/:routeId', async (req, res) => {
	const route_id = req.params.routeId

	let trips = await Trip.find({ route_id }).exec()

	res.json(trips)
})

/**
 * @openapi
 * /api/shapes/{tripId}:
 *   get:
 *     tags: [Shapes]
 *     description: Viajes para cada ruta. Un viaje es una secuencia de dos o más paradas que ocurre durante un período específico.
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */

router.get('/shapes/:tripId', async (req, res) => {
	const trip_id = req.params.tripId

	const { shape_id } = await Trip.findOne({ trip_id }).exec()

	const shapes = await Shape.find({ shape_id }).exec()

	res.json(shapes)
})

/**
 * @openapi
 * /api/stops/{stopId}:
 *   get:
 *     tags: [Stops]
 *     description: Define las reglas para asignar las rutas de viaje de los vehículos, también conocido como alineamientos de rutas.
 *
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */

router.get('/stops/:stopId', async (req, res) => {
	const stop_id = req.params.stopId
	const stop = await Stop.findOne({ stop_id }, { _id: 0 }).lean().exec()

	res.json(stop)
})

/**
 * @openapi
 * /api/stops/trip/{tripId}:
 *   get:
 *     tags: [Stops]
 *     description: Define las reglas para asignar las rutas de viaje de los vehículos, también conocido como alineamientos de rutas.
 *
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */

router.get('/stops/trip/:tripId', async (req, res) => {
	const trip_id = req.params.tripId

	const stopTimes = await StopTime.find({ trip_id })
		.populate('stop')
		.lean()
		.exec()
	stopTimes.map((stopTime) => {
		delete stopTime._id
		delete stopTime.stop._id
		delete stopTime.stop_id
	})

	res.json(stopTimes)
})

module.exports = router
