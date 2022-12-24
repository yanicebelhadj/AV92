import React from 'react'
import '../css/PlanningEntrainement.css'
import PHOTO_template from '../images/PHOTO_template.png'

import FilterCoach from '../components/FilterCoach'
import Banniere from '../components/Banniere'
import Navbar from '../components/Navbar'


function PERI_SCOLAIRE(){
    return(

        <div className="containerPlanning">

        <Banniere precedentPage = "/planningEntrainement" path1="Le Club" path2="Planning des entraînements" pathEnGras={window.location.pathname === "/N2" ?
                                                                                                                            "Nationale 2 Masculine"
                                                                                                                            :window.location.pathname === "/PRENAT_F"?
                                                                                                                            "Pré Nationale Féminine"
                                                                                                                            :window.location.pathname === "/REGIONALE_M"?
                                                                                                                            "Régionale Masculine"
                                                                                                                            :window.location.pathname === "/M18_F"?
                                                                                                                            "M18 Filles CDF"
                                                                                                                            :window.location.pathname === "/M18_M"?
                                                                                                                            "M18 Garçons CDF"
                                                                                                                            :window.location.pathname === "/Equipe_M15_M"?
                                                                                                                            "M15 G CDF et Championnat Régional"
                                                                                                                            :window.location.pathname === "/Equipe_M13_F"?
                                                                                                                            "M13 F CDF et Championnat Régional"
                                                                                                                            :window.location.pathname === "/Equipe_M13_M"?
                                                                                                                            "M13 G CDF et Championnat Régional"
                                                                                                                            :window.location.pathname === "/Equipe_M13_M"?
                                                                                                                            "M13 G CDF et Championnat Régional"
                                                                                                                            :window.location.pathname === "/PERI_SCOLAIRE"?
                                                                                                                            "PERI SCOLAIRE"
                                                                                                                            :window.location.pathname === "/M11"?
                                                                                                                            "M11 ELITE"
                                                                                                                            :window.location.pathname === "/LOISIRS"?
                                                                                                                            "LOISIRS"
                                                                                                                            :window.location.pathname === "/VOLLEY_POUR_TOUS"?
                                                                                                                            "VOLLEY POUR TOUS"
                                                                                                                            :window.location.pathname === "/ENTREPRISE_THALES"?
                                                                                                                            "ENTREPRISE THALES"
                                                                                                                            :window.location.pathname === "/VOLLEY_INSTIT"?
                                                                                                                            "VOLLEY INSTIT"
                                                                                                                            :window.location.pathname === "/OLD_STARS"?
                                                                                                                            "OLD STARS"
                                                                                                                            :null}/>                       <Navbar />

            <div>
                <h1>PLANNING DES ENTRAÎNEMENTS</h1>

                <FilterCoach />
                
                <div className="listCard">
                   

                    <div>
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

                    <div>
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

                    <div>
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

                    <div>
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

                    <div>
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

                    <div>
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


                </div >
            </div>

        </div>

    )
}

export default PERI_SCOLAIRE;