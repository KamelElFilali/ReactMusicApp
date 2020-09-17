
import React, { Component } from 'react' // importer librairie react

import NavBarComponent from '../../component/accueil/nav-bar-component' // importer le composant navbar
// import '../component/Navbar/navbar.css'
<<<<<<< HEAD:src/container/nav-bar-container.js
class NavBar extends Component {
    constructor (props) {
        super(props)
=======
class NavBarContainer extends Component {
    render () {
        return (
>>>>>>> master:src/container/accueil/nav-bar-container.js

        this.state = {
            myInputValue: ''
        }

        // ecouteur d'evennements
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick (event) {
        alert('fff')
        // const recherche = document.getElementById('barreRecherche').value
        console.log('test recu')
        // this.setState({ page: 'recherche', rechercheValeur: recherche })
        // je recupere la valeur de l'input
    }

    render () {
        <input
            type='search'
            value={this.state.myInputValue}
            onChange={e => this.setState({ myInputValue: e.target.value })}
        />
        return (
            console.log(this.state.myInputValue)
        )
    }
}

export default NavBarContainer
