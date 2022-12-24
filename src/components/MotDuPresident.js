import React, { Component } from 'react';

import client from '../Client'

import '../css/MotDuPresident.css';

class MotDuPresident extends Component {

    constructor() {
        super()
        this.state = {MotPres: []}
    }

    componentDidMount(){
        client.getEntries({
            'content_type' : 'VieDuClub', 'order': '-sys.createdAt'
          }).then((entries)=> {
            this.setState({MotPres: entries.items }) 
          })
    }
    
    render() {
        return(
            <div className="MotDuPresident">

                {
                    this.state.MotPres.length === 0 ?
                    <div> Loading </div>
                    :
                    
                    <>
                        <div id = "ImgMotPres" style = {{backgroundImage: "url("+ this.state.MotPres[0].fields.MotDuPresidentImage.fields.file.url +")",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}>
                            <div className = "Overlay">
                                <h2>LE MOT DU PRÉSIDENT</h2>
                            </div>
                        </div>
                        <div className="TextMotPres">
                            <p>
                                
                                {this.state.MotPres[0].fields.TextMotDuPresident}
                            </p>
                        </div>

                    </>
                        
                }


                 
            </div>
        )
    }
}

export default MotDuPresident 