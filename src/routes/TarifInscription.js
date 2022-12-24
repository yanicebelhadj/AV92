import React, { Component } from 'react';
import Banniere from '../components/Banniere';
import Navbar from '../components/Navbar';
import TarifList from '../components/TarifList';
import DocToSend from '../components/DocToSend';

import '../css/TarifInscription.css';

class TarifInscription extends Component {
    render() {
        return(
            <div className="TarifInscription">
                <Navbar />
                <Banniere retourButton="none" path1="Infos pratiques" pathEnGras="Tarifs & Inscriptions"/>

                <h1 id="title">Tarifs & Inscriptions</h1>
                <h2 id="subtitle">Tarifs cotisations (en euros)</h2>

                <TarifList />

                <h2 id="subtitle">Documents à rendre</h2>

                <DocToSend />

            </div>
        )
    }
}

export default TarifInscription