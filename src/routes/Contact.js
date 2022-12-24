import React, { Component } from 'react';

import Navbar from '../components/Navbar';
import Banniere from '../components/Banniere';
import ContactDetails from '../components/ContactDetails';

import '../css/Contact.css';

class Contact extends Component {
    render() {
        return(
            <div className="Contact">
                <Navbar />
                <Banniere retourButton="none" path1="Le Club" pathEnGras="Contact"/>

                <ContactDetails />

            </div>
        )
    }
}

export default Contact