
import React, { Component } from 'react' // importer librairie react

import NavBarComponent from '../component/Navbar/nav-bar-component' // importer le composant navbar

class NavBar extends Component {
    render () {
        return (

            <div className='navbarContainer'>
                <NavBarComponent />

            </div>

        )
    }
}

export default NavBar
