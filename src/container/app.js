import React, { Component } from 'react' // importer librairie react
import { Button } from '@material-ui/core'

import NavBarContainer from './accueil/nav-bar-container' // importer le composant navbar

import AccueilContainer from './accueil/accueil-container'

import RechercheContainer from './recherche/recherche-container'

import PlayListContainer from './playlist/play-list-container'

import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component { // composant container qui est le formualaire 'Contenant'
    constructor (props) {
        super(props)

        this.state = {
            isPlayListOpen: false
        }

        this.handleRechercheOnClick = this.handleRechercheOnClick.bind(this)
        this.handlePlayListOnClick = this.handlePlayListOnClick.bind(this)
        this.handleAccueilOnClick = this.handleAccueilOnClick.bind(this)
        this.handleAlbumOnClick = this.handleAlbumOnClick.bind(this)
        this.handleAjoutTrackOnClick = this.handleAjoutTrackOnClick.bind(this)
        this.handleSelectionTrackOnClick = this.handleSelectionTrackOnClick.bind(this)
    }

    handlePlayListOnClick () {
        this.setState({ isPlayListOpen: true })
    }

    handleRechercheOnClick (event) {
        event.preventDefault()
        const rechercheInput = document.getElementById('barreRecherche')
        console.log(rechercheInput.value)
    }

    handleAccueilOnClick () {
        this.setState({ isPlayListOpen: false })
    }

    handleAlbumOnClick () {

    }

    handleSelectionTrackOnClick () {

    }

    handleAjoutTrackOnClick (event) {
        event.preventDefault()
        console.log('ajout track')
    }

    render () {
        const BUTTONS = [{

            handleOnClick: this.handlePlayListOnClick
        }]

        return (
            <div>
                <div>

                    <NavBarContainer onHandleRechercheOnClick={this.handleRechercheOnClick} buttons={BUTTONS} />

                </div>
                <div>

                    {this.state.isPlayListOpen ? <RechercheContainer /> : <AccueilContainer />}

                </div>

            </div>
        )
    }
}

export default App
