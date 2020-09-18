import React, { Component } from 'react'

import DetailsRechercheComponent from '../../component/recherche/details-recherche-component'
import AlbumDetailsRechercheComponent from '../../component/recherche/album_details_recherche_component'
class DetailsRechercheContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
            tracklists: [],
            images: [],
            year: '',
            title: ''
        }
    }

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
        if (this.state.tracklists.length !== 0) {
            return (
                <div>
                    <DetailsRechercheComponent datas={this.state.tracklists} onClick={this.handleAjoutTrackOnClick} />
                    <AlbumDetailsRechercheComponent images={this.state.images} year={this.state.year} title={this.state.title} />
                </div>
            )
        }
    }
}

export default DetailsRechercheContainer
