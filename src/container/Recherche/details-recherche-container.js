import React, { Component } from 'react'

import DetailsRechercheComponent from '../../component/recherche/details-recherche-component'
import DetailsAlbumRechercheComponent from '../../component/recherche/details-album-recherche-component'

class DetailsRechercheContainer extends Component {
    constructor (props) {
        super(props)
        this.state = {
            tracklistsObject: [],
            images: [],
            genres: [],
            year: '',
            title: ''
        }

        this.handleSaveTrackToPlayList = this.handleSaveTrackToPlayList.bind(this)
    }

    handleSaveTrackToPlayList (event) {
        const playlistId = document.getElementById('inputGroupSelect04').value
        const masterId = event.target.getAttribute('data-masterId')
        const dataUri = event.target.getAttribute('data-uri')
        const dataTitle = event.target.getAttribute('data-title')

        if (playlistId !== '-1') {
            fetch('http://localhost:8080/playlists/ajout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    playlist_id: playlistId,
                    uri: dataUri,
                    master_id: masterId
                })
            }).then(response => response.json())
                .then((result) => {
                    alert(JSON.stringify(result))
                    if (Object.prototype.hasOwnProperty.call(result, 'operation')) {
                        alert(result.operation)
                        if (result.operation === '200') {
                            alert('Track ajouter a la playList')
                        } else {
                            alert('Playlist inconnu')
                        }
                    } else {
                        alert('Propriete incomplet')
                    }
                })
        } else {
            alert('Veuillez choisir une playlist pour ajouter un track')
        }
    }

    componentDidMount () {
        const albumDetails = 'http://localhost:8080/recherches/' + this.props.masterId
        fetch(albumDetails, { method: 'GET' })
            .then(response => response.json())
            .then(responseJson => {
                const tracklists = responseJson.tracklist
                const videos = responseJson.videos
                const videosLength = videos.length

                const newTracklistsObject = []
                tracklists.map((trackItem, index) => {
                    if ((index + 1) <= videosLength) {
                        newTracklistsObject.push({ track: trackItem.title, uri: videos[index].uri })
                    } else {
                        newTracklistsObject.push({ track: trackItem.title, uri: 'null' })
                    }
                })

                // const tracklists = responseJson.tracklist
                this.setState({ tracklistsObject: newTracklistsObject, images: responseJson.images, genres: responseJson.genres, year: responseJson.year, title: responseJson.title })
            })
    }

    render () {
        return (
            <div>

                <DetailsRechercheComponent tracklists={this.state.tracklistsObject} masterIdToCoponent={this.props.masterId} />
                <DetailsAlbumRechercheComponent imageAlbum={(this.state.images.length > 0 ? this.state.images[0] : '')} genreAlbum={(this.state.genres.length > 0 ? this.state.genres[0] : 'Inconnu')} yearAlbum={this.state.year} titleAlbum={this.state.title} />

                <DetailsAlbumRechercheComponent imageAlbum={(this.state.images.length > 0 ? this.state.images[0].uri : '')} genreAlbum={(this.state.genres.length > 0 ? this.state.genres[0] : 'Inconnu')} yearAlbum={this.state.year} titleAlbum={this.state.title} />
                {this.state.tracklistsObject.map((item, index) => <DetailsRechercheComponent title={item.track} masterId={this.props.masterId} youtubeUri={item.uri} key={index} onClick={this.handleSaveTrackToPlayList} />)}

            </div>
        )
    }
}

export default DetailsRechercheContainer
