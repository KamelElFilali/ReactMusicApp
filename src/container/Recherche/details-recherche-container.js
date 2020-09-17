import React, { Component } from 'react'

import DetailsRechercheComponent from '../../component/recherche/details-recherche-component'

class DetailsRechercheContainer extends Component {
    constructor (props) {
        super(props)
        alert('cons')
        this.state = {
            tracklists: [],
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
                this.setState({ tracklists: responseJson.tracklist, images: responseJson.images, genres: responseJson.genres, year: responseJson.year, title: responseJson.title })
            })
    }

    render () {
        return (
            <DetailsRechercheComponent tracklists={this.state.tracklists} />
        )
    }
}

export default DetailsRechercheContainer
