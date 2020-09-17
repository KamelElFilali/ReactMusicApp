
import React, { Component } from 'react' // importer librairie react

import NavBarComponent from '../../component/accueil/nav-bar-component' // importer le composant navbar
// import '../component/Navbar/navbar.css'
class NavBarContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
            options: []
        }
    }
    // didmont

    render () {
        return (
            <NavBarComponent onSubmit={this.props.onHandleRechercheOnClick} options={this.state.options} />
        )
    }
}

export default NavBarContainer
