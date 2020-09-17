import React from 'react'

const DetailsRechercheComponent = ({ li, onClick, index, text }) => (
    <div className=''>
        <h1>RECHERCHE</h1>
        <li onclick={onclick}>{text}</li>
    </div>

)

export default DetailsRechercheComponent
