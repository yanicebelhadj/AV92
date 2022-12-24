import React, { Component } from 'react';
import Banniere from '../components/Banniere';
import CoachList from '../components/CoachList';
import FilterCoach from '../components/FilterCoach';
import Navbar from '../components/Navbar';

import '../css/PlanningEntrainement.css';

class PlanningEntrainement extends Component {
    render() {
        return(
            <div className="PlanningEntrainement">
                <Banniere retourButton="none" path1="Le Club" pathEnGras="Planning des entraînements" />
                <Navbar />
                <h1>PLANNING DES ENTRAÎNEMENTS</h1>
                <FilterCoach />
                <CoachList />
            </div>
        )
    }
}

export default PlanningEntrainement 