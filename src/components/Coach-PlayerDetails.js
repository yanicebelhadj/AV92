import React, { Component } from 'react';

import client from '../Client'

import '../css/Coach-PlayerDetails.css';

class CoachPlayerDetails extends Component {
    constructor() {
        super()
        this.state = {equipe: []}
    }

    componentDidMount(){
        client.getEntries({
            'content_type' : 'joueur', 'order': '-sys.createdAt'
          }).then((entries)=> {
            this.setState({equipe: entries.items }) 
          })
    }
    render() {
        return(
            <div className="CoachPlayerDetails">
                
                    <div className="textArea">
                        <div className="Nationalite">
                            <h3>Nationalité</h3>
                            <p>{console.log(this.props)}</p>
                        </div>
                        <div className="line"></div>
                        <div className="Age">
                            <h3>Âge</h3>
                            <p>28 ans</p>
                        </div>
                        <div className="line"></div>
                        <div className="Position">
                            <h3>Position</h3>
                            <p>Libéro</p>
                        </div>
                        <div className="line"></div>
                        <div className="Age">
                            <h3>Taille</h3>
                            <p>180 cm</p>
                        </div>
                        <div className="line"></div>
                        <div className="Main_Forte"></div>
                        <div className="Age">
                            <h3>Main Forte</h3>
                            <p>Droitier</p>
                        </div>
                        <div className="line"></div>
                        <div className="Action_pref">
                            <h3>Action Préférée</h3>
                            <p>La défense</p>
                        </div>
                        <div className="line"></div>
                        <div className="Anciens_Clubs">
                            <h3>Anciens Clubs</h3>
                            <p>CAJVB</p>
                        </div>
                    </div>
                
            </div>
        )
    }
}

export default CoachPlayerDetails