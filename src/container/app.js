import React, { Component } from 'react' // importer librairie react
import { Button } from '@material-ui/core'

import NavBarComponent from '../component/Navbar/nav-bar-component' // importer le composant navbar
import PlayList from '../component/card-play-list-component' // importer le composant carplayList
import AccueilComponent from '../component/accueil-componement'
import Accueil from '../container/accueil-container'
import NavBar from '../container/nav-bar-container'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component { // composant container qui est le formualaire 'Contenant'
    render () {
        return (
            <div>
                <div>

                    <NavBarComponent />

                </div>
                <div>
                    <AccueilComponent />

                </div>

                <div>
                    {/* <PlayList /> */}

                </div>

            </div>
        )
    }
}

export default App
