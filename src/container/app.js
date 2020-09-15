import React, { Component } from 'react' // importer librairie react
import { Button } from '@material-ui/core'

import NavBarComponent from '../component/Navbar/nav-bar-component' // importer le composant navbar
import PlayList from '../component/card-play-list-component' // importer le composant carplayList
import AccueilComponent from '../component/accueil-componement'
import Accueil from '../container/accueil-container'
import NavBar from '../container/nav-bar-container'
import RechercherContainer from '../container/recherche-container'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component { // composant container qui est le formualaire 'Contenant'
    constructor (props) {
        super(props)

        this.state = {
            isPlayListOpen: false
        }

        this.handlePlayListOnClick = this.handlePlayListOnClick.bind(this)
        this.handleAccueilOnClick = this.handleAccueilOnClick.bind(this)
    }

    handlePlayListOnClick () {
        this.setState({ isPlayListOpen: true })
    }

    handleAccueilOnClick () {
        this.setState({ isPlayListOpen: false })
    }

    render () {
        const BUTTONS = [{

            handleOnClick: this.handlePlayListOnClick
        }]

        return (
            <div>
                <div>

                    <NavBarComponent buttons={BUTTONS} />

                </div>
                <div>

                    {this.state.isPlayListOpen ? <RechercherContainer /> : <AccueilComponent />}

                </div>

            </div>
        )
    }
}

export default App
