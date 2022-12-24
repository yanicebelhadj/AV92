import React from 'react'
import '../css/PlanningEntrainement.css'

import courtilles from '../images/courtilles.png'
import renoir from '../images/renoir.png'

import view_courtilles from '../images/view_courtilles.png'
import view_renoir from '../images/view_renoir.png'

import FilterCoach from '../components/FilterCoach'
import Banniere from '../components/Banniere'
import Navbar from '../components/Navbar'

import {Link} from 'react-router-dom'

function REGIONALE_M(){
    return(

        <div className="containerPlanning">

<Banniere precedentPage = "/planningEntrainement" path1="Le Club" path2="Planning des entraînements" pathEnGras={window.location.pathname === "/N2" ?
                                                                                                                            "Nationale 2 Masculine"
                                                                                                                            :window.location.pathname === "/PRENAT_F"?
                                                                                                                            "Pré Nationale Féminine"
                                                                                                                            :window.location.pathname === "/REGIONALE_M"?
                                                                                                                            "Régionale Masculine"
                                                                                                                            :window.location.pathname === "/Equipe_M18_F"?
                                                                                                                            "M18 Filles CDF"
                                                                                                                            :window.location.pathname === "/Equipe_M18_M"?
                                                                                                                            "M18 Garçons CDF"
                                                                                                                            :window.location.pathname === "/Equipe_M15_M"?
                                                                                                                            "M15 G CDF et Championnat Régional"
                                                                                                                            :window.location.pathname === "/Equipe_M13_F"?
                                                                                                                            "M13 F CDF et Championnat Régional"
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
                                                                                                                            :null}/>                
            <Navbar />

            <div>
                    <h1>PLANNING DES ENTRAÎNEMENTS</h1>

                    <FilterCoach />
                
                    <div className="containerCard" >
                        <h2>RÉGIONALE MASCULINE</h2>
                        <div className = "OnePlace">
                            <div className="column1" >
                                <div className="row1">
                                    <div className="trainerPicture" >
                                        <img style= {{width:"293px"}} src={"https://docs.google.com/uc?id="+"1-qDnNuVhsDWAqaaI137_3bFZrQ5TE9ev"}></img>
                                    </div>
                                </div>
                                <div className="row2">
                                    06 19 57 81 56
                                </div>
                            </div>

                            <div className="column2ManyPlaces" >
                                <div className="row1" >
                                    <h1>HICHAM SAADI</h1>
                                    <h2>COACH RÉGIONALE MASCULINE/ M18 M</h2>
                                </div>
                                <div className="line"></div>
                                <div className="row2" style={{padding:"15px"}}>
                                    
                                    <div className="training-card">
                                        <div className="maps" style = {{backgroundImage: "url(" + renoir + ")",backgroundSize: "90%"}} >
                                            <div className="streetview" style = {{backgroundImage: "url(" +view_renoir+ ")"}}>

                                            </div>

                                            <div className="info_training">
                                                <div className="svg_loc">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="white" stroke-width="2" strokeLinecap="round" stroke-linejoin="round" />
                                                        <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="white" stroke-width="2" strokeLinecap="round" stroke-linejoin="round" />
                                                    </svg> GYMNASE RENOIR
                                                </div>
                                                
                                                <div className="training">
                                                    <p>MARDI - 20H30-22H30</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div  className="training-card">
                                        <div className="maps" style = {{backgroundImage: "url(" + courtilles + ")",backgroundSize: "90%"}} >
                                            <div className="streetview" style = {{backgroundImage: "url(" +view_courtilles+ ")"}}>

                                            </div>
                                            
                                            <div className="info_training">
                                                    <div className="svg_loc">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="white" stroke-width="2" strokeLinecap="round" stroke-linejoin="round" />
                                                            <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="white" stroke-width="2" strokeLinecap="round" stroke-linejoin="round" />
                                                        </svg> GYMNASE DES COURTILLES
                                                    </div>
                                                    
                                                    <div className="training">
                                                        <p>JEUDI - 20H30-22H30</p>
                                                    </div>
                                            </div>

                                        </div>
                                    </div>

                                    <Link to="/EquipeSenior/RegM">
                                        <div className="redirectionTeam">
                                            Page Équipe
                                        </div>
                                    </Link>

                                </div>
                            </div>
                            
                        </div>
                            
                    </div>

            </div>

        </div>

    )
}

export default REGIONALE_M;


