import React from 'react'
import SelectPlayListContainer from '../../container/playlist/select-playlist-container'

const event = function (e) {
    const click = new SelectPlayListContainer()
    return click.handleClicks(e)
}
const SelectPlayListComponent = ({ buttons }) => (
    <div class='divContainerCardPlayList'>

        <div class='swiper-container'>

            <div class='swiper-wrapper'>

                <div class='swiper-slide'>
                    <div class='picture'>
                        <img src='' alt='' />
                    </div>
                    <div class='detail'>
                        <h3>{}</h3>
                        <span>{}</span>
                    </div>
                </div>

            </div>
        </div>
        {/* {buttons.map((buttons, index) => renderDiv(buttons, index))} */}
    </div>

)

export default SelectPlayListComponent
