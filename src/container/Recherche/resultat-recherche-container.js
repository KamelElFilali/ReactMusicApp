import React, { Component } from 'react'

import ResultatRechercheComponent from '../../component/recherche/resultat-recherche-component'

class ResultatRechercheContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
            masterIdAlbum: [],
            titreAlbum: [],
            imageUrAlbum: []
        }

        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount () {
        fetch('http://localhost:8080/recherches', { method: 'GET' })
            .then(response => response.json())
            .then(responseJson => {
                const result = responseJson.results
                result.map((item, index) => {
                    this.state.imageUrAlbum[index] = item.thumb
                    this.state.titreAlbum[index] = item.title
                    this.state.masterIdAlbum[index] = item.master_id
                })
            })
    }

    handleClick (event) {
        console.log(event.target.getAttribute('data-key'), ' 1- ', event.target.value)
    }

    render () {
        return (
            <div>
                <ResultatRechercheComponent onClick={this.handleClick} url={this.state.imageUrAlbum[index]} textP={} masterId={this.state.masterIdAlbum[index]} />
            </div>
        )
    }
}

export default ResultatRechercheContainer
