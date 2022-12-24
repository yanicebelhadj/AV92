import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import map from '../images/Map.png'

import '../css/ContactDetails.css';

class ContactDetails extends Component {
    render() {
        return(
            <div className="ContactDetails">
                    <img src ={map} alt="map"></img>
                    <div className="textContact">
                        <h1>ASNIERES VOLLEY 92</h1>

                        <h2>Gymnase des Courtilles <br/><br/></h2>
                        <p>
                            1 boulevard Pierre de Coubertin <br/>
                            92600 ASNIERES SUR SEINE <br/>
                            Tel. 01 47 92 01 04<br/>
                            email : asnieresvolley92@gmail.com<br/>
                            http://www.asnieres-volley92.com<br/><br/>
                        </p>

                        <p>Horaire de permanence du secrétariat lundi/mardi/jeudi/vendredi de 10h à 15h</p>

                        <Link className="btn btn-primary" to= "/planningEntrainement" role="button">Planning des entraînements</Link>

                    </div>
            </div>
        )
    }
}

export default ContactDetails