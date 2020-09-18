
import React, { Component } from 'react' // importer librairie react

import NavBarComponent from '../../component/accueil/nav-bar-component' // importer le composant navbar
// import '../component/Navbar/navbar.css'
class NavBarContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
<<<<<<< HEAD
            genres: []
=======
            options: []
>>>>>>> b076b424eb11cfdca9f1cea30900095e99cd04b3
        }
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
<<<<<<< HEAD
            <NavBarComponent onSubmit={this.props.onHandleRechercheOnClick} genres={this.state.genres} />
=======
            <NavBarComponent onSubmit={this.props.onHandleRechercheOnClick} options={this.state.options} />
>>>>>>> b076b424eb11cfdca9f1cea30900095e99cd04b3
        )
    }
}

export default NavBarContainer
