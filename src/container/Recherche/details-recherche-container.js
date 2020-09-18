import React, { Component } from 'react'

import DetailsRechercheComponent from '../../component/recherche/details-recherche-component'
import DetailsAlbumRechercheComponent from '../../component/recherche/details-album-recherche-component'
class DetailsRechercheContainer extends Component {
    constructor (props) {
        super(props)
        alert('cons')
        this.state = {
            tracklistsObject: [],
            images: [],
            genres: [],
            year: '',
            title: ''

        }
    }

    componentDidMount () {
        const albumDetails = 'http://localhost:8080/recherches/' + this.props.masterId
        fetch(albumDetails, { method: 'GET' })
            .then(response => response.json())
            .then(responseJson => {
                const videos = responseJson.videos
                const tracklists = responseJson.tracklist
                let newTracklistsObject = []
                tracklists.map(trackItem => {
                    const trackTitle = trackItem.title

                    newTracklistsObject = videos.map(videoItem => {
                        const videoTitle = videoItem.title
                        if (videoTitle.includes(trackTitle)) {
                            return {
                                track: trackTitle,
                                uri: videoItem.uri
                            }
                        }
                    })
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
            </div>
        )
    }
}

export default DetailsRechercheContainer
