import React from 'react'

const NavBarComponent = ({ onChange, type, value }) => (

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

            <div className='collapse navbar-collapse' id='navbarTogglerDemo03'>
                <ul id='listNavbar' className='navbar-nav mr-auto mt-2 mt-sm-0'>
                    <li className='nav-item active'>
                        <a className='nav-link' href=''>Accueilsss <span className='sr-only'>(current)</span></a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href=''>Musiques</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href=''>Playlist</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link ' href=''>Contact</a>
                    </li>
                </ul>
                <form>
                    <input id='barreRecherche' onChange={onChange} typt={type} value={value} className='form-control mr-sm-2' type='search' placeholder='artist,album,titre...' aria-label='Search' />
                    <button onChange={onChange} id='btnRecherche' className='btn btn-outline-success my-2 my-sm-0' type='submit'>Rechercher</button>
                </form>
            </div>
        </nav>

    </div>

)

export default NavBarComponent
