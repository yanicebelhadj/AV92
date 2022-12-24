import React, { Component } from 'react';

import '../css/CoachCard.css';

class CoachCard extends Component {
    render() {
        return(
            <div className="CoachCard">
                <div className="Card">
                    <h2>NATIONALE 2 MASCULINE</h2>
                    <div className = "trainerCard">
                        <div id="line1">
                            
                            <div className="trainerPicture">
                                <img style= {{width:"153px"}} src={"https://docs.google.com/uc?id="+"1-P5nIP_ciozE4RFBYcDUyMwLJkA7NrHo"}></img>
                            </div>
                            
                            <div className="trainerInformation">
                                <div className="name">
                                    <p>M’HAMED {/* this.state.coachCard.fields.prenom */}<br/><span style={{fontSize:"24px"}}>BELQASMI{/* this.state.coachCard.fields.nom */}</span></p>
                                    <div className="line"></div>
                                </div>
                                
                                {/*this.state.coachCard.fields.training1.time !== 0 ? 
                                    <div className="training">
                                        <div className="time">
                                            <p>MARDI - 20H00-22H30{}</p>
                                        </div>

                                        <div className="place">
                                            <p>
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0)">
                                                        <path d="M14.8546 6.66675C14.8546 11.3334 8.76905 15.3334 8.76905 15.3334C8.76905 15.3334 2.68347 11.3334 2.68347 6.66675C2.68347 5.07545 3.32463 3.54933 4.4659 2.42411C5.60716 1.29889 7.15505 0.666748 8.76905 0.666748C10.383 0.666748 11.9309 1.29889 13.0722 2.42411C14.2135 3.54933 14.8546 5.07545 14.8546 6.66675Z" stroke="#2B3968" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                        <path d="M8.769 8.66675C9.88933 8.66675 10.7975 7.77132 10.7975 6.66675C10.7975 5.56218 9.88933 4.66675 8.769 4.66675C7.64868 4.66675 6.74048 5.56218 6.74048 6.66675C6.74048 7.77132 7.64868 8.66675 8.769 8.66675Z" stroke="#2B3968" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0">
                                                            <rect width="16.2282" height="16" fill="white" transform="translate(0.654907)"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg> GYMNASE DES COURTILLES
                                            </p>
                                        </div>
                                    </div>
                                    :
                                    null*/
                                }

                                <div className="training">
                                    <div className="time">
                                        <p>MERCREDI - 20H30-22H30</p>
                                    </div>

                                    <div className="place">
                                        <p>
                                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0)">
                                                    <path d="M14.8546 6.66675C14.8546 11.3334 8.76905 15.3334 8.76905 15.3334C8.76905 15.3334 2.68347 11.3334 2.68347 6.66675C2.68347 5.07545 3.32463 3.54933 4.4659 2.42411C5.60716 1.29889 7.15505 0.666748 8.76905 0.666748C10.383 0.666748 11.9309 1.29889 13.0722 2.42411C14.2135 3.54933 14.8546 5.07545 14.8546 6.66675Z" stroke="#2B3968" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                    <path d="M8.769 8.66675C9.88933 8.66675 10.7975 7.77132 10.7975 6.66675C10.7975 5.56218 9.88933 4.66675 8.769 4.66675C7.64868 4.66675 6.74048 5.56218 6.74048 6.66675C6.74048 7.77132 7.64868 8.66675 8.769 8.66675Z" stroke="#2B3968" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0">
                                                        <rect width="16.2282" height="16" fill="white" transform="translate(0.654907)"/>
                                                    </clipPath>
                                                </defs>
                                            </svg> GYMNASE DES COURTILLES
                                        </p>
                                    </div>
                                </div>

                                <div className="training">
                                    <div className="time">
                                        <p>VENDREDI - 20H30-22H30</p>
                                    </div>

                                    <div className="place">
                                        <p><svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0)">
                                                <path d="M14.8546 6.66675C14.8546 11.3334 8.76905 15.3334 8.76905 15.3334C8.76905 15.3334 2.68347 11.3334 2.68347 6.66675C2.68347 5.07545 3.32463 3.54933 4.4659 2.42411C5.60716 1.29889 7.15505 0.666748 8.76905 0.666748C10.383 0.666748 11.9309 1.29889 13.0722 2.42411C14.2135 3.54933 14.8546 5.07545 14.8546 6.66675Z" stroke="#2B3968" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                <path d="M8.769 8.66675C9.88933 8.66675 10.7975 7.77132 10.7975 6.66675C10.7975 5.56218 9.88933 4.66675 8.769 4.66675C7.64868 4.66675 6.74048 5.56218 6.74048 6.66675C6.74048 7.77132 7.64868 8.66675 8.769 8.66675Z" stroke="#2B3968" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0">
                                                    <rect width="16.2282" height="16" fill="white" transform="translate(0.654907)"/>
                                                </clipPath>
                                            </defs>
                                        </svg> GYMNASE DES COURTILLES</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="trainerPhone">
                            <p>06 19 57 81 56{/* this.state.coachCard.fields.prenom */}</p>      
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CoachCard