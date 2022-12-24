import React from 'react'
import '../css/PlanningEntrainement.css'

import courtilles from '../images/courtilles.png'
import poincarre from '../images/poincarre.png'

import view_courtilles from '../images/view_courtilles.png'
import view_poincarre from '../images/view_poincarre.png'

import FilterCoach from '../components/FilterCoach'
import Banniere from '../components/Banniere'
import Navbar from '../components/Navbar'

import {Link} from 'react-router-dom'

function M13_F(){
    return(

        <div className="containerPlanning">

        <Banniere precedentPage = "/planningEntrainement" path1="Le Club" path2="Planning des entraînements" pathEnGras={window.location.pathname === "/N2" ?
                                                                                                                            "Nationale 2 Masculine"
                                                                                                                            :window.location.pathname === "/Prenat"?
                                                                                                                            "Pré Nationale Féminine"
                                                                                                                            :window.location.pathname === "/RegM"?
                                                                                                                            "Régionale Masculine"
                                                                                                                            :window.location.pathname === "/M18_F"?
                                                                                                                            "M18 Filles CDF"
                                                                                                                            :window.location.pathname === "/M18_M"?
                                                                                                                            "M18 Garçons CDF"
                                                                                                                            :window.location.pathname === "/M15_M"?
                                                                                                                            "M15 G CDF et Championnat Régional"
                                                                                                                            :window.location.pathname === "/M13_F"?
                                                                                                                            "M13 F CDF et Championnat Régional"
                                                                                                                            :window.location.pathname === "/M13_M"?
                                                                                                                            "M13 G CDF et Championnat Régional"
                                                                                                                            :window.location.pathname === "/M13_M2"?
                                                                                                                            "M13 G CDF et Championnat Régional"
                                                                                                                            :window.location.pathname === "/PERI_SCOLAIRE"?
                                                                                                                            "PERI SCOLAIRE"
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
                        <h2>M13 F COUPE DE FRANCE</h2>
                        <div className = "OnePlace">
                            <div className="column1" >
                                <div className="row1">
                                    <div className="trainerPicture" >
                                        <img style= {{width:"293px"}} src={"https://docs.google.com/uc?id="+"1vtXA4GIcwCkR4NPsT4eEu06_l297rOb-"}></img>
                                    </div>
                                </div>
                                <div className="row2">
                                    06 63 79 42 05
                                </div>
                            </div>

                            <div className="column2" >
                                <div className="row1" >
                                    <h1>JUSTINE MANTA TEXEIDO</h1>
                                    <h2>COACH M13 F</h2>
                                </div>
                                <div className="line"></div>

                                <div className="row2" style={{padding:"15px",flexDirection:"column"}}>
                                    
                                    <div className="training-card">
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
                                                    <p>LUNDI - 18H15-20H30</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div  className="training-card">
                                        <div className="maps" style = {{backgroundImage: "url(" + poincarre + ")",backgroundSize: "90%"}} >
                                            <div className="streetview" style = {{backgroundImage: "url(" +view_poincarre+ ")"}}>

                                            </div>
                                            
                                            <div className="info_training">
                                                    <div className="svg_loc">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="white" stroke-width="2" strokeLinecap="round" stroke-linejoin="round" />
                                                            <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="white" stroke-width="2" strokeLinecap="round" stroke-linejoin="round" />
                                                        </svg>  GYMNASE POINCARÉ
                                                    </div>
                                                    
                                                    <div className="training">
                                                        <p>VENDREDI - 18H05-20H15</p>
                                                    </div>
                                            </div>

                                        </div>
                                    </div>

                                    <Link to="/EquipeSenior/Equipe_M13_F">
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

export default M13_F;