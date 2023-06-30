const express = require('express')

const router = express.Router()

/**
 * @openapi
 * /api/trips:
 *   get:
 *     tags: [Constants]
 *     description: Viajes para cada ruta. Un viaje es una secuencia de dos o más paradas que ocurre durante un período específico.
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */

router.get('/trips', async (req, res) => {
	res.json('test')
})

/**
 * @openapi
 * /api/routes:
 *   get:
 *     tags: [Constants]
 *     description: Actualización en tiempo real sobre el progreso de un vehículo a lo largo de un viaje.
 *
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */

router.get('/routes', async (req, res) => {
	res.send('2')
})

/**
 * @openapi
 * /api/routes:
 *   get:
 *     tags: [Constants]
 *     description: Rutas de transporte público. Una ruta es un grupo de viajes que se muestra a los pasajeros como un solo servicio.
 *
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */

router.get('/routes', async (req, res) => {
	res.send('2')
})

/**
 * @openapi
 * /api/stops:
 *   get:
 *     tags: [Constants]
 *     description: Define las paradas en las que los vehículos recogen o dejan pasajeros. También indica las estaciones y las entradas de las estaciones.
 *
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */

router.get('/stops', async (req, res) => {
	res.send('2')
})

/**
 * @openapi
 * /api/shapes:
 *   get:
 *     tags: [Constants]
 *     description: Define las reglas para asignar las rutas de viaje de los vehículos, también conocido como alineamientos de rutas.
 *
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */

router.get('/shapes', async (req, res) => {
	res.send('2')
})

module.exports = router
