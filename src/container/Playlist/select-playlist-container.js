import React, { Component } from 'react'

import SelectPlayListComponent from '../../component/playlist/select-playlist-component'

class SelectPlayListContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
            result: []
        }
    }

    componentDidMount () {
        const URL = 'http://localhost:8080/playlists/tracks/'

        fetch(URL, { method: 'GET' })
            .then(response => response.json())
            .then(responseJson => {
                const result = responseJson.results
                this.setState({ result: result })
            })
    }

    handleClick () {

    }

    render () {
        return (
            <div>
                <SelectPlayListComponent />
                {this.state.result.map((item, index) => <SelectPlayListComponent onClick={this.handleClick} key={index} nomArtiste={item} titreTrack={item.title} url={item.thumb} dataIdYoutube={item.uri} />)}
            </div>
        )
    }
}

export default SelectPlayListContainer
