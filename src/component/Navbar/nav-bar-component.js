import React from 'react'

function renderLi (label, index) {
    (
        <li class='nav-item active' key={index}>
            <a class='nav-link' href=''>{label}<span class='sr-only' /></a>
        </li>
    )
}

const NavBarComponent = ({ buttons }) => (

    <div className=''>

        <nav id='navbarComplete' class='navbar fixed-top navbar navbar-expand-xl   '>
            <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarTogglerDemo03' aria-controls='navbarTogglerDemo03' aria-expanded='false' aria-label='Toggle navigation'>
                <span class='navbar-toggler-icon' />
            </button>
            <div class='navbar-brand' id='divLogo'>
                <a id='titreLogo' href='#'>
                    <p>Liberty Play</p>
                </a>
                <a id='lienLogo' class='navbar-brand' href='#'>
                    <img id='logoSite' src='src/images/icone/logomusic.png' alt='logo du site' />
                </a>
            </div>

            <div class='collapse navbar-collapse' id='navbarTogglerDemo03'>
                <ul id='listNavbar' class='navbar-nav mr-auto mt-2 mt-sm-0'>
                    {buttons.map((item, index) => renderLi(item.item, index))}
                </ul>
                <form id='formRecherche' class='form-inline my-2 my-xl-0'>
                    <input id='barreRecherche' class='form-control mr-sm-2' type='search' placeholder='artist,album,titre...' aria-label='Search' />
                    <button onClick={buttons.handleOnClick} id='btnRecherche' class='btn btn-outline-success my-2 my-sm-0' type='submit'>Rechercher</button>
                </form>
            </div>
        </nav>

    </div>

)

export default NavBarComponent
