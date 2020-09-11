import * as React from 'react'
import * as ReactDOM from 'react-dom'

// import FormContainer from 'container/form-container'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'

import './css/style.css'
const rootElement = document.getElementById('app') // recupere l'id app du div se trouvant dans index.html
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    rootElement
)
