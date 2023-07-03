const { Schema, model } = require('mongoose')

const tripSchema = new Schema(
	{
		trip_id: {
			type: String,
			required: true,
			unique: true,
		},
		route_id: {
			type: String,
			required: true,
		},
		service_id: String,
		trip_headsign: String,
		trip_short_name: String,
		direction_id: String,
		block_id: { type: String, required: true },
		shape_id: { type: String, required: true },
	},
	{
		toJSON: {
			virtuals: true,
		},
	}
)

tripSchema.virtual('shapes', {
	ref: 'Shape',
	localField: 'shape_id',
	foreignField: 'shape_id',
})

module.exports = model('Trip', tripSchema)
