import React from 'react'

<<<<<<< HEAD:src/component/Navbar/nav-bar-component.js
const NavBarComponent = ({ onChange, type, value }) => (
=======
const NavBarComponent = () => (
>>>>>>> master:src/component/accueil/nav-bar-component.js

    <div className=''>

        <nav id='navbarComplete' className='navbar fixed-top navbar navbar-expand-xl   '>
            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarTogglerDemo03' aria-controls='navbarTogglerDemo03' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon' />
            </button>
            <div className='navbar-brand' id='divLogo'>
                <a id='titreLogo' href='#'>
                    <p>Liberty Play</p>
                </a>
                <a id='lienLogo' className='navbar-brand' href='#'>
                    <img id='logoSite' src='icone/logomusic.png' alt='logo du site' />
                </a>
            </div>

<<<<<<< HEAD:src/component/Navbar/nav-bar-component.js
            <div className='collapse navbar-collapse' id='navbarTogglerDemo03'>
                <ul id='listNavbar' className='navbar-nav mr-auto mt-2 mt-sm-0'>
                    <li className='nav-item active'>
                        <a className='nav-link' href=''>Accueilsss <span className='sr-only'>(current)</span></a>
=======
            <div class='collapse navbar-collapse' id='navbarTogglerDemo03'>
                <ul id='listNavbar' class='navbar-nav mr-auto mt-2 mt-sm-0'>
                    <li class='nav-item active'>
                        <a class='nav-link' href=''>Accueil <span class='sr-only'>(current)</span></a>
>>>>>>> master:src/component/accueil/nav-bar-component.js
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href=''>Musiques</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href=''>Playlist</a>
                    </li>
<<<<<<< HEAD:src/component/Navbar/nav-bar-component.js
                    <li className='nav-item'>
                        <a className='nav-link ' href=''>Contact</a>
                    </li>
                </ul>
                <form>
                    <input id='barreRecherche' onChange={onChange} typt={type} value={value} className='form-control mr-sm-2' type='search' placeholder='artist,album,titre...' aria-label='Search' />
                    <button onChange={onChange} id='btnRecherche' className='btn btn-outline-success my-2 my-sm-0' type='submit'>Rechercher</button>
=======
                    <div id='divDropDown' class='dropdown'>
                        <button id='btnDropDown' class='btn btn-secondary dropdown-toggle' type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                            Playlist
                        </button>
                        <div id='divListDropDown' class='dropdown-menu' aria-labelledby='dropdownMenu2'>
                            <button class='dropdown-item' type='button'>Select 1</button>
                            <button class='dropdown-item' type='button'>Select 1</button>
                            <button class='dropdown-item' type='button'>Select 1</button>
                        </div>
                    </div>

                    <li class='nav-item'>
                        <a class='nav-link ' href=''>Contact</a>
                    </li>
                </ul>
                <form id='formRecherche' class='form-inline my-2 my-xl-0'>
                    <input id='barreRecherche' class='form-control mr-sm-2' type='search' placeholder='artist,album,titre...' aria-label='Search' />
                    <button id='btnRecherche' class='btn btn-outline-success my-2 my-sm-0' type='submit'>Rechercher</button>
>>>>>>> master:src/component/accueil/nav-bar-component.js
                </form>
            </div>
        </nav>

    </div>

)

export default NavBarComponent
