import React, { Component } from 'react' // importer librairie react

import NavBarComponent from '../component/Navbar/nav-bar-component' // importer le composant navbar
import playList from '../component/card-play-list-component' // importer le composant carplayList

class App extends Component { // composant container qui est le formualaire 'Contenant'
    render () {
        return (
            <div>
                {/* <h1>Liberty Play</h1> */}

                <div id='divNavbarContainer'>
                    <NavBarComponent />
                </div>

                <div id='divCardPlayListContainer'>
                    <playList />
                </div>

            </div>
        )
    }
}

export default App
