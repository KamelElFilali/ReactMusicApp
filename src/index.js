import * as React from 'react'
import * as ReactDOM from 'react-dom'

// import FormContainer from 'container/form-container'
// import CardPlayListContainer from './container/card-play-list-container' // importer le cardPlayLister container qui lui meme importe le composant carPlayLsit
// import NavBar from './container/nav-bar-container' // importer le navbar container qui lui meme importe le composant Navbar

import App from './container/app' // importer le container app principal de tout les composant

import 'bootstrap/dist/css/bootstrap.css'
import './component/Navbar/navbar.css'
import './css/style.css'

const rootElement = document.getElementById('app') // recupere l'id app du div se trouvant dans index.html
ReactDOM.render(
    // <div>
    //     <NavBar />
    //     <CardPlayListContainer />
    // </div>,
    <App />,
    rootElement
)
