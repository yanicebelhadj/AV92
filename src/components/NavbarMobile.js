import React, {useState} from 'react'
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/logo.png'
import Arrow from '../icon/Arrow.png'
import '../css/Navbar.css';

const NavbarMobile = () => {
    const [OuvertureNavigationBar, setNavigationBar] = useState(false);
    const [OuvertureSubNavigationBarClub, setSubNavigationBarClub] = useState(false);
    const [OuvertureSubNavigationBarInfo, setSubNavigationBarInfo] = useState(false);
    const [OuvertureSubNavigationBarEquipe, setSubNavigationBarEquipe] = useState(false);

    const Navbar = () => {
        if (OuvertureNavigationBar ===  false) {
            setNavigationBar(true);
        }
        else{
            setNavigationBar(false);
            setSubNavigationBarClub(false);
            setSubNavigationBarInfo(false);
            setSubNavigationBarEquipe(false);
        }                
    }

    const Club = () => {
        if (OuvertureSubNavigationBarClub === false) {
            setNavigationBar(true);
            setSubNavigationBarClub(true);
            setSubNavigationBarInfo(false);
            setSubNavigationBarEquipe(false);
        }
        else{
            setSubNavigationBarClub(false);
            setSubNavigationBarInfo(false);
            setSubNavigationBarEquipe(false);
            setNavigationBar(true);
        }                
    }

    const InfoPratique = () => {
        if (OuvertureSubNavigationBarInfo === false) {
            setNavigationBar(true);
            setSubNavigationBarClub(false);
            setSubNavigationBarInfo(true);
            setSubNavigationBarEquipe(false);
        }
        else{
            setSubNavigationBarClub(false);
            setSubNavigationBarInfo(false);
            setSubNavigationBarEquipe(false);
            setNavigationBar(true);
        }                
    }

    const Equipe = () => {
        if (OuvertureSubNavigationBarEquipe === false ) {
            setNavigationBar(true);
            setSubNavigationBarClub(false);
            setSubNavigationBarInfo(false);
            setSubNavigationBarEquipe(true);
        }
        else{
            setSubNavigationBarClub(false);
            setSubNavigationBarInfo(false);
            setSubNavigationBarEquipe(false);
            setNavigationBar(true);
        }                
    }


    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");
        
    return(
    <div className="NavbarMobile">

        <svg onClick={() => Navbar()} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21" stroke="#2B3968" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 6H21" stroke="#2B3968" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 18H21" stroke="#2B3968" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        
        <nav id="navbar" className= {`navbar ${OuvertureNavigationBar ? "isVisible" : ""}`} >
            <ul className="navbar-nav">

                <li  className = {splitLocation[1] === "Home" ? "activeNavbar" : "nav-item"}>
                    <Link to="/Home" className =  "nav-link">
                    <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path  d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="white" stroke-width="2" strokeLinecap="round"
                        strokeLinejoin="round" />
                        <path d="M9 22V12H15V22" stroke="white" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span id="link-text">Accueil</span>
                    </Link>
                </li>

                <li className = {splitLocation[1] === "ActuPage" ? "activeNavbar" : "nav-item"}>
                    <Link to="/ActuPage" className =  "nav-link">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 8H19C20.0609 8 21.0783 8.42143 21.8284 9.17157C22.5786 9.92172 23 10.9391 23 12C23 13.0609 22.5786 14.0783 21.8284 14.8284C21.0783 15.5786 20.0609 16 19 16H18" stroke="white" stroke-width="2" strokeLinecap="round"
                        strokeLinejoin="round" />
                        <path d="M2 8H18V17C18 18.0609 17.5786 19.0783 16.8284 19.8284C16.0783 20.5786 15.0609 21 14 21H6C4.93913 21 3.92172 20.5786 3.17157 19.8284C2.42143 19.0783 2 18.0609 2 17V8Z" stroke="white" stroke-width="2" strokeLinecap="round"
                        strokeLinejoin="round" />
                        <path d="M6 1V4" stroke="white" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10 1V4" stroke="white" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M14 1V4" stroke="white" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span id="link-text">Actualités</span>
                    </Link>
                </li>

                <li onClick={Club} id="leClub" className = {splitLocation[1] === "VieDuClub" ? "activeNavbar" : "nav-item"}>
                    <div to="/PlanningEntrainement" className="nav-link">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                        d="M21 15.9999V7.9999C20.9996 7.64918 20.9071 7.30471 20.7315 7.00106C20.556 6.69742 20.3037 6.44526 20 6.2699L13 2.2699C12.696 2.09437 12.3511 2.00195 12 2.00195C11.6489 2.00195 11.304 2.09437 11 2.2699L4 6.2699C3.69626 6.44526 3.44398 6.69742 3.26846 7.00106C3.09294 7.30471 3.00036 7.64918 3 7.9999V15.9999C3.00036 16.3506 3.09294 16.6951 3.26846 16.9987C3.44398 17.3024 3.69626 17.5545 4 17.7299L11 21.7299C11.304 21.9054 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9054 13 21.7299L20 17.7299C20.3037 17.5545 20.556 17.3024 20.7315 16.9987C20.9071 16.6951 20.9996 16.3506 21 15.9999Z"
                        stroke="white" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span id="link-text">Le club</span>
                    </div>                    
                </li>

                <li onClick={InfoPratique} id = "infoPratiques" className = {splitLocation[1] === "TarifInscription" ? "activeNavbar" : "nav-item"}>
                    <div className="nav-link ">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="white" stroke-width="2"
                            strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="white" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span id="link-text">Infos pratiques</span>
                    </div>
                </li>

                <li onClick= {Equipe} id = "Equipe" className = {splitLocation[1] === "" ? "activeNavbar" : "nav-item"}>
                    <div className="nav-link ">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8" stroke="white" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M15 2H9C8.44772 2 8 2.44772 8 3V5C8 5.55228 8.44772 6 9 6H15C15.5523 6 16 5.55228 16 5V3C16 2.44772 15.5523 2 15 2Z" stroke="white" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span id="link-text">Les Équipes</span>
                    </div>
                </li>

                <li className="nav-item" className = {splitLocation[1] === "ProgramPage" ? "activeNavbar" : "nav-item"}>
                    <Link to="/ProgramPage" className = "nav-link">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 6V22L8 18L16 22L23 18V2L16 6L8 2L1 6Z" stroke="white" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8 2V18" stroke="white" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16 6V22" stroke="white" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                    <span id="link-text">Le programme</span>
                    </Link>
                </li>

                <li onClick={Navbar} id ="menu" className="arrow-nav-item">
                    <img src = {Arrow} alt ="arrow"></img>
                </li>

            </ul>

        </nav>
        
        {/* ----------------------------------------SUBNAVBAR INFOS PRATIQUES------------------------------------------- */}

        <div className= {`navbar ${OuvertureSubNavigationBarClub ? "isVisible_subNavbar" : ""}`} id = "subNavbarClub">
            <h1 style={{marginTop:"5rem"}}>Le Club</h1>
            <ul>
                <li>
                    <Link to="/VieDuClub">Vie du club</Link>
                    <div>
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 13L7 7L0.999999 1" stroke="#2B3968" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </li>
                <div id="ligne"></div>
                <li>
                    <Link to="/PlanningEntrainement">Planning des<br/>entraînements</Link>
                    <div>
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 13L7 7L0.999999 1" stroke="#2B3968" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </li>
                <div id="ligne"></div>
                <li>
                    <Link to="/Contact">Contact</Link>
                    <div>
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 13L7 7L0.999999 1" stroke="#2B3968" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </li>
            </ul>
        </div>

        {/* ----------------------------------------SUBNAVBAR INFOS PRATIQUES------------------------------------------- */}


        <div className= {`navbar ${OuvertureSubNavigationBarInfo ? "isVisible_subNavbar" : ""}`} id = "subNavbarClub">
            <h1 style={{marginTop:"5rem"}}>Infos Pratiques</h1>
            <ul>
                <li>
                    <Link to="/TarifInscription">Tarifs & Inscription</Link>
                    <div>
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 13L7 7L0.999999 1" stroke="#2B3968" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </li>
                <div id="ligne"></div>
                <li>
                    <Link to="/PlanAccesGymnase">Plan d’accès aux<br/>Gymnases</Link>
                    <div>
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 13L7 7L0.999999 1" stroke="#2B3968" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </li>
            </ul>
        </div>

        {/* ----------------------------------------SUBNAVBAR EQUIPE------------------------------------------- */}

        <div className= {`navbar ${OuvertureSubNavigationBarEquipe ? "isVisible_subNavbar" : ""}`} id = "subNavbarClub" style={{margin:"0",overflow:"scroll"}}>
            <h1 style={{margin:"5rem 0 20px 0"}}>Les Équipes</h1>
            <h2>Seniors</h2>
            <div id="ligne" style={{border: "1px solid rgba(255, 255, 255, 0.4)"}}></div>

            <ul>
                <li onClick={() => Navbar()}>
                    <Link  to="/EquipeSenior/N2">Nationale 2 Masculine</Link>
                    <div>
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 13L7 7L0.999999 1" stroke="#2B3968" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </li>
                <div id="ligne"></div>
                <li onClick={() => Navbar()}>
                    <Link to="/EquipeSenior/Prenat">Pré Nationale Féminine</Link>
                    <div>
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 13L7 7L0.999999 1" stroke="#2B3968" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </li>
                <div id="ligne"></div>
                <li onClick={() => Navbar()}>
                    <Link to="/EquipeSenior/RegM">Régionale Masculine</Link>
                    <div>
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 13L7 7L0.999999 1" stroke="#2B3968" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </li>
            </ul>
            
            <h2 style={{margin:"0 0 20px 0"}}>Jeunes</h2>
            <ul>
                <li onClick={() => Navbar()}>
                    <Link to="/EquipeSenior/Equipe_M18_F">M18 Filles CDF</Link>
                    <div>
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 13L7 7L0.999999 1" stroke="#2B3968" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </li>
                <div id="ligne"></div>
                <li onClick={() => Navbar()}> 
                    <Link to="/EquipeSenior/Equipe_M18_M">M18 Garçons CDF</Link>
                    <div>
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 13L7 7L0.999999 1" stroke="#2B3968" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </li>
                <div id="ligne"></div>
                <li onClick={() => Navbar()}>
                    <Link to="/EquipeSenior/Equipe_M15_M">M15 G CDF et <br/>Championnat Régional</Link>
                    <div>
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 13L7 7L0.999999 1" stroke="#2B3968" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </li>
                <div id="ligne"></div>
                <li onClick={() => Navbar()}>
                    <Link to="/EquipeSenior/Equipe_M13_F">M13 F CDF et <br/>Championnat Régional</Link>
                    <div>
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 13L7 7L0.999999 1" stroke="#2B3968" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </li>
                <div id="ligne"></div>
                <li onClick={() => Navbar()}>
                    <Link to="/EquipeSenior/Equipe_M13_M">M13 G CDF et <br/>Championnat Régional</Link>
                    <div>
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 13L7 7L0.999999 1" stroke="#2B3968" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </li>
                <div id="ligne"></div>
                <li onClick={() => Navbar()}>
                    <Link to="/EquipeSenior/Equipe_M11">M11 CDF </Link>
                    <div>
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 13L7 7L0.999999 1" stroke="#2B3968" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </li>
            </ul>
            
        </div>
        
    </div>
    
    
  )
}

export default NavbarMobile;