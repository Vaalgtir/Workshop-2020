import React from 'react'
// import { useHistory } from 'react-router-dom'

import './Footer.css'

export default function Footer() {

    return (
        <footer className="footer">
            <div className="containerNousContacter">
                <h1>Nous Contacter</h1>
                <h2>CarbLife</h2>
    
                <p>
                    10, Route de l'hermite <br/>
                    10000<br/>
                    KONOHA
                </p>
                <p>
                    <i className="fas fa-phone-alt"></i> (+33) 01 02 03 04 05<br/>
                    <i className="fas fa-envelope-open"></i> Madara@kyubi.fr
                </p>
            </div>
        </footer>
    )
}