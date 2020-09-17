import React, { Component } from 'react'

// import RechercheComponent from '../component/recherche-component'
import ResultatRechercheContainer from '../container/resultat-recherche-container'

class RechercheContainer extends Component {
    constructor () {
        super()

        this.state = {
            users: []
        }

        // Cette liaison est nécéssaire afin de permettre
        // l'utilisation de `this` dans la fonction de rappel.
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount () {
        fetch('http://localhost:8080/recherche', { method: 'GET' })

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