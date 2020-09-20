import React, { Component } from 'react'

import SelectPlayListComponent from '../../component/playlist/select-playlist-component'

class SelectPlayListContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
            result: []
        }
    }

    render () {
        return (
            <div>
                {/* <SelectPlayListComponent /> */}
                {this.props.trackArray.map((item, index) => <SelectPlayListComponent onClick={this.props.onHandlePlayClick} key={index} titleTrack={item.title} uriYoutube={item.uri} />)}
            </div>
        )
    }
}

export default SelectPlayListContainer
