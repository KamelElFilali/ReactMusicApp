import React from 'react'

// import Navbar from 'react-bootstrap/Navbar'
import './navbar.css'
const NavBarComponent = () => (
    <div>
        <nav class='slidemenu'>

            {/* <!-- Item 1 --> */}
            <input type='radio' name='slideItem' id='slide-item-1' class='slide-toggle' checked />
            <label for='slide-item-1'><p class='icon'>♬</p><span>Home</span></label>

            {/* <!-- Item 2 --> */}
            <input type='radio' name='slideItem' id='slide-item-2' class='slide-toggle' />
            <label for='slide-item-2'><p class='icon'>★</p><span>About</span></label>

            {/* <!-- Item 3 --> */}
            <input type='radio' name='slideItem' id='slide-item-3' class='slide-toggle' />
            <label for='slide-item-3'><p class='icon'>✈</p><span>Folio</span></label>

            {/* <!-- Item 4 --> */}
            <input type='radio' name='slideItem' id='slide-item-4' class='slide-toggle' />
            <label for='slide-item-4'><p class='icon'>✎</p><span>Blog</span></label>

            <div class='clear' />

            {/* <!-- Bar --> */}
            <div class='slider'>
                <div class='bar' />
            </div>

        </nav>

    </div>

)

export default NavBarComponent
