import React from 'react'

const ResultatRechercheComponent = ({ textP, url, masterId, onClick }) => (
    <div className='container' onClick={onClick} data-key={masterId}>
        <h1>Résultat de votre recherche</h1>
        <img class='card-img-top' src={url} alt='Card image cap' />
        <div class='card-body'>
            <p class='card-text'>{textP}</p>
            <button type='button' class='btn btn-primary'>Details</button>
        </div>
    </div>
)

export default ResultatRechercheComponent
