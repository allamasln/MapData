const { Schema, model } = require('mongoose')

module.exports = model(
	'Route',
	new Schema(
		{
			route_id: {
				type: String,
				required: true,
				unique: true,
			},
			route_long_name: {
				type: String,
				required: true,
			},
			agency_id: String,
			route_short_name: String,
			route_desc: String,
			route_type: String,
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
