import React, { Component } from 'react'

import ResultatRechercheComponent from '../component/resultat-recherche-component'

class ResultatRechercheContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {

        }
    }

    render () {
        return (
            <div>
                <ResultatRechercheComponent />
            </div>
        )
    }
}

export default ResultatRechercheContainer
