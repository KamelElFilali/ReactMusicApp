import React from 'react'

const SelectPlayListComponent = ({ onClick, titleTrack, uriYoutube, index }) => (
    <div class='divContainerCardPlayList'>

        <div class='swiper-container' onClick={onClick} key={index}>

            <div class='swiper-wrapper'>

                <div class='swiper-slide'>
                    <div class='picture'>
                        <img src={uriYoutube.uri} alt='video youtube tracks' />

                    </div>
                    <div class='detail'>
                        <h3 id='titreTrackCardPlayList'>{titleTrack}</h3>

                    </div>
                </div>

            </div>
        </div>
    </div>

)

export default SelectPlayListComponent
