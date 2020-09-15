import React from 'react'

// import Navbar from 'react-bootstrap/Navbar'
// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'
// import Button from 'react-bootstrap/Button'
// import Form from 'react-bootstrap/Form'
// import FormControl from 'react-bootstrap/FormControl'
// import * as ReactBootStrap from 'react'
// import '../Navbar/navbar.css'
// import '../Navbar/animation-nav-bar'

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
                    <li onClick={buttons} class='nav-item active'>
                        <a class='nav-link' href=''>Accueil <span class='sr-only'>(current)</span></a>
                    </li>
                    <li onClick={buttons} class='nav-item'>
                        <a class='nav-link' href=''>Musiques</a>
                    </li>
                    <li onClick={buttons} class='nav-item'>
                        <a class='nav-link ' href=''>Playlist</a>
                    </li>
                    <li onClick={buttons} class='nav-item'>
                        <a class='nav-link ' href=''>Abonnement</a>
                    </li>
                    <li onClick={buttons} class='nav-item'>
                        <a class='nav-link ' href=''>Contact</a>
                    </li>
                </ul>
                <form id='formRecherche' class='form-inline my-2 my-xl-0'>
                    <input id='barreRecherche' class='form-control mr-sm-2' type='search' placeholder='artiste,album,titre...' aria-label='Search' />
                    <button onClick={buttons.handleOnClick} id='btnRecherche' class='btn btn-outline-success my-2 my-sm-0' type='submit'>Rechercher</button>
                </form>
            </div>
        </nav>

    </div>

)

export default NavBarComponent
