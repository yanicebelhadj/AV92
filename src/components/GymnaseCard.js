import React, { Component } from 'react';

import renoir from '../images/renoir.png'
import view_renoir from '../images/view_renoir.png'

import client from '../Client'

import '../css/GymnaseCard.css';

class GymnaseCard extends Component {

    constructor() {
        super()
        this.state = {gymnaseInfo: []}
    }

    componentDidMount(){
        client.getEntries({
            'content_type' : 'gymnase', 'order': '-sys.createdAt'
          }).then((entries)=> {
            this.setState({gymnaseInfo: entries.items }) 
          })
    }

    render() {
        return(
            <>
                {this.state.gymnaseInfo.length === 0 ?
                    <div> Loading </div>
                    :
                    this.state.gymnaseInfo.map((GymnaseDetail) => {
                        return( 
                            <div key={GymnaseDetail.sys.id}>
                                <h2 id="title">{GymnaseDetail.fields.nomGymnase}</h2>
                                <p className="gymnase-card">
                                    <div className="maps" style = {{backgroundImage: `url(${GymnaseDetail.fields.maps.fields.file.url})`,backgroundSize: "90%"}} >
                                        <div className="streetview" style = {{backgroundImage: `url(${GymnaseDetail.fields.streetview.fields.file.url})`}}>
                    
                                        </div>
                                        <div className="info_gymnase">
                                            <div className="svg_loc">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="white" stroke-width="2"
                                                    strokeLinecap="round" stroke-linejoin="round" />
                                                <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="white" stroke-width="2" strokeLinecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </div>
                                            <div className="adress">
                                                <p>{GymnaseDetail.fields.adresse} <br/>{GymnaseDetail.fields.ville}</p>
                                            </div>
                                            <div className="phone">
                                                <p>{GymnaseDetail.fields.tel}</p>
                                            </div>
                                        </div>
                    
                                    </div>
                                </p>
                            </div>
                        )
                    })
                }
            </>
        )
    }
}

export default GymnaseCard