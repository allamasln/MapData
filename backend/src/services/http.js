const axios = require('axios').default

let keysIndex = 0
const keys = [process.env.APISECRETKEY_1_F, process.env.APISECRETKEY_1_A]

const customAxiosApi = axios.create({
	baseURL: 'https://api.nationaltransport.ie/gtfsr/v2/',
	headers: {
		'Cache-Control': 'no-cache',
		'x-api-key': keys[keysIndex],
	},
})

const globalConfig = {
	retry: 3,
	retryDelay: 1000,
}

customAxiosApi.interceptors.response.use(
	(response) => response,
	(error) => {
		const { config } = error

		if (!config || !config.retry) {
			return Promise.reject(error)
		}
		config.retry -= 1
		const delayRetryRequest = new Promise((resolve) => {
			setTimeout(() => {
				console.log('retry the request', config.url)
				resolve()
			}, config.retryDelay || 1000)
		})
		return delayRetryRequest.then(() => customAxiosApi(config))
	}
)

module.exports = { customAxiosApi, globalConfig }
