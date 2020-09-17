
import React, { Component } from 'react' // importer librairie react

import NavBarComponent from '../../component/accueil/nav-bar-component' // importer le composant navbar
// import '../component/Navbar/navbar.css'
class NavBarContainer extends Component {

    render () {
        return (

            <div>
                <NavBarComponent />

            </div>

        )
    }
}

export default NavBarContainer
