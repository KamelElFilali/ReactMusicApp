
import React, { Component } from 'react' // importer librairie react

import NavBarComponent from '../../component/accueil/nav-bar-component' // importer le composant navbar
// import '../component/Navbar/navbar.css'
class NavBarContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {

        }

        this.handleOnClick = this.handleOnClick.bind(this)

        this.BUTTONS = [{
            label: 'Acceuil',
            onClick: this.handleOnClick
        }, {
            label: 'Musiques',
            onClick: this.handleOnClick
        }, {
            label: 'PlayList',
            onClick: this.handleOnClick
        }, {
            label: 'Contact',
            onClick: this.handleOnClick
        }
        ]
    }

    handleOnClick () {
        console.log('test button click')
    }

    render () {
        return (
            <NavBarComponent buttons={this.BUTTONS} onSubmit={this.props.onHandleRechercheOnClick} />
        )
    }
}

export default NavBarContainer
