import React, { Component } from 'react'

import SelectPlayListContainer from './select-playlist-container'
import PlayVideoContainer from './play-video-container'
import BoutonNavigationContainer from './boutons-navigation-container'

class PlayListContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
            displayYoutubeFrame: false
        }

        this.handlePlayClick = this.handlePlayClick.bind(this)
    }

    handlePlayClick (event) {
        this.setState({
            displayYoutubeFrame: true,
            trackArray: []
        })
    }

    componentDidMount () {
        const URL = 'http://localhost:8080/playlists/tracks/' + this.props.playlistId
        alert(this.props.playlistId)
        fetch(URL, { method: 'GET' })
            .then(response => response.json())
            .then(responseJson => {
                alert('my objects' + responseJson)
                this.setState({ trackArray: responseJson })
            })
    }

    render () {
        return (
            <div>
                <SelectPlayListContainer playlistId={this.props.playlistId} onHandlePlayClick={this.handlePlayClick} trackArray={this.trackArray} />
                {(this.state.displayYoutubeFrame === true) ? <PlayVideoContainer trackArray={this.state.trackArray} /> : ''}
            </div>
        )
    }
}

export default PlayListContainer
