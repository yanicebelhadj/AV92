import React, { Component } from 'react';
import Banniere from '../components/Banniere';
import Navbar from '../components/Navbar';

import '../css/ActuPage.css';
import Actu from '../components/Actu';

class ActuPage extends Component {

    render() {
        return(
            <div className="ActuPage">
                <Navbar />
                <Banniere retourButton="none" path1="Dernières actualités" />
                <div className="flexActu">
                    <Actu />
                </div>
                

            </div>
        )
    }
}

export default ActuPage