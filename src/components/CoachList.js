import React, { Component } from 'react';

import CoachCard from './CoachCard';

import PHOTO_template from '../images/PHOTO_template.png'

import '../css/PlanningEntrainement.css';

import '../css/CoachList.css';

class CoachList extends Component {
    render() {
        return(
            <div className="CoachList">
                {/* <CoachCard /> */}

                <div className="listCard">
                    <div className="Card">
                        <h2>NATIONALE 2 MASCULINE</h2>
                        <div className = "trainerCard">
                            <div id="line1">
                                <div className="trainerPicture">
                                    <img style= {{width:"153px"}} src={"https://docs.google.com/uc?id="+"1-P5nIP_ciozE4RFBYcDUyMwLJkA7NrHo"}></img>
                                </div>
                                <div className="trainerInformation">
                                    <div className="name">
                                        <p>M’HAMED <br/><span style={{fontSize:"24px"}}>BELQASMI</span></p>
                                        <div className="line"></div>
                                    </div>
                                    
                                    <div className="training">
                                        <div className="time">
                                            <p>MARDI - 20H00-22H30</p>
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

                                    <div className="training">
                                        <div className="time">
                                            <p>MERCREDI - 20H30-22H30</p>
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
                                <p>06 19 57 81 56</p>      
                            </div>

                        </div>
                    </div>
                
                    <div className="Card">
                        <h2>PRÉ-NATIONALE FÉMININE</h2>
                        <div className = "trainerCard">
                            <div id="line1">
                                <div className="trainerPicture">
                                    <img style= {{width:"153px"}} src={"https://docs.google.com/uc?id="+"1pgPmwWwI7ndRzhD8KxFJWc4cGagve_Ig"}></img>
                                </div>
                                <div className="trainerInformation">
                                    <div className="name">
                                        <p>WAGHLIS <br/><span style={{fontSize:"24px"}}>WOITIEE</span></p>
                                        <div className="line"></div>
                                    </div>

                                    <div className="training">
                                        <div className="time">
                                            <p>LUNDI - 20H30-22H30</p>
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

                                    <div className="training">
                                        <div className="time">
                                            <p>MARDI - 19H00-21H00</p>
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
                                            </svg> GYMNASE RENOIR</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="trainerPhone">
                                <p>06 11 08 62 67</p>      
                            </div>

                        </div>
                    </div>
                
                    <div className="Card">
                        <h2>RÉGIONALE MASCULINE</h2>
                        <div className = "trainerCard">
                            <div id="line1">
                                <div className="trainerPicture">
                                    <img style= {{width:"153px"}} src={"https://docs.google.com/uc?id="+"1-qDnNuVhsDWAqaaI137_3bFZrQ5TE9ev"}></img>
                                </div>
                                <div className="trainerInformation">
                                    <div className="name">
                                        <p>HICHAM <br/><span style={{fontSize:"24px"}}>SAADI</span></p>
                                        <div className="line"></div>
                                    </div>

                                    <div className="training">
                                        <div className="time">
                                            <p>MARDI - 20H30-22H30</p>
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
                                            </svg> GYMNASE RENOIR</p>
                                        </div>
                                    </div>

                                    <div className="training">
                                        <div className="time">
                                            <p>JEUDI - 20H30-22H30</p>
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
                                <p>06 01 33 93 28</p>      
                            </div>

                        </div>
                    </div>

                    <div className="Card">
                        <h2>M18 M COUPE DE FRANCE</h2>
                        <div className = "trainerCard">
                            <div id="line1">
                                <div className="trainerPicture">
                                    <img style= {{width:"153px"}} src={"https://docs.google.com/uc?id="+"1-qDnNuVhsDWAqaaI137_3bFZrQ5TE9ev"}></img>
                                </div>
                                <div className="trainerInformation">
                                    <div className="name">
                                        <p>HICHAM <br/><span style={{fontSize:"24px"}}>SAADI</span></p>
                                        <div className="line"></div>
                                    </div>

                                    <div className="training">
                                        <div className="time">
                                            <p>MARDI - 20H30-22H30</p>
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
                                            </svg> GYMNASE RENOIR</p>
                                        </div>
                                    </div>

                                    <div className="training">
                                        <div className="time">
                                            <p>JEUDI - 20H30-22H30</p>
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
                                <p>06 01 33 93 28</p>      
                            </div>

                        </div>
                    </div>

                    <div className="Card">
                        <h2>M18 F COUPE DE FRANCE</h2>
                        <div className = "trainerCard">
                            <div id="line1">
                                <div className="trainerPicture">
                                    <img style= {{width:"153px"}} src={"https://docs.google.com/uc?id="+"1pgPmwWwI7ndRzhD8KxFJWc4cGagve_Ig"}></img>
                                </div>
                                <div className="trainerInformation">
                                    <div className="name">
                                        <p>WAGHLIS <br/><span style={{fontSize:"24px"}}>WOITIEE</span></p>
                                        <div className="line"></div>
                                    </div>

                                    <div className="training">
                                        <div className="time">
                                            <p>VENDREDI - 18H15-20H30</p>
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
                                            </svg> GYMNASE RENOIR </p>
                                        </div>
                                    </div>

                                    
                                    
                                </div>
                            </div>
                            
                            <div className="trainerPhone">
                                <p>06 11 08 62 67</p>      
                            </div>

                        </div>
                    </div>

                    <div className="Card">
                        <h2>M15 M COUPE DE FRANCE</h2>
                        <div className = "trainerCard">
                            <div id="line1">
                                <div className="trainerPicture">
                                    <img style= {{width:"153px"}} src={"https://docs.google.com/uc?id="+"1FpOzATsJaoyHk5P65rF0ICzKQUe-itI-"}></img>
                                </div>
                                <div className="trainerInformation">
                                    <div className="name">
                                        <p>SAMIR<br/><span style={{fontSize:"24px"}}>AYARI</span></p>
                                        <div className="line"></div>
                                    </div>

                                    <div className="training">
                                        <div className="time">
                                            <p>MARDI - 18H15-20H30</p>
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
                                            </svg> GYMNASE DES COURTILLES </p>
                                        </div>
                                    </div>

                                    <div className="training">
                                        <div className="time">
                                            <p>VENDREDI - 18H15-20H30</p>
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
                                            </svg> GYMNASE DES COURTILLES </p>
                                        </div>
                                    </div>

                                    
                                </div>
                            </div>
                            
                            <div className="trainerPhone">
                                <p>07 63 74 88 48</p>      
                            </div>

                        </div>
                    </div>

                    <div className="Card">
                        <h2>M13 M COUPE DE FRANCE</h2>
                        <div className = "trainerCard">
                            <div id="line1">
                                <div className="trainerPicture">
                                    <img style= {{width:"153px"}} src={"https://docs.google.com/uc?id="+"1Yt99KuOth1UMT014QJun2nIGlbeTQ4iU"}></img>
                                </div>
                                <div className="trainerInformation">
                                    <div className="name">
                                        <p>SAMIR <br/><span style={{fontSize:"24px"}}>SETTA</span></p>
                                        <div className="line"></div>
                                    </div>

                                    <div className="training">
                                        <div className="time">
                                            <p>LUNDI - 18H15-20H30</p>
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
                                            </svg> GYMNASE DES COURTILLES </p>
                                        </div>
                                    </div>

                                    <div className="training">
                                        <div className="time">
                                            <p>MERCREDI - 14H00-16H00</p>
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
                                <p>06 95 12 30 71</p>      
                            </div>

                        </div>
                    </div>

                    <div className="Card">
                        <h2>M13 M2 COUPE DE FRANCE</h2>
                        <div className = "trainerCard">
                            <div id="line1">
                                <div className="trainerPicture">
                                    <img style= {{width:"153px"}} src={"https://docs.google.com/uc?id="+"11bugfIEan1UsUuAdtJm7NhfzDQzchzoZ"}></img>
                                </div>
                                <div className="trainerInformation">
                                    <div className="name">
                                        <p>BABA <br/><span style={{fontSize:"24px"}}>MAGASSA</span></p>
                                        <div className="line"></div>
                                    </div>

                                    <div className="training">
                                        <div className="time">
                                            <p>LUNDI - 18H15-20H30</p>
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
                                            </svg> GYMNASE DES COURTILLES </p>
                                        </div>
                                    </div>

                                    <div className="training">
                                        <div className="time">
                                            <p>MERCREDI - 14H00-16H00</p>
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
                                <p>06 85 06 57 83</p>      
                            </div>

                        </div>
                    </div>

                    <div className="Card">
                        <h2>M13 F1 COUPE DE FRANCE</h2>
                        <div className = "trainerCard">
                            <div id="line1">
                                <div className="trainerPicture">
                                    <img style= {{width:"153px"}} src={"https://docs.google.com/uc?id="+"1vtXA4GIcwCkR4NPsT4eEu06_l297rOb-"} ></img>
                                </div>
                                <div className="trainerInformation">
                                    <div className="name">
                                        <p>JUSTINE <br/><span style={{fontSize:"24px"}}>MANTA TEIXIDO</span></p>
                                        <div className="line"></div>
                                    </div>

                                    <div className="training">
                                        <div className="time">
                                            <p>LUNDI - 18H15-20H30</p>
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

                                    <div className="training">
                                        <div className="time">
                                            <p>VENDREDI - 18H05-20H15</p>
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
                                            </svg> GYMNASE POINCARÉ</p>
                                        </div>
                                    </div>

                                    
                                </div>
                            </div>
                            
                            <div className="trainerPhone">
                                <p>06 63 79 42 05</p>      
                            </div>

                        </div>
                    </div>

                    <div className="Card">
                        <h2>M13 F2 COUPE DE FRANCE</h2>
                        <div className = "trainerCard">
                            <div id="line1">
                                <div className="trainerPicture">
                                    <img src={PHOTO_template}></img>
                                </div>
                                <div className="trainerInformation">
                                    <div className="name">
                                        <p>YOHAN <br/><span style={{fontSize:"24px"}}>CHABERT</span></p>
                                        <div className="line"></div>
                                    </div>

                                    <div className="training">
                                        <div className="time">
                                            <p>LUNDI - 18H15-20H30</p>
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
                                            </svg> GYMNASE DES COURTILLES </p>
                                        </div>
                                    </div>

                                    <div className="training">
                                        <div className="time">
                                            <p>MERCREDI - 16H00-18H00</p>
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
                                            </svg> GYMNASE DES COURTILLES </p>
                                        </div>
                                    </div>

                                    
                                </div>
                            </div>
                            
                            <div className="trainerPhone">
                                <p>06 02 23 95 28</p>      
                            </div>

                        </div>
                    </div>

                    <div className="Card">
                        <h2>M11 M9 M7 PERI SCOLAIRE</h2>
                        <div className = "trainerCard">
                            <div id="line1">
                                <div className="trainerPicture">
                                    <img style= {{width:"153px"}} src={"https://docs.google.com/uc?id="+"1vtXA4GIcwCkR4NPsT4eEu06_l297rOb-"}></img>
                                </div>
                                <div className="trainerInformation">
                                    <div className="name">
                                        <p>JUSTINE <br/><span style={{fontSize:"24px"}}>MANTA TEIXIDO</span></p>
                                        <div className="line"></div>
                                    </div>

                                    <div className="training">
                                        <div className="time">
                                            <p>LUNDI - 16H30-18H00</p>
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
                                            </svg> GYMNASE DESCARTES </p>
                                        </div>
                                    </div>

                                    
                                </div>
                            </div>
                            
                            <div className="trainerPhone">
                                <p>06 02 23 95 28</p>      
                            </div>

                        </div>
                    </div>

                    <div className="Card">
                        <h2>M11 M9 M7 PERI SCOLAIRE</h2>
                        <div className = "trainerCard">
                            <div id="line1">
                                <div className="trainerPicture">
                                    <img style= {{width:"153px"}} src={"https://docs.google.com/uc?id="+"1-P5nIP_ciozE4RFBYcDUyMwLJkA7NrHo"}></img>
                                </div>
                                <div className="trainerInformation">
                                    <div className="name">
                                        <p>M’HAMED <br/><span style={{fontSize:"24px"}}>BELQASMI</span></p>
                                        <div className="line"></div>
                                    </div>

                                    <div className="training">
                                        <div className="time">
                                            <p>MARDI - 16H30-18H00</p>
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
                                            </svg> GYMNASE DESCARTES </p>
                                        </div>
                                    </div>

                                    <div className="training">
                                        <div className="time">
                                            <p>VENDREDI - 16H30-18H00</p>
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
                                            </svg> GYMNASE DESCARTES </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            
                            <div className="trainerPhone">
                                <p>06 19 57 81 56</p>      
                            </div>

                        </div>
                    </div>

                    <div className="Card">
                        <h2>M11 M9 M7 PERI SCOLAIRE</h2>
                        <div className = "trainerCard">
                            <div id="line1">
                                <div className="trainerPicture">
                                    <img src={PHOTO_template}></img>
                                </div>
                                <div className="trainerInformation">
                                    <div className="name">
                                        <p>YOHAN <br/><span style={{fontSize:"24px"}}>CHABERT</span></p>
                                        <div className="line"></div>
                                    </div>

                                    <div className="training">
                                        <div className="time">
                                            <p>LUNDI - 16H30-18H00</p>
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
                                            </svg> GYMNASE RENOIR </p>
                                        </div>
                                    </div>

                                    

                                    
                                </div>
                            </div>
                            
                            <div className="trainerPhone">
                                <p>06 63 79 42 05</p>      
                            </div>

                        </div>
                    </div>

                    <div className="Card">
                        <h2>M11 M9 M7 PERI SCOLAIRE</h2>
                        <div className = "trainerCard">
                            <div id="line1">
                                <div className="trainerPicture">
                                    <img src={PHOTO_template}></img>
                                </div>
                                <div className="trainerInformation">
                                    <div className="name">
                                        <p> <br/><span style={{fontSize:"24px"}}> </span></p>
                                        <div className="line"></div>
                                    </div>

                                    <div className="training">
                                        <div className="time">
                                            <p>MARDI - 16H30-18H00</p>
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
                                            </svg> GYMNASE POINCARÉ </p>
                                        </div>
                                    </div>

                                    
                                </div>
                            </div>
                            
                            <div className="trainerPhone">
                                <p></p>      
                            </div>

                        </div>
                    </div>

                    <div className="Card">
                        <h2>M11 M9 M7 PERI SCOLAIRE</h2>
                        <div className = "trainerCard">
                            <div id="line1">
                                <div className="trainerPicture">
                                    <img src={PHOTO_template}></img>
                                </div>
                                <div className="trainerInformation">
                                    <div className="name">
                                        <p>LOÏC <br/><span style={{fontSize:"24px"}}>DELATRONCHETTE</span></p>
                                        <div className="line"></div>
                                    </div>

                                    <div className="training">
                                        <div className="time">
                                            <p>JEUDI - 16H30-18H00</p>
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
                                            </svg> GYMNASE POINCARÉ </p>
                                        </div>
                                    </div>

                                    
                                </div>
                            </div>
                            
                            <div className="trainerPhone">
                                <p>06 02 23 95 28</p>      
                            </div>

                        </div>
                    </div>

                    <div className="Card">
                        <h2>M11 M9 M7 PERI SCOLAIRE</h2>
                        <div className = "trainerCard">
                            <div id="line1">
                                <div className="trainerPicture">
                                    <img src={PHOTO_template}></img>
                                </div>
                                <div className="trainerInformation">
                                    <div className="name">
                                        <p> <br/><span style={{fontSize:"24px"}}></span></p>
                                        <div className="line"></div>
                                    </div>

                                    <div className="training">
                                        <div className="time">
                                            <p>VENDREDI - 16H30-18H00</p>
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
                                            </svg> GYMNASE POINCARÉ </p>
                                        </div>
                                    </div>

                                    
                                </div>
                            </div>
                            
                            <div className="trainerPhone">
                                <p></p>      
                            </div>

                        </div>
                    </div>

                    <div className="Card">
                        <h2>M11 ELITE</h2>
                        <div className = "trainerCard">
                            <div id="line1">
                                <div className="trainerPicture">
                                    <img src={PHOTO_template}></img>
                                </div>
                                <div className="trainerInformation">
                                    <div className="name">
                                        <p>LOÏC<br/><span style={{fontSize:"24px"}}>DELATRONCHETTE</span></p>
                                        <div className="line"></div>
                                    </div>

                                    <div className="training">
                                        <div className="time">
                                            <p>MERCREDI - 16H00-18H30</p>
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
                                            </svg> GYMNASE DES COURTILLES </p>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            
                            <div className="trainerPhone">
                                <p>06 48 15 41 90</p>      
                            </div>

                        </div>
                    </div>

                    <div className="Card">
                        <h2>LOISIRS</h2>
                        <div className = "trainerCard">
                            <div id="line1">
                                <div className="trainerPicture">
                                    <img src={PHOTO_template}></img>
                                </div>
                                <div className="trainerInformation">
                                    <div className="name">
                                        <p>KÉVIN <br/><span style={{fontSize:"24px"}}></span></p>
                                        <div className="line"></div>
                                    </div>

                                    <div className="training">
                                        <div className="time">
                                            <p>LUNDI - 19H30-22H30</p>
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
                                            </svg> GYMNASE TEDDY RINER</p>
                                        </div>
                                    </div>

                                    <div className="training">
                                        <div className="time">
                                            <p>MERCREDI - 19H30-22H30</p>
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
                                            </svg> GYMNASE RENOIR</p>
                                        </div>
                                    </div>

                                    
                                </div>
                            </div>
                            
                            <div className="trainerPhone">
                                <p>06 33 76 01 09</p>      
                            </div>

                        </div>
                    </div>

                    <div className="Card">
                        <h2>LOISIR LIBRE</h2>
                        <div className = "trainerCard">
                            <div id="line1">
                                <div className="trainerPicture">
                                    <img style= {{width:"153px"}} src={"https://docs.google.com/uc?id="+"1-qDnNuVhsDWAqaaI137_3bFZrQ5TE9ev"}></img>
                                </div>
                                <div className="trainerInformation">
                                    <div className="name">
                                        <p>HICHAM<br/><span style={{fontSize:"24px"}}>SAADI</span></p>
                                        <div className="line"></div>
                                    </div>

                                    <div className="training">
                                        <div className="time">
                                            <p>LUNDI - 19H15-22H30</p>
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
                                            </svg> GYMNASE ASSIA EL HANNOUNI</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            
                            <div className="trainerPhone">
                                <p>06 01 33 93 28</p>      
                            </div>

                        </div>
                    </div>

                    <div className="Card">
                        <h2>SOURDE</h2>
                        <div className = "trainerCard">
                            <div id="line1">
                                <div className="trainerPicture">
                                    <img style= {{width:"153px"}} src={"https://docs.google.com/uc?id="+"1nw-PaIRgdFMraC5TSKgwy3D2LNQ1tJ9u"}></img>
                                </div>
                                <div className="trainerInformation">
                                    <div className="name">
                                        <p>YASSINE <br/><span style={{fontSize:"24px"}}>MOHAMED</span></p>
                                        <div className="line"></div>
                                    </div>
                                    
                                    <div className="training">
                                        <div className="time">
                                            <p>JEUDI - 19H00-22H30</p>
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
                                            </svg> GYMNASE ASSIA EL HANNOUNI </p>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            
                            <div className="trainerPhone">
                                <p>06 43 13 46 92</p>      
                            </div>

                        </div>
                    </div>    

                    <div className="Card">
                        <h2>LOISIR JEUNE - BABY VOLLEY - VOLLEY JEUNE</h2>
                        <div className = "trainerCard">
                            <div id="line1">
                                <div className="trainerPicture">
                                    <img style= {{width:"153px"}} src={"https://docs.google.com/uc?id="+"1nw-PaIRgdFMraC5TSKgwy3D2LNQ1tJ9u"}></img>
                                </div>
                                <div className="trainerInformation">
                                    <div className="name">
                                        <p>YASSINE <br/><span style={{fontSize:"24px"}}>MOHAMED</span></p>
                                        <div className="line"></div>
                                    </div>

                                    <div className="training">
                                        <div className="time">
                                            <p>MARDI - 18H30-19H30</p>
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
                                            </svg> GYMNASE TRUFFAUT</p>
                                        </div>
                                    </div>

                                    <div className="training">
                                        <div className="time">
                                            <p>SAMEDI - 10H15-11H30</p>
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
                                            </svg> GYMNASE SAINT-GENEVIÈVE</p>
                                        </div>
                                    </div>

                                    <div className="training">
                                        <div className="time">
                                            <p>SAMEDI - 11H15-13H30</p>
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
                                            </svg> GYMNASE SAINT-GENEVIÈVE</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="trainerPhone">
                                <p>06 43 13 46 92</p>      
                            </div>
                        </div>
                    </div>

                    <div className="Card">
                        <h2>LOISIR JEUNE - BABY VOLLEY - VOLLEY JEUNE</h2>
                        <div className = "trainerCard">
                            <div id="line1">
                                <div className="trainerPicture">
                                    <img style= {{width:"153px"}} src={"https://docs.google.com/uc?id="+"1HjongGjU3LqymyEQ88RDH-yvluLw1kWH"}></img>
                                </div>
                                <div className="trainerInformation">
                                    <div className="name">
                                        <p>MEDHI <br/><span style={{fontSize:"24px"}}>DEBARLE</span></p>
                                        <div className="line"></div>
                                    </div>

                                    <div className="training">
                                        <div className="time">
                                            <p>MARDI - 18H30-19H30</p>
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
                                            </svg> GYMNASE TRUFFAUT</p>
                                        </div>
                                    </div>

                                    <div className="training">
                                        <div className="time">
                                            <p>SAMEDI - 10H15-11H30</p>
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
                                            </svg> GYMNASE SAINT-GENEVIÈVE</p>
                                        </div>
                                    </div>

                                    <div className="training">
                                        <div className="time">
                                            <p>SAMEDI - 11H15-13H30</p>
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
                                            </svg> GYMNASE SAINT-GENEVIÈVE</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="trainerPhone">
                                <p></p>      
                            </div>
                        </div>
                    </div>

                    <div className="Card">
                        <h2>LOISIR JEUNE - BABY VOLLEY - VOLLEY JEUNE</h2>
                        <div className = "trainerCard">
                            <div id="line1">
                                <div className="trainerPicture">
                                    <img src={PHOTO_template}></img>
                                </div>
                                <div className="trainerInformation">
                                    <div className="name">
                                        <p>CORALIE <br/><span style={{fontSize:"24px"}}></span></p>
                                        <div className="line"></div>
                                    </div>

                                    <div className="training">
                                        <div className="time">
                                            <p>MARDI - 18H30-19H30</p>
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
                                            </svg> GYMNASE TRUFFAUT</p>
                                        </div>
                                    </div>

                                    <div className="training">
                                        <div className="time">
                                            <p>SAMEDI - 10H15-11H30</p>
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
                                            </svg> GYMNASE SAINT-GENEVIÈVE</p>
                                        </div>
                                    </div>

                                    <div className="training">
                                        <div className="time">
                                            <p>SAMEDI - 11H15-13H30</p>
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
                                            </svg> GYMNASE SAINT-GENEVIÈVE</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="trainerPhone">
                                <p></p>      
                            </div>
                        </div>
                    </div>

                    <div className="Card">
                        <h2>ENTREPRISE THALES</h2>
                        <div className = "trainerCard">
                            <div id="line1">
                                <div className="trainerPicture">
                                    <img src={PHOTO_template}></img>
                                </div>
                                <div className="trainerInformation">
                                    <div className="name">
                                        <p><br/><span style={{fontSize:"24px"}}></span></p>
                                        <div className="line"></div>
                                    </div>

                                    <div className="training">
                                        <div className="time">
                                            <p>LUNDI - 20H00-22H30</p>
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
                                            </svg> GYMNASE TEDDY RINER</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            
                            <div className="trainerPhone">
                                <p></p>      
                            </div>
                        </div>
                    </div>

                    <div className="Card">
                        <h2>VOLLEY INSTIT</h2>
                        <div className = "trainerCard">
                            <div id="line1">
                                <div className="trainerPicture">
                                    <img style= {{width:"153px"}} src={"https://docs.google.com/uc?id="+"1-qDnNuVhsDWAqaaI137_3bFZrQ5TE9ev"}></img>
                                </div>
                                <div className="trainerInformation">
                                    <div className="name">
                                        <p>HICHAM <br/><span style={{fontSize:"24px"}}>SAADI</span></p>
                                        <div className="line"></div>
                                    </div>

                                    <div className="training">
                                        <div className="time">
                                            <p>JEUDI - 18H15-20H30</p>
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
                                <p>06 01 33 93 28</p>      
                            </div>

                        </div>
                    </div>

                    <div className="Card">
                        <h2>OLD STARS</h2>
                        <div className = "trainerCard">
                            <div id="line1">
                                <div className="trainerPicture">
                                    <img src={PHOTO_template}></img>
                                </div>
                                <div className="trainerInformation">
                                    <div className="name">
                                        <p>MATHIAS <br/><span style={{fontSize:"24px"}}>PATIN</span></p>
                                        <div className="line"></div>
                                    </div>

                                    <div className="training">
                                        <div className="time">
                                            <p>SAMEDI - 10H00-12H00</p>
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
                                <p></p>      
                            </div>

                        </div>
                    </div>

            </div >
            
            
            </div>
        )
    }
}

export default CoachList 