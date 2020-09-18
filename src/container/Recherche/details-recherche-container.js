import React, { Component } from 'react'

import DetailsRechercheComponent from '../../component/recherche/details-recherche-component'
<<<<<<< HEAD
const MUSIC = [{

    playlist_id: '2',
    title: 'Le Numéro De Miss Madona',
    uri: 'https://www.youtube.com/watch?v=3UUcbC1J7ik',
    master_id: 703570
}]

=======
import DetailsAlbumRechercheComponent from '../../component/recherche/details-album-recherche-component'
>>>>>>> d6c1e2494955c2f2d2810eaef1b67d7dc0c6a8eb
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
        this.handelOnclickListner = this.handelOclickListner(this)
    }

<<<<<<< HEAD
    handelOclickListner () {
        fetch('/MUSIC', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: {
                MUSIC: this.master_id

            }
        })
    };
=======
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
>>>>>>> d6c1e2494955c2f2d2810eaef1b67d7dc0c6a8eb

    render () {
        return (
            <div>
<<<<<<< HEAD

                <DetailsRechercheComponent>{(ref) => { this.master_id = ref }}</DetailsRechercheComponent>*/

            </div>

=======
                <DetailsRechercheComponent tracklists={this.state.tracklistsObject} masterIdToCoponent={this.props.masterId} />
                <DetailsAlbumRechercheComponent imageAlbum={(this.state.images.length > 0 ? this.state.images[0] : '')} genreAlbum={(this.state.genres.length > 0 ? this.state.genres[0] : 'Inconnu')} yearAlbum={this.state.year} titleAlbum={this.state.title} />
            </div>
>>>>>>> d6c1e2494955c2f2d2810eaef1b67d7dc0c6a8eb
        )
    }
}

export default DetailsRechercheContainer
