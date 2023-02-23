const express = require('express')
const https = require('https')

const app = express()


app.get('/pinia.es.js', (req, res) => {
    res.set('access-control-allow-origin','*')
    res.set('content-type', 'application/javascript; charset=utf-8')
    https.get('https://esm.sh/pinia@2.0.32', (resp) => {
        let data = ''
        resp.on('data', (chumk) => {
            data += chumk
        })
        resp.on('end', () => {
            
                setTimeout(() => {
                    res.send(Buffer.from(data))
                }, Math.random()*4000)
        })
    }).on('error', (error) => {

    })
})


app.listen(3303, () => {
    console.log('start server')
})