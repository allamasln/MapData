const express = require('express')
const fetch = require('node-fetch')

require('dotenv').config()


let safetyTime = false 

const app = express();
let keysIndex = 0
const keys = [process.env.APISECRETKEY_1_F, process.env.APISECRETKEY_1_A]


async function fetchData() {
    const response = await fetch('https://api.nationaltransport.ie/gtfsr/v2/Vehicles?format=json', {
        method: 'GET',
        // Request headers
        headers: {
            'Cache-Control': 'no-cache',
            'x-api-key': keys[keysIndex],}})

    if(response.status > 300) {
        keysIndex++ 

        if(keysIndex === keys.length) keysIndex = 0

        fetchData()

    }



    const data = await response.json();

    return data
}

app.get('/ping', async(req, res) => {
    keysIndex++ 

    if(keysIndex === keys.length) keysIndex = 0

if(safetyTime) return res.status(400).json({error: 'Esperando tiempo de seguridad'})

safetyTime = true

setTimeout(() => {
    safetyTime = false
}, 3000)



const data = await fetchData()

console.log('Usaste la ' + keysIndex)
res.json(data)
                                         
})


const port = process.env.PORT || 3000

app.listen(port, () => console.log(`SERVIDOR CONECTADO EN: http://localhost:${port}`))