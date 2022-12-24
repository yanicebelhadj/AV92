import React, { Component } from 'react';

import {Link} from 'react-router-dom'

import '../css/CallToAction.css';

class CallToAction extends Component {
    render() {
        return(
            <div className="CallToAction" style = {{backgroundImage: `url("https://docs.google.com/uc?id=1e--wQ0A8g9aVHH3n39c2sL8J1z7oGJ03")`,backgroundSize: "180%",backgroundPosition: "25% 65%",backgroundRepeat:"no-repeat"}}>
                    
                    <div className="descriptionCard">
                        <div className = "cible">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="8" cy="8" r="7" fill="#BA2F33" stroke="white" stroke-width="2"/>
                            </svg>
                            <p>
                                Club
                            </p>
                        </div>
                        <div className = "date">
                            
                        </div>
                    </div>
                    
                    <div className="redirectionPage">
                        <div className="containerRedirection">
                            <div className="textArea">
                                <h1>FAITES PARTIE DE  L’AVENTURE</h1>
                                <p>Inscrivez-vous </p>
                            </div>
                            
                            <Link id="button_redirection" to="/TarifInscription">
                                Tarifs & Inscriptions
                            </Link>
                        </div>
                    </div>

            </div>
        )
    }
}

export default CallToAction