'use strict'

const express = require('express')

const app = express()
app.use(express.static('dist')) /// middleWare

app.use(function (req, res, next) { // La fonction middleware est exécutée à chaque fois que l’application reçoit une demande.
    console.log('Time:', Date.now())
    next()
})

const PORT = 8080
const HTTP_OK = 200
const HTTP_SERVER_ERROR = 500
const CONTENT_TYPE_JSON = 'application/json'

const USERS = []

app.get('/users', function (request, response) {
    response.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
    response.end(JSON.stringify(USERS, null, 4))
})

app.listen(PORT, function () {
    console.log('Server listening on: http://localhost:%s', PORT)
})
