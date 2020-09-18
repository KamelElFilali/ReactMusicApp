import React from 'react'

const ResultatRechercheComponent = ({ textP, url, masterId, onClick }) => (
<<<<<<< HEAD
    <div className='container'>
        <h1>Résultat de votre recherche</h1>
        <img class='card-img-top' src={url} alt='Card image cap' />
        <div class='card-body'>
            <p class='card-text'>{textP}</p>
            <button type='button' class='btn btn-primary'>Details</button>
            <button onClick={onClick} data-key={masterId} type='button' class='btn btn-primary'>Details</button>
=======
    <div className='container' onClick={onClick}>
        <img class='card-img-top' src={url} alt='Card image cap' data-key={masterId} />
        <div class='card-body'>
            <p class='card-text'>{textP}</p>
            <button type='button' class='btn btn-primary'>Details</button>

>>>>>>> master
        </div>
    </div>
)

export default ResultatRechercheComponent
