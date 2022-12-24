import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import Navbar from '../components/Navbar'
import Banniere from '../components/Banniere'
import ScoopHomePage from '../components/ScoopHomePage'
import CallToAction from '../components/CallToAction'
import HomePageInfo from '../components/HomePageInfo'
import Score from '../components/Score';


import topBackground from '../images/topBackground.png'
import '../css/HomePage.css'
import MatchScores from '../components/MatchScores'

class HomePage extends Component {

    render() {
        return(
            <div className="HomePage">
                <Navbar/>
                <Banniere retourButton="none" path1="Bienvenue sur le site du Club d’Asnières Volley Ball 92"/>
                <div className="goToVideo">
                    <Link id="btn-up" to="/" role="button">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M22.54 6.42C22.4212 5.94541 22.1793 5.51057 21.8387 5.15941C21.498 4.80824 21.0708 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.12 4 3.4 4.46C2.92925 4.59318 2.50198 4.84824 2.16135 5.19941C1.82072 5.55057 1.57879 5.98541 1.46 6.46C1.14521 8.20556 0.991235 9.97631 0.999999 11.75C0.988779 13.537 1.14277 15.3213 1.46 17.08C1.59096 17.5398 1.83831 17.9581 2.17814 18.2945C2.51798 18.6308 2.93882 18.8738 3.4 19C5.12 19.46 12 19.46 12 19.46C12 19.46 18.88 19.46 20.6 19C21.0708 18.8668 21.498 18.6118 21.8387 18.2606C22.1793 17.9094 22.4212 17.4746 22.54 17C22.8524 15.2676 23.0063 13.5103 23 11.75C23.0112 9.96295 22.8572 8.1787 22.54 6.42V6.42Z"
                                stroke="white" stroke-width="2" strokeLinecap="round" stroke-linejoin="round" />
                            <path d="M9.75 15.02L15.5 11.75L9.75 8.48V15.02Z" stroke="white" stroke-width="2" strokeLinecap="round" stroke-linejoin="round" />
                        </svg>
                    </Link>
                </div>

                {/* <MatchScores /> */}
                {/* <div className="MatchScores"> 

                </div> */}

                <div className="HomeContainer">

                    <img className="topBackground" src={topBackground}/>
                    <div className="topBackgroundContent">
                        <h1>LE PROGRAMME DU WEEK END</h1>
                        <Score />
                    </div>
                    <Link id="button_redirectionProgramme" to="./ProgramPage">Voir le Programme complet</Link>
                    <ScoopHomePage />

                    <div className="row2">
                        <CallToAction />
                        <HomePageInfo />
                    </div>
               
                </div>

            </div>
        )
    }
}
export default HomePage 