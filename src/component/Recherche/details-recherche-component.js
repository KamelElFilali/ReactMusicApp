import React from 'react'

const DetailsRechercheComponent = ({ title, masterId, youtubeUri, index, onClick }) => (
    <div className='' key={index}>
        <div>
            <div>
                <span>
                    {title}
                </span>
            </div>
            <div>
                <div>
                    <div> <img src='icone_ajout_playlist.png' alt='image pour ajoutMusique' onClick={onClick} data-masterId={masterId} data-uri={youtubeUri} data-title={title} /></div>
                    <div> <p>ajouter a la playlist</p></div>

                </div>
            </div>

        </div>

    </div>

)

export default DetailsRechercheComponent
