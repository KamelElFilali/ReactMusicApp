
import React, { Component } from 'react' // importer librairie react

import PlayList from '../component/card-play-list-component' // importer le composant carplayList

class CardPlayListContainer extends Component {
    render () {
        return (

            <div>
                <PlayList />

            </div>

        )
    }
}

export default CardPlayListContainer
