import React, { Component } from 'react' // importer librairie react
import { Button } from '@material-ui/core'

import NavBarContainer from './accueil/nav-bar-container' // importer le composant navbar

import AccueilContainer from './accueil/accueil-container'

import RechercheContainer from './recherche/recherche-container'

import PlayListContainer from './playlist/play-list-container'

import 'bootstrap/dist/css/bootstrap.min.css'

import ResultatRechercheContainer from '../container/Recherche/resultat-recherche-container'

class App extends Component { // composant container qui est le formualaire 'Contenant'
    constructor (props) {
        super(props)

        this.state = {
            container: 'accueil',
            rechercheValeur: ''
        }

        this.handleRechercheOnClick = this.handleRechercheOnClick.bind(this)
        // this.handlePlayListOnClick = this.handlePlayListOnClick.bind(this)
        this.handleAccueilOnClick = this.handleAccueilOnClick.bind(this)
        this.handleAlbumOnClick = this.handleAlbumOnClick.bind(this)
        this.handleAjoutTrackOnClick = this.handleAjoutTrackOnClick.bind(this)
    }

    handleRechercheOnClick (event) {
        event.preventDefault()
        const rechercheInput = document.getElementById('barreRecherche')
        this.setState({ container: 'recherche', rechercheValeur: rechercheInput })
    }

    handleAccueilOnClick () {
        this.setState({ isPlayListOpen: false })
    }

    handleAlbumOnClick () {

    }

    handleSelectionOnClick () {

    }

    handleAjoutTrackOnClick () {

    }

    render () {
        const BUTTONS = [{
            handleOnClick: this.handlePlayListOnClick
        }]
        let nextContainer = ''

        switch (this.state.container) {
        case 'accueil':
            nextContainer = <AccueilContainer />
            break
        case 'recherche':
            nextContainer = <RechercheContainer />
            break
        case 'playlist':
            nextContainer = <PlayListContainer />
            break
        default:
            nextContainer = <AccueilContainer />
        }

        return (
            <div>
                <div>

                    <NavBarContainer onHandleRechercheOnClick={this.handleRechercheOnClick} buttons={BUTTONS} />

                </div>
                <div>
                    {nextContainer}
                </div>

            </div>
        )
    }
}

export default App
