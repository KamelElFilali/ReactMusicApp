import * as React from 'react'
import * as ReactDOM from 'react-dom'

import App from './container/app'

import 'bootstrap/dist/css/bootstrap.min.css'
import './component/Navbar/navbar.css'
// import './css/style.css'
import './css/accueil.css'
import './component/Navbar/animation-nav-bar'

const rootElement = document.getElementById('app')
ReactDOM.render(
    <App />,
    rootElement
)
