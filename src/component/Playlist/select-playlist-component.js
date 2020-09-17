import React from 'react'
import SelectPlayListContainer from '../../container/playlist/select-playlist-container'

const event = function (e) {
    const click = new SelectPlayListContainer()
    return click.handleClicks(e)
}
const SelectPlayListComponent = ({ onClick, nomArtiste, titreTrack, dataIdYoutube, urlImage }) => (
    <div class='divContainerCardPlayList'>

        <div class='swiper-container' onClick={onClick}>

            <div class='swiper-wrapper'>

                <div class='swiper-slide'>
                    <div class='picture'>
                        <img src='' alt='' />
                    </div>
                    <div class='detail'>
                        <h3 id='titreTrackCardPlayList'>{titreTrack}</h3>
                        <span id='nomArtisteCardPlayList'>{nomArtiste}</span>
                    </div>
                </div>

            </div>
        </div>
    </div>

)

export default SelectPlayListComponent
