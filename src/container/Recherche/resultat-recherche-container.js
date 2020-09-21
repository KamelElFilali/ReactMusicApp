import React, { Component } from 'react'

import ResultatRechercheComponent from '../../component/recherche/resultat-recherche-component'

class ResultatRechercheContainer extends Component {
    constructor (props) {
        super(props)
        this.state = {
            result: []
        }
    }

    componentDidMount () {
<<<<<<< HEAD
        const DiscogsMusic = new Discogs('pQzAZbFqlwSWOJDgKaUysMarTUaZmCEcuJmbqCZA')
        if (this.props.rechercheValeur !== '') {
            DiscogsMusic.search(this.props.rechercheValeur, (data) => {
                if (data.results.length > 0) {
                    this.setState({ result: data.results })
                } else {
                    alert('Aucun resultat ne correspond a votre recherche')
                }
            })
        } else {
            alert('Champ de recherche vide')
        }
=======
        fetch('http://localhost:8080/recherches', { method: 'GET' })
            .then(response => response.json())
            .then(responseJson => {
                const result = responseJson.results
                this.setState({ result: result })
            })
>>>>>>> 9227eb8f204552a6523e2b6d0d51ca3d091bed5e
    }

    render () {
        return (
            <div id='divCarPrincipal'>

                {this.state.result.map((item, index) => <ResultatRechercheComponent onClick={this.props.onHandleEachAlbumClick} key={index} textP={item.title} url={item.thumb} masterId={item.master_id} />)}

            </div>

        )
    }
}
export default ResultatRechercheContainer
