import React, { Component } from 'react';

import '../css/TarifList.css';

class TarifList extends Component {
    render() {
        return(
            <div className="TarifList">
                <table>
                    <thead>
                        <tr>
                            <th scope="col">SECTION</th>
                            <th scope="col">ASNIÈROIS.E</th>
                            <th scope="col">HORS ASNIÈROIS.E</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <th scope="row">SÉNIOR M20 - M17</th>
                            <td>
                                <div className ="TarifAsnieres">
                                    <p>230 €</p>
                                </div>
                            </td>
                            <td>240 €</td>
                        </tr>
                        <tr>
                            <th scope="row">M15 - M13</th>
                            <td>
                                <div className ="TarifAsnieres">
                                    <p>210 €</p>
                                </div>
                            </td>
                            
                            <td>220 €</td>
                        </tr>
                        <tr>
                            <th scope="row">M07 - M09 - M11</th>
                            <td>
                                <div className ="TarifAsnieres">
                                    <p>150 €</p>
                                </div>
                            </td>
                        
                            <td>160 €</td>
                        </tr>

                        <tr>
                            <th scope="row">VOLLEY POUR TOUS<br/><span className="thComplement" style={{fontFamily:"Ruda",fontSize:"12px"}}>COMPÉTITION</span></th>
                            <td>
                                <div className ="TarifAsnieres">
                                    <p>210 €</p>
                                </div>
                            </td>
                            
                            <td>220 €</td>
                        </tr>
                        
                        <tr>
                            <th scope="row">VOLLEY POUR TOUS<br/><span className="thComplement" style={{fontFamily:"Ruda",fontSize:"12px"}}>SANS COMPÉTITION</span></th>
                            <td>
                                <div className ="TarifAsnieres">
                                    <p>180 €</p>
                                </div>
                            </td>
                            
                            <td>190 €</td>
                        </tr>

                        <tr>
                            <th scope="row">VOLLEY INSTIT</th>
                            <td>
                                <div className ="TarifAsnieres">
                                    <p>100 €</p>
                                </div>
                            </td>
                        
                            <td>110 €</td>
                        </tr>
                    </tbody>

                </table>


            </div>
        )
    }
}

export default TarifList 