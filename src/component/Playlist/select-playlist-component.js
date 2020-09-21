import React from 'react'

const SelectPlayListComponent = ({ onClick, titleTrack, uriYoutube, index }) => (
    <div id='divContainerCardPlayList' className='container'>

        {/* <div className='swiper-container' onClick={onClick} key={index}>

            <div className='swiper-wrapper'>

                <div className='swiper-slide'>
                    <div className='picture'>
                        <img src={uriYoutube.uri} alt='video youtube tracks' />

                    </div>
                    <div className='detail'>
                        <h3 id='titreTrackCardPlayList'>{titleTrack}</h3>

                    </div>
                </div>

            </div>

        </div> */}

        <div className='card' onClick={onClick} key={index}>
            <img className='card-img-top' src={uriYoutube.uri} alt='video youtube tracks' />
            <div className='card-body'>
                <h3 className='card-text'>{titleTrack}</h3>
            </div>
        </div>
    </div>

)

export default SelectPlayListComponent
