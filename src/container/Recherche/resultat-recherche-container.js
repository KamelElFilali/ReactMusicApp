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
        fetch('http://localhost:8080/recherches', { method: 'GET' })
            .then(response => response.json())
            .then(responseJson => {
                const result = responseJson.results
                this.setState({ result: result })
            })
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
