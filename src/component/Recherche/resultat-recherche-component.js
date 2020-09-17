import React from 'react'

import ResultatRechercheContainer from '../../container/Recherche/resultat-recherche-container'

const event = function (e) {
    const click = new ResultatRechercheContainer()
    return click.handleClicks(e)
}

const ResultatRechercheComponent = ({ textP, url, masterId }) => (
    <div className='container'>
        <img class='card-img-top' src={url} alt='Card image cap' />
        <div class='card-body'>
            <p class='card-text'>{textP}</p>
            <button onClick={event} data-key={masterId} type='button' class='btn btn-primary'>Details</button>
        </div>
    </div>
)

export default ResultatRechercheComponent
