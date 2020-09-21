import React, { Component } from 'react'
import PlayList from '../../service/Playlist'

class PlayVideoContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {

        }
    }

    render () {
        return (
            <PlayList track={this.props.trackArray} />
        )
    }
}

export default PlayVideoContainer
