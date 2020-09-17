import React, { Component } from 'react'

import DetailsRechercheComponent from '../../component/recherche/details-recherche-component'
const MUSIC = [{

    playlist_id: '2',
    title: 'Le Numéro De Miss Madona',
    uri: 'https://www.youtube.com/watch?v=3UUcbC1J7ik',
    master_id: 703570
}]

class DetailsRechercheContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {

        }
        this.handelOnclickListner = this.handelOclickListner(this)
    }

    handelOclickListner () {
        fetch('/MUSIC', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: {
                MUSIC: this.master_id

            }
        })
    };

    render () {
        return (
            <div>

                <DetailsRechercheComponent>{(ref) => { this.master_id = ref }}</DetailsRechercheComponent>*/

            </div>

        )
    }
}

export default DetailsRechercheContainer
