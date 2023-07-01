const { Schema, model } = require('mongoose')

const stopTimeSchema = new Schema(
	{
		trip_id: {
			type: String,
			required: true,
		},
		arrival_time: String,
		departure_time: String,
		stop_id: String,
		stop_sequence: String,
		stop_headsign: String,
		pickup_type: String,
		drop_off_type: String,
		timepoint: String,
	},
	{
		toJSON: {
			virtuals: true,
		},
	}
)

stopTimeSchema.virtual('stop', {
	ref: 'Stop',
	localField: 'stop_id',
	foreignField: 'stop_id',
	justOne: true,
})

module.exports = model('stop-times', stopTimeSchema)
