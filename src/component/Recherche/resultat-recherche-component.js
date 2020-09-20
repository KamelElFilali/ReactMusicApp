import React from 'react'

const ResultatRechercheComponent = ({ textP, url, masterId, onClick }) => (
    <div className='container' onClick={onClick}>
        <img class='card-img-top' src={url} alt='Card image cap' data-key={masterId} id='select_each_album' />
        <div class='card-body'>
            <p class='card-text'>{textP}</p>
            <button type='button' class='btn btn-primary' data-key={masterId} onClick={onClick}>Details</button>
        </div>
    </div>
)

export default ResultatRechercheComponent
