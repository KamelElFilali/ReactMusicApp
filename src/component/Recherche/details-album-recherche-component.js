import React from 'react'

const DetailsAlbumRechercheComponent = ({ imageAlbum, genreAlbum, yearAlbum, titleAlbum }) => (
    <div className='container'>
        <h1>Ajouter les musiques a votre Playlist</h1>
        <img class='card-img-top' src={imageAlbum} alt='Card image cap' />
        <div class='card-body'>
            <p class='card-text'>{titleAlbum}</p>
            <p class='card-text'>{yearAlbum}</p>
            <p class='card-text'>{genreAlbum}</p>
        </div>
    </div>
)

export default DetailsAlbumRechercheComponent
