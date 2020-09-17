import React from 'react'

const event = function (e) {
    console.log(e.currentTarget.getAttribute('data-key'))
}

const ResultatRechercheComponent = () => (
    <div className=''>
        <div class='card' style='width: 18rem;'>
            <img class='card-img-top' src='...' alt='Card image cap' />
            <div class='card-body'>
                <h5 class='card-title'>Card title</h5>
                <p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button onClick={event} data-key='master_id' type='button' class='btn btn-primary'>Details</button>
            </div>
        </div>
    </div>
)

export default ResultatRechercheComponent
