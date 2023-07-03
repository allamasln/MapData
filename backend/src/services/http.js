const axios = require('axios').default

let keysIndex = 0
const keys = [
	process.env.APISECRETKEY_1_F,
	process.env.APISECRETKEY_1_A,
	process.env.APISECRETKEY_1_1,
	process.env.APISECRETKEY_1_2,
]

const customAxiosApi = axios.create({
	baseURL: 'https://api.nationaltransport.ie/gtfsr/v2/',
	headers: {
		'Cache-Control': 'no-cache',
		'x-api-key': keys[keysIndex],
	},
})

function getkeysIndex() {
	console.log(keysIndex)
	return keys[keysIndex++]
}

module.exports = { customAxiosApi, getkeysIndex }
