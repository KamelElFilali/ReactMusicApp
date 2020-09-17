
import React, { Component } from 'react' // importer librairie react

import AccueilComponent from '../../component/accueil/accueil-componement' // importer le composant accueil
import NavBarComponent from '../../component/accueil/nav-bar-component'

class AccueilContainer extends Component {
    constructor () {
        super()

        this.state = {


        }

       /* console.log(this.onClick)*/
        this.hadelOnclick=this.hadelOnclick.bind(this)


    }

    hadelOnclick(){

    }

    render () {
        const BUTTONS = [{
            label: 'Acceuil',
            onClick: this.hadelOnclick
        }, {
            label: 'Musiques',
            onClick: this.hadelOnclick
        }, {
            label: 'PlayList',
            onClick: this.hadelOnclick
        }, {
            label: 'Contact',
            onClick: this.hadelOnclick
        }
        ]
        return (

            <div>

                <NavBarComponent buttons={BUTTONS} />
                <AccueilComponent />

            </div>

        )
    }
}

export default AccueilContainer
