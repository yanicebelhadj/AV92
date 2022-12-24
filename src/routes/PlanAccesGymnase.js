import React, { Component } from 'react';

import '../css/PlanAccesGymnase.css';

import Navbar from '../components/Navbar';
import Banniere from '../components/Banniere';
import GymnaseCard from '../components/GymnaseCard';

class PlanAccesGymnase extends Component {
    render() {
        return(
            <div className="PlanAccesGymnase">
                <Navbar />
                <Banniere retourButton="none" path1="Infos pratiques" pathEnGras="Plan d’accès gymnases"/>
                <h1>PLAN D’ACCÈS GYMNASES</h1>
                <GymnaseCard />

            </div>
        )
    }
}

export default PlanAccesGymnase 