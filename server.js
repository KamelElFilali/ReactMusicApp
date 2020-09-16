'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const readDocumentControleur = require('./src/server/controleur/readDocumentControleur')
const dao = require('./src/server/modelDB/dao')

const PORT = 8080
const HTTP_OK = 200
const CONTENT_TYPE_JSON = 'application/json'
const CONTENT_TYPE_HTML = 'text/html'

const app = express()
app.use(express.static('dist'))
app.use(express.static('src/images'))

// parse application/json
app.use(bodyParser.json())

// CORS for development
// https://enable-cors.org/server_expressjs.html
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})

app.get('/recherches', function (request, response) {
    const searchJsonData = readDocumentControleur.readDocument('./src/server/test/search.json')
    response.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
    response.end(JSON.stringify(searchJsonData, null, 4))
})

app.get('/recherches/:details_album', function (request, response) {
    const detailsJsonData = readDocumentControleur.readDocument('./src/server/test/details_album.json')
    response.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
    response.end(JSON.stringify(detailsJsonData, null, 4))
})

app.get('/playlists/tracks/:playlist_id', function (request, response) {
    const playlist_id = request.params.playlist_id
    const playlistTracks = [
        { playlist_id: playlist_id, title: 'Le Théâtre Du Chêne Noir', uri: 'null' },
        { playlist_id: playlist_id, title: 'Chene Noir - Le Chant du Cirque', uri: 'https://www.youtube.com/watch?v=RtkycPH9_GY' },
        { playlist_id: playlist_id, title: 'Chene Noir - Le Numero de Miss Madona', uri: 'https://www.youtube.com/watch?v=3UUcbC1J7ik' },
        { playlist_id: playlist_id, title: 'La rive du Sud - La nouvelle orleans', uri: 'https://www.youtube.com/watch?v=3UUcbC1J7ik' }
    ]
    response.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
    response.end(JSON.stringify(playlistTracks, null, 4))
})

app.get('/playlists/genres', function (request, response) {
    const serchJsonData = [
        { id: '0', type: 'Default' },
        { id: '1', type: 'Acoustique' },
        { id: '2', type: 'Classique' },
        { id: '3', type: 'Country' },
        { id: '4', type: 'Metal' },
        { id: '5', type: 'Pop/Dance' },
        { id: '6', type: 'Rock' }
    ]

    response.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
    response.end(JSON.stringify(serchJsonData, null, 4))
})

app.post('/playlists/ajout', function (request, response) {
    const bodyJsonValue = request.body
    let reponseJSON = { operation: '202' }
    const propertites = ['playlist_id', 'title', 'uri', 'master_id']

    try {
        propertites.map(property => {
            if (!Object.prototype.hasOwnProperty.call(bodyJsonValue, property)) {
                throw new Error('Property not found')
            }
        })
        response.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
        reponseJSON = { operation: '202' }
        response.end(JSON.stringify(reponseJSON, null, 4))
    } catch (err) {
        reponseJSON = { erreur: '404' }
        response.end(JSON.stringify(reponseJSON, null, 4))
    }
})

app.listen(PORT, function () {
    console.log('Server listening on: http://localhost:%s', PORT)
})
