import React from 'react'

const ResultatRechercheComponent = ({ onClick, textH5, textP, url }) => (
    <div className='container'>
        <div>
            <img class='card-img-top' src={url} alt='Card image cap' />
            <div class='card-body'>
                <h5 class='card-title'>{textH5}</h5>
                <p class='card-text'>{textP}</p>
                <button onClick={onClick} data-key='master_id' type='button' class='btn btn-primary'>Details</button>
            </div>
        </div>
    </div>
)

export default ResultatRechercheComponent
