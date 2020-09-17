import React, { Component } from 'react'

import ResultatRechercheContainer from './resultat-recherche-container'
import DetailsRechercheContainer from './details-recherche-container'

class RechercheContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
            users: []
        }

        // Cette liaison est nécéssaire afin de permettre
        // l'utilisation de `this` dans la fonction de rappel.
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount () {
        fetch('http://localhost:8080/recherches', { method: 'GET' })

            .then(response => response.json())
            .then(response => {
                this.setState({ users: response })
            })
    }

    handleClick () {
        console.log('this vaut :', this)
    }

    render () {
        return (
            <div>
                <ResultatRechercheContainer />
            </div>
        )
    }
}

export default RechercheContainer
