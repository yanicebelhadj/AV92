import React, { Component } from 'react';

import {Link, useLocation} from 'react-router-dom';

import '../css/FilterCoach.css';

const FilterCoach = () => {

    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");
    return(
        <div className="FilterCoach">
    
            <div id="categories" className="categories">

                <Link  to="/planningEntrainement" id="category" className = {splitLocation[1] === "planningEntrainement" ? "activePlanning" : "category"} >
                    <p>TOUS</p>
                </Link>

                <Link to="/N2" id="category" className={splitLocation[1] === "N2" ? "activePlanning" : "category"}>
                    <p>N2</p>
                </Link>

                <Link to="/PRENAT_F" id="category" className={splitLocation[1] === "PRENAT_F" ? "activePlanning" : "category"}>
                    <p>PRÉ-NAT FÉMININE</p>
                </Link>
                <Link to="/REGIONALE_M" id="category" className={splitLocation[1] === "REGIONALE_M" ? "activePlanning" : "category"}>
                    <p>RÉGIONALE MASCULINE</p>
                </Link>
                <Link to="/M18_M" id="category" className={splitLocation[1] === "M18_M" ? "activePlanning" : "category"}>
                    <p>M18 M</p>
                </Link>
                <Link to="/M18_F" id="category" className={splitLocation[1] === "M18_F" ? "activePlanning" : "category"}>
                    <p>M18 F</p>
                </Link>
                <Link to="/M15_M" id="category" className={splitLocation[1] === "M15_M" ? "activePlanning" : "category"}>
                    <p>M15 M</p>
                </Link>
                <Link to="/M13_M" id="category" className={splitLocation[1] === "M13_M" ? "activePlanning" : "category"}>
                    <p>M13 M</p>
                </Link>
                <Link to="/M13_M2" id="category" className={splitLocation[1] === "M13_M2" ? "activePlanning" : "category"}>
                    <p>M13 M2</p>
                </Link>
                <Link to="/M13_F" id="category"className={splitLocation[1] === "M13_F" ? "activePlanning" : "category"}>
                    <p>M13 F</p>
                </Link>

                <Link to="/PERI_SCOLAIRE" id="category" className={splitLocation[1] === "PERI_SCOLAIRE" ? "activePlanning" : "category"}>
                    <p>PERI SCOLAIRE</p>
                </Link>
                <Link to="/M11" id="category" className={splitLocation[1] === "M11" ? "activePlanning" : "category"}>
                    <p>M11 ELITE</p>
                </Link>
                <Link to="/LOISIRS" id="category" className={splitLocation[1] === "LOISIRS" ? "activePlanning" : "category"}>
                    <p>LOISIRS</p>
                </Link>
                <Link to="/VOLLEY_POUR_TOUS" id="category" className={splitLocation[1] === "VOLLEY_POUR_TOUS" ? "activePlanning" : "category"}>
                    <p>VOLLEY POUR TOUS</p>
                </Link>
                <Link to="/ENTREPRISE_THALES" id="category" className={splitLocation[1] === "ENTREPRISE_THALES" ? "activePlanning" : "category"}>
                    <p>ENTREPRISE THALES</p>
                </Link>
                <Link to="/VOLLEY_INSTIT" id="category" className={splitLocation[1] === "VOLLEY_INSTIT" ? "activePlanning" : "category"}>
                    <p>VOLLEY INSTIT</p>
                </Link>
                <Link to="/OLD_STARS" id="category" className={splitLocation[1] === "OLD_STARS" ? "activePlanning" : "category"}>
                    <p>OLD STARS</p>
                </Link>                    

            </div>
        </div>
    )
}

export default FilterCoach 