import React from 'react'

const SelectPlayListComponent = ({ onClick, nomArtiste, titreTrack, dataIdYoutube, urlImageAlbum }) => (
    <div class='divContainerCardPlayList'>

        <div class='swiper-container' onClick={onClick}>

            <div class='swiper-wrapper'>

                <div class='swiper-slide'>
                    <div class='picture'>
                        <img src={urlImageAlbum.uri} alt='photo album' data-key={dataIdYoutube} />
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
