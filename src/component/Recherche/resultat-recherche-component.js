import React from 'react'

const ResultatRechercheComponent = ({ textPs, url, masterId, onClick }) => (
    <div className='container'>
        <img class='card-img-top' src={url} alt='Card image cap' />
        <div class='card-body'>
            <p class='card-text'>{textPs}</p>
            <button onClick={onClick} data-key={masterId} type='button' class='btn btn-primary'>Details</button>
        </div>
    </div>
)

export default ResultatRechercheComponent
