import React from 'react'

// const swiper = new Swiper('.swiper-container',
//     {
//         effect: 'coverflow',
//         grabCursor: true,
//         centeredSlides: true,
//         slidesPerView: 'auto',
//         coverflowEffect:
//     {
//         rotate: 20,
//         stretch: 0,
//         depth: 350,
//         modifier: 1,
//         slideShadows: true
//     },
//         pagination: {
//             el: '.swiper-pagination'
//         }
//     })

function renderDiv (buttons, index) {
    return (

        <div class='swiper-wrapper' key={index} onClick={buttons.handleOnClick}>

            <div class='swiper-slide' onclick={onclick}>
                <div class='picture'>
                    <img src='' alt='' />
                </div>
                <div class='detail'>
                    <h3>{buttons.label}</h3>
                    <span>{buttons.label}</span>
                </div>
            </div>

        </div>

    )
}
const SelectPlayListComponent = ({ buttons }) => (
    <div class='divContainerCardPlayList'>

        <div class='swiper-container' />
        {buttons.map((buttons, index) => renderDiv(buttons, index))}
    </div>

)

export default SelectPlayListComponent
