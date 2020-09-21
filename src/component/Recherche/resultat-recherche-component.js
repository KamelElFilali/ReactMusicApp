import React from 'react'
// const ContainerStyle = {
//     display: 'flex',
//     justifyContent: 'space-between',
//     width: 300
// }

const ResultatRechercheComponent = ({ textP, url, masterId, onClick }) => (

    <div id='divCardResultatRecherche' className='container' onClick={onClick}>
        <div className='card'>
            <img className='card-img-top' src={url} alt='Card image cap' data-key={masterId} />
            <div className='card-body'>
                <h3 className='card-text'>{textP}</h3>
                <hr />
                <button id='boutonDetailRecherche' type='button' className='btn btn-primary'>Details</button>
            </div>
        </div>
        <br /> <br />
    </div>

)

export default ResultatRechercheComponent
