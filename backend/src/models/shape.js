const { Schema, model } = require('mongoose')

module.exports = model(
	'Shape',
	new Schema(
		{
			shape_id: {
				type: String,
				required: true,
			},
			shape_pt_lat: {
				type: String,
				required: true,
			},
			shape_pt_lon: {
				type: String,
				required: true,
			},
			shape_pt_sequence: {
				type: String,
				required: true,
			},
			shape_dist_traveled: String,
		},
		{
			toJSON: {
				transform: (_, ret) => {
					delete ret._id && delete ret.__v
				},
			},
		}
	)
)
