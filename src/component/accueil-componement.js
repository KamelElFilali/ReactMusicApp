import React from 'react'
import { Button } from '@material-ui/core'

// import Navbar from 'react-bootstrap/Navbar'
// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'
// import Button from 'react-bootstrap/Button'
// import Form from 'react-bootstrap/Form'
// import FormControl from 'react-bootstrap/FormControl'
// import * as ReactBootStrap from 'react'

const AccueilComponent = () => (
    <div className=''>

        <div>
            {/* <h1 id='titreSite'>Kamel</h1> */}

        </div>
        <div id='divJoinUs'>
            <div id='divTextMarketing'>
                <div id='divText1' href='#'>
                    <p>Ressentez la Musique</p>

                </div>
                <div id='divTextAbonnement'>
                    <p>Écoutez 20 Millions de titres en illimité</p>
                </div>
                <div id='divBtnJoin'>
                    <Button id='btnJoin' variant='outlined'>S'inscrire</Button>

                </div>

            </div>
            <div id='divImgMarketing'>
                <a id='imgJoinUsLink' class='' href='#'>
                    {/* <img id='imgJoinUs' src='src/images/pub_accueil.png' alt="s'inscrire" /> */}
                    <img id='img2JoinUs' src='src/images/image-removebg-preview (3).png' alt="s'inscrire" />
                </a>
            </div>

        </div>

        {/* <div id='divJoinUs'>
            <div id='divTextMarketing'>
                <div id='divText1' href='#'>
                    <p>Ressentez la Musique</p>

                </div>
                <div id='divTextAbonnement'>
                    <p>Ecoutez 20 Millions de titres en ilimite</p>
                </div>
                <div id='divBtnJoin'>
                    <Button id='btnJoin' variant='outlined'>S'inscrire</Button>

                </div>

            </div>
            <div id='divImgMarketing'>
                <a id='imgJoinUsLink' class='' href='#'>

                    <img id='imgJoinUs' src='src/images/image-removebg-preview (3).png' alt="s'inscrire" />
                </a>
            </div>
        </div> */}

        <div id='divImgDecouvrir'>
            <a id='imgJoinUsLink' class='' href='#'>

                <img id='imgDecouvrir' src='src/images/img_decouvrir_accueil.png' alt="s'inscrire" />
            </a>
        </div>

    </div>

)

export default AccueilComponent
