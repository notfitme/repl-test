const express = require('express')
const https = require('https')
const fs = require('fs');
const path = require('path');
const app = express()
const file = fs.readFileSync(path.join(__dirname,'pinia.js'), "utf8")

app.get('/pinia.es.js', (req, res) => {
    res.set('access-control-allow-origin','*')
    res.set('content-type', 'application/javascript; charset=utf-8')
    setTimeout(() => {
        res.send(Buffer.from(file))
    }, 2000)
})


app.listen(3303, () => {
    console.log('start server')
})