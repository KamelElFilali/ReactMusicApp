
import React, { Component } from 'react' // importer librairie react

import AccueilComponent from '../component/accueil-componement' // importer le composant accueil
import NavBarComponent from '../component/Navbar/nav-bar-component'
const BUTTONS = [{
    label: 'Acceuil',
    onClick: this.onClick
}, {
    label: 'Musiques',
    onClick: this.onClick
}, {
    label: 'PlayList',
    onClick: this.onClick
}, {
    label: 'Contact',
    onClick: this.onClick
}
]
class Accueil extends Component {
    constructor () {
        super()
        this.state = {

        }
    }

    render () {
        return (

            <div>
                <NavBarComponent button={BUTTONS} />

                <AccueilComponent />

            </div>

        )
    }
}

export default Accueil
