
import React, { Component } from 'react' // importer librairie react

import NavBarComponent from '../../component/accueil/nav-bar-component' // importer le composant navbar
// import '../component/Navbar/navbar.css'


class NavBarContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
            genres: [],
            options: []
        }
        this.BUTTONS = [{
            label: 'Acceuil',
            onClick: this.handleOnClick
        },
        {
            label: 'Musiques',
            onClick: this.handleOnClick
        },
        {
            label: 'PlayList',
            onClick: this.handleOnClick
        },
        {
            label: 'Contact',
            onClick: this.handleOnClick
        }
        ]
    }


    // didmont

    componentDidMount () {
        fetch('http://localhost:8080/playlists/genres', { method: 'GET' })
            .then(response => response.json())
            .then(responseJson => {
                this.setState({ genres: responseJson })
            })
    }

    render () {
        return (

            <NavBarComponent buttons ={this.BUTTONS} onSubmit={this.props.onHandleRechercheOnClick} />
            <NavBarComponent onSubmit={this.props.onHandleRechercheOnClick} genres={this.state.genres} />
        )
    }
}

export default NavBarContainer
