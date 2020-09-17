
import React, { Component } from 'react' // importer librairie react

import AccueilComponent from '../../component/accueil/accueil-componement' // importer le composant accueil
import NavBarComponent from '../../component/accueil/nav-bar-component'

class AccueilContainer extends Component {
    constructor () {
        super()

        this.state = {

        }
    }

    render () {
        return (

            <div>

                <AccueilComponent />

            </div>

        )
    }
}

export default AccueilContainer
