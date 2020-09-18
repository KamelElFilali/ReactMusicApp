import React, { Component } from 'react'

import DetailsRechercheComponent from '../../component/recherche/details-recherche-component'
<<<<<<< HEAD
import AlbumDetailsRechercheComponent from '../../component/recherche/album_details_recherche_component'
=======
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
>>>>>>> 0e8e89551c0cb9775f1284669cb07d805ae4bbba
class DetailsRechercheContainer extends Component {
    constructor (props) {
        super(props)
        alert('cons')
        this.state = {
<<<<<<< HEAD
            tracklists: [],
            images: [],
            year: '',
            title: ''
=======
            tracklistsObject: [],
            images: [],
            genres: [],
            year: '',
            title: ''

>>>>>>> 0e8e89551c0cb9775f1284669cb07d805ae4bbba
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

    componentDidMount () {
        const resultJson = 'http://localhost:8080/recherches/' + this.props.master_id
        fetch(resultJson, { method: 'GET' })
            .then(response => response.json())
            .then(responseJSON => {
                this.setState({
                    tracklists: responseJSON.tracklist,
                    images: responseJSON.images,
                    year: responseJSON.year,
                    title: responseJSON.title

                })
            }
            )
    }

    render () {
<<<<<<< HEAD
        if (this.state.tracklists.length !== 0) {
            return (
                <div>
                    <DetailsRechercheComponent datas={this.state.tracklists} onClick={this.handleAjoutTrackOnClick} />
                    <AlbumDetailsRechercheComponent images={this.state.images} year={this.state.year} title={this.state.title} />
                </div>
            )
        }
=======
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
>>>>>>> 0e8e89551c0cb9775f1284669cb07d805ae4bbba
    }
}

export default DetailsRechercheContainer
