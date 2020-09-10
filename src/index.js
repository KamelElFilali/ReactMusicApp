import * as React from 'react'
import * as ReactDOM from 'react-dom'

import FormContainer from 'container/form-container'
import 'bootstrap/dist/css/bootstrap.css'
import './css/style.css'

ReactDOM.render(
    <FormContainer />,
    document.getElementById('app') // recupere l'id app du div se trouvant dans index.html
)
