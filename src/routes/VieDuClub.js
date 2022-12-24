import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Banniere from '../components/Banniere';
import PresentationClub from '../components/PresentationClub';
import HistoriqueClub from '../components/HistoriqueClub';
import MotDuPresident from '../components/MotDuPresident';

import '../css/VieDuClub.css';

class VieDuClub extends Component {
    render() {
        return(
            <div className="VieDuClub">
                <Navbar />
                <Banniere retourButton="none" path1="Le Club " pathEnGras=" Vie du Club"/>

                <h1>PRÉSENTATION DU CLUB</h1>
                
                <div className="PremLigne">
                    <PresentationClub />
                    <HistoriqueClub />
                </div>
            
                <MotDuPresident />
            </div>
        )
    }
}

export default VieDuClub 