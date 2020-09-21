import React, { Component } from 'react'
import PlayList from '../../service/Playlist'

class PlayVideoContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
            youtubeUriTracks: []
        }
    }

    componentDidMount () {
        const tracks = this.props.handleTackArray
        const newTracksArray = []
        tracks.map(item => {
            newTracksArray.push({
                uri: item.uri,
                title: item.title
            })
        })

        this.setState({ youtubeUriTracks: newTracksArray })
    }

    render () {
        return (
            <PlayList tracks={this.state.youtubeUriTracks} />
        )
    }
}

export default PlayVideoContainer
