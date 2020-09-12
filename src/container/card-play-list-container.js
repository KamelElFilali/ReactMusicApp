
import React, { Component } from 'react' // importer librairie react

import playList from '../component/card-play-list-component' // importer le composant carplayList

class CardPlayListContainer extends Component {
    render () {
        return (

            <div>
                <playList />

            </div>

        )
    }
}

export default CardPlayListContainer
