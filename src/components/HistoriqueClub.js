import React, { Component } from 'react';

import client from '../Client'

import Historique from '../images/Historique.png'

import '../css/HistoriqueClub.css';

class HistoriqueClub extends Component {

    constructor() {
        super()
        this.state = {historique: []}
    }

    componentDidMount(){
        client.getEntries({
            'content_type' : 'VieDuClub', 'order': '-sys.createdAt'
          }).then((entries)=> {
            this.setState({historique: entries.items }) 
          })
    }
    
    render() {
        return(
            <div className="HistoriqueClub">
                {
                    this.state.historique.length === 0 ?
                    <div> Loading </div>
                    :
                    
                    <>
                        <div id = "ImgHistor" style = {{backgroundImage: "url(" +this.state.historique[0].fields.HistoriqueImage.fields.file.url+ ")"}}>
                            <div className = "Overlay">
                                <h2>HISTORIQUE</h2>
                            </div>
                        </div>
                        <div className="TextHistor">
                            <h1>PALMARÈS</h1>
                            <p>
                                {this.state.historique[0].fields.textHistorique}
                            </p>
                        </div>

                    </>
                        
                }
                
            </div>
        )
    }
}

export default HistoriqueClub 