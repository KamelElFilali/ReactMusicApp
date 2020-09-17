import React, { Component } from 'react'

import ResultatRechercheComponent from '../../component/recherche/resultat-recherche-component'

class ResultatRechercheContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {

        }

        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount () {
        fetch('http://localhost:8080/recherches', { method: 'GET' })
            .then(response => response.json())
            .then(responseJson => {
                responseJson.master_id
            })
    }

    handleClick (event) {
        console.log(event.currentTarget.getAttribute('data-key'), ' - ', event.currentTarget.value)
    }

    render () {
        return (
            <div>
                <ResultatRechercheComponent onClick={this.handleClick} />
            </div>
        )
    }
}

export default ResultatRechercheContainer
