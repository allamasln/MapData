const { Schema, model } = require('mongoose')

const stopSchema = new Schema({
	stop_id: {
		type: String,
		required: true,
	},
	stop_code: String,
	stop_name: String,
	stop_lat: String,
	stop_lon: String,
})

module.exports = model('Stop', stopSchema)
