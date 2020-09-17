import React, { Component } from 'react'

import SelectPlayListComponent from '../../component/playlist/select-playlist-component'

class SelectPlayListContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {

        }
    }

    render () {
        return (
            <div>
                <SelectPlayListComponent />
            </div>
        )
    }
}

export default SelectPlayListContainer
