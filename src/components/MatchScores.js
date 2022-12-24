import React, {useState, useEffect} from 'react'

import axios from'axios'
import {Link} from 'react-router-dom';

import '../css/MatchScores.css'

import logoTransparent from '../images/logoTransparent.png'
import BandeauProgramme from "../icon/BandeauProgramme.png"


function MatchScores(){

    const [OuvertureBandeauProgramme, setBandeauProgramme] = useState(false);

    const ProgrammeScores = () => {
        if (OuvertureBandeauProgramme ==  false) {
            setBandeauProgramme(true);
        }
        else{
            setBandeauProgramme(false);
        }                
    }

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios
            .get("https://av92.npkn.net/av92-matchups")
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[])

    function convertToDate(date){
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

        let date_cut = date.split('T')[0]
        let date_nb = date_cut.split("-")

        let year = parseInt(date_nb[0])
        let month = parseInt(date_nb[1])
        let day = parseInt(date_nb[2])

        const event = new Date(year, month, day)
        let finalDate = event.toLocaleDateString(undefined, options)

        return finalDate
    }

    function convertToTime(date){
        let time_cut = date.split('T')[1].split(':')
        time_cut.length =2
        let finalTime = time_cut.join('h')
        return finalTime
    }

    return(

        <div className= {`MatchScores ${OuvertureBandeauProgramme ? "ScoreIsVisible" : ""}`}>
            
            <img className="bandeauProgramme" onClick={ProgrammeScores} src={BandeauProgramme} />

            <div className= "right">

                <div className="fond-logo">
                    <img id="imgFondLogo" src={logoTransparent} alt="logo"/>
                </div>

                <div className="container" id="title">
                    <h1>LE PROGRAMME DU WEEK END</h1>
                </div>

                
                <div className="container">
                    <div className="headerMatch">
                        <h2>{Object.keys(posts).length === 0 ? <div>Loading</div> : convertToDate(posts["NATIONALE 2 M"].prevMatchup.matchupDate)}</h2>
                        <p>NATIONALE 2</p>
                    </div>
                
                    <div className="matchFutur">

                        <div className="team1">
                        
                            <img id="logoEquipe" src={Object.keys(posts).length === 0 ? <div>Loading</div> :posts["NATIONALE 2 M"].prevMatchup.teamHomeLogo} alt="logo"/>
                        </div>

                        <div className="info">
                            {
                                Object.keys(posts).length === 0 ? 
                                <div>Loading</div> :
                                <p>{Object.keys(posts).length === 0 ? <div>Loading</div> :posts["NATIONALE 2 M"].prevMatchup.court}</p>
                            }
                            <p>GYMNASE DES COURTILLES</p>

                            <div className="results">
                                <div className="nameTeam1">
                                    <h3>{Object.keys(posts).length === 0 ? <div>Loading</div> :posts["NATIONALE 2 M"].prevMatchup.teamHome}</h3>
                                </div>

                                <div className="score">
                                    <h3>{Object.keys(posts).length === 0 ? <div>Loading</div> :posts["NATIONALE 2 M"].prevMatchup.scoreHome} / {Object.keys(posts).length === 0 ? <div>Loading</div> :posts["NATIONALE 2 M"].prevMatchup.scoreAway}</h3>
                                </div>

                                <div className="nameTeam1">
                                    <h3>{Object.keys(posts).length === 0 ? <div>Loading</div> :posts["NATIONALE 2 M"].prevMatchup.teamAway}</h3>
                                </div>
                            </div>
                            <p>{Object.keys(posts).length === 0 ? <div>Loading</div> :convertToTime(posts["NATIONALE 2 M"].prevMatchup.matchupDate)}</p>
                        </div>

                        <div className="team2">
                            <img id="logoEquipe" src={Object.keys(posts).length === 0 ? <div>Loading</div> :posts["NATIONALE 2 M"].prevMatchup.teamAwayLogo} alt="logo"/>
                        </div>

                    </div>
                </div>

                <div className="container">
                    <div className="headerMatch">
                        <h2>{Object.keys(posts).length === 0 ? <div>Loading</div> :convertToDate(posts["NATIONALE 2 M"].nextMatchup.matchupDate)}</h2>
                        <p>NATIONALE 2</p>
                    </div>
                    
                    <div className="matchFutur">

                        <div className="team1">
                        
                            <img id="logoEquipe" src={Object.keys(posts).length === 0 ? <div>Loading</div> :posts["NATIONALE 2 M"].nextMatchup.teamHomeLogo} alt="logo"/>
                        </div>

                        <div className="info">
                            {
                                Object.keys(posts).length === 0 ? 
                                <div>Loading</div> :
                                <p>{Object.keys(posts).length === 0 ? <div>Loading</div> :posts["NATIONALE 2 M"].nextMatchup.court}</p>
                            }

                            <div className="results">
                                <div className="nameTeam1">
                                    <h3>{Object.keys(posts).length === 0 ? <div>Loading</div> :posts["NATIONALE 2 M"].nextMatchup.teamHome}</h3>
                                </div>

                                <div className="score">
                                    <h3>{Object.keys(posts).length === 0 ? <div>Loading</div> :posts["NATIONALE 2 M"].nextMatchup.scoreHome} / {Object.keys(posts).length === 0 ? <div>Loading</div> :posts["NATIONALE 2 M"].nextMatchup.scoreAway}</h3>
                                </div>

                                <div className="nameTeam1">
                                    <h3>{Object.keys(posts).length === 0 ? <div>Loading</div> :posts["NATIONALE 2 M"].nextMatchup.teamAway}</h3>
                                </div>
                            </div>
                            <p>{Object.keys(posts).length === 0 ? <div>Loading</div> :convertToTime(posts["NATIONALE 2 M"].nextMatchup.matchupDate)}</p>
                        </div>

                        <div className="team2">
                            <img id="logoEquipe" src={Object.keys(posts).length === 0 ? <div>Loading</div> :posts["NATIONALE 2 M"].nextMatchup.teamAwayLogo} alt="logo"/>
                        </div>

                    </div>
                </div>

                <div className="container">
                    <div className="headerMatch">
                        <h2>{Object.keys(posts).length === 0 ? <div>Loading</div> :convertToDate(posts["NATIONALE 2 M"].secondNextMatchup.matchupDate)}</h2>
                        <p>NATIONALE 2</p>
                    </div>
                
                    <div className="matchFutur">

                        <div className="team1">
                        
                            <img id="logoEquipe" src={Object.keys(posts).length === 0 ? <div>Loading</div> :posts["NATIONALE 2 M"].secondNextMatchup.teamHomeLogo} alt="logo"/>
                        </div>
                        
                        <div className="info">
                            {
                                Object.keys(posts).length === 0 ? 
                                <div>Loading</div> :
                                <p>{Object.keys(posts).length === 0 ? <div>Loading</div> :posts["NATIONALE 2 M"].secondNextMatchup.court}</p>
                            }

                            <div className="results">
                                <div className="nameTeam1">
                                    <h3>{Object.keys(posts).length === 0 ? <div>Loading</div> :posts["NATIONALE 2 M"].secondNextMatchup.teamHome}</h3>
                                </div>

                                <div className="score">
                                    <h3>{Object.keys(posts).length === 0 ? <div>Loading</div> :posts["NATIONALE 2 M"].secondNextMatchup.scoreHome} / {Object.keys(posts).length === 0 ? <div>Loading</div> :posts["NATIONALE 2 M"].secondNextMatchup.scoreAway}</h3>
                                </div>

                                <div className="nameTeam1">
                                    <h3>{Object.keys(posts).length === 0 ? <div>Loading</div> :posts["NATIONALE 2 M"].secondNextMatchup.teamAway}</h3>
                                </div>
                            </div>
                            <p>{Object.keys(posts).length === 0 ? <div>Loading</div> :convertToTime(posts["NATIONALE 2 M"].secondNextMatchup.matchupDate)}</p>
                        </div>

                        <div className="team2">
                            <img id="logoEquipe" src={Object.keys(posts).length === 0 ? <div>Loading</div> :posts["NATIONALE 2 M"].secondNextMatchup.teamAwayLogo} alt="logo"/>
                        </div>

                    </div>
                </div>


                <div className="container">
                    <div className="headerMatch">
                        <h2>{Object.keys(posts).length === 0 ? <div>Loading</div> :convertToDate(posts["PRENAT F"].prevMatchup.matchupDate)}</h2>
                        <p>PRENAT F</p>
                    </div>
                
                    <div className="matchFutur">

                        <div className="team1">
                        
                            <img id="logoEquipe" src={Object.keys(posts).length === 0 ? <div>Loading</div> :posts["PRENAT F"].prevMatchup.teamHomeLogo} alt="logo"/>
                        </div>
                        
                        <div className="info">
                            {
                                Object.keys(posts).length === 0 ? 
                                <div>Loading</div> :
                                <p>{Object.keys(posts).length === 0 ? <div>Loading</div> :posts["PRENAT F"].prevMatchup.court}</p>
                            }
                            <p>GYMNASE DES COURTILLES</p>

                            <div className="results">
                                <div className="nameTeam1">
                                    <h3>{Object.keys(posts).length === 0 ? <div>Loading</div> :posts["PRENAT F"].prevMatchup.teamHome}</h3>
                                </div>

                                <div className="score">
                                    <h3>{Object.keys(posts).length === 0 ? <div>Loading</div> :posts["PRENAT F"].prevMatchup.scoreHome} / {Object.keys(posts).length === 0 ? <div>Loading</div> :posts["PRENAT F"].prevMatchup.scoreAway}</h3>
                                </div>

                                <div className="nameTeam1">
                                    <h3>{Object.keys(posts).length === 0 ? <div>Loading</div> :posts["PRENAT F"].prevMatchup.teamAway}</h3>
                                </div>
                            </div>
                            <p>{Object.keys(posts).length === 0 ? <div>Loading</div> :convertToTime(posts["PRENAT F"].prevMatchup.matchupDate)}</p>
                        </div>

                        <div className="team2">
                            <img id="logoEquipe" src={Object.keys(posts).length === 0 ? <div>Loading</div> :posts["PRENAT F"].prevMatchup.teamAwayLogo} alt="logo"/>
                        </div>

                    </div>
                </div>

                <div className="container">
                    <div className="headerMatch">
                        <h2>{Object.keys(posts).length === 0 ? <div>Loading</div> :convertToDate(posts["PRENAT F"].nextMatchup.matchupDate)}</h2>
                        <p>PRENAT F</p>
                    </div>
                    
                    <div className="matchFutur">

                        <div className="team1">
                        
                            <img id="logoEquipe" src={Object.keys(posts).length === 0 ? <div>Loading</div> :posts["PRENAT F"].nextMatchup.teamHomeLogo} alt="logo"/>
                        </div>

                        <div className="info">
                            {
                                Object.keys(posts).length === 0 ? 
                                <div>Loading</div> :
                                <p>{Object.keys(posts).length === 0 ? <div>Loading</div> :posts["PRENAT F"].nextMatchup.court}</p>
                            }

                            <div className="results">
                                <div className="nameTeam1">
                                    <h3>{Object.keys(posts).length === 0 ? <div>Loading</div> :posts["PRENAT F"].nextMatchup.teamHome}</h3>
                                </div>

                                <div className="score">
                                    <h3>{Object.keys(posts).length === 0 ? <div>Loading</div> :posts["PRENAT F"].nextMatchup.scoreHome} / {Object.keys(posts).length === 0 ? <div>Loading</div> :posts["PRENAT F"].nextMatchup.scoreAway}</h3>
                                </div>

                                <div className="nameTeam1">
                                    <h3>{Object.keys(posts).length === 0 ? <div>Loading</div> :posts["PRENAT F"].nextMatchup.teamAway}</h3>
                                </div>
                            </div>
                            <p>{Object.keys(posts).length === 0 ? <div>Loading</div> :convertToTime(posts["PRENAT F"].nextMatchup.matchupDate)}</p>
                        </div>

                        <div className="team2">
                            <img id="logoEquipe" src={Object.keys(posts).length === 0 ? <div>Loading</div> :posts["PRENAT F"].nextMatchup.teamAwayLogo} alt="logo"/>
                        </div>

                    </div>
                </div>

                <div className="container">
                    <div className="headerMatch">
                        <h2>{Object.keys(posts).length === 0 ? <div>Loading</div> :convertToDate(posts["PRENAT F"].secondNextMatchup.matchupDate)}</h2>
                        <p>PRENAT F</p>
                    </div>
                
                    <div className="matchFutur">

                        <div className="team1">
                        
                            <img id="logoEquipe" src={Object.keys(posts).length === 0 ? <div>Loading</div> :posts["PRENAT F"].secondNextMatchup.teamHomeLogo} alt="logo"/>
                        </div>
                        
                        <div className="info">
                            {
                                Object.keys(posts).length === 0 ? 
                                <div>Loading</div> :
                                <p>{Object.keys(posts).length === 0 ? <div>Loading</div> :posts["PRENAT F"].secondNextMatchup.court}</p>
                            }

                            <div className="results">
                                <div className="nameTeam1">
                                    <h3>{Object.keys(posts).length === 0 ? <div>Loading</div> :posts["PRENAT F"].secondNextMatchup.teamHome}</h3>
                                </div>

                                <div className="score">
                                    <h3>{Object.keys(posts).length === 0 ? <div>Loading</div> :posts["PRENAT F"].secondNextMatchup.scoreHome} / {Object.keys(posts).length === 0 ? <div>Loading</div> :posts["PRENAT F"].secondNextMatchup.scoreAway}</h3>
                                </div>

                                <div className="nameTeam1">
                                    <h3>{Object.keys(posts).length === 0 ? <div>Loading</div> :posts["PRENAT F"].secondNextMatchup.teamAway}</h3>
                                </div>
                            </div>
                            <p>{Object.keys(posts).length === 0 ? <div>Loading</div> :convertToDate(posts["PRENAT F"].secondNextMatchup.matchupDate)}</p>
                        </div>

                        <div className="team2">
                            <img id="logoEquipe" src={Object.keys(posts).length === 0 ? <div>Loading</div> :posts["PRENAT F"].secondNextMatchup.teamAwayLogo} alt="logo"/>
                        </div>

                    </div>
                </div>


                <div className="container">
                    <div className="headerMatch">
                        <h2>{Object.keys(posts).length === 0 ? <div>Loading</div> :convertToDate(posts["REGIONALE M"].prevMatchup.matchupDate)}</h2>
                        <p>REGIONALE M</p>
                    </div>
                
                    <div className="matchFutur">

                        <div className="team1">
                        
                            <img id="logoEquipe" src={Object.keys(posts).length === 0 ? <div>Loading</div> :posts["REGIONALE M"].prevMatchup.teamHomeLogo} alt="logo"/>
                        </div>

                        <div className="info">
                            {
                                Object.keys(posts).length === 0 ? 
                                <div>Loading</div> :
                                <p>{Object.keys(posts).length === 0 ? <div>Loading</div> :posts["REGIONALE M"].prevMatchup.court}</p>
                            }
                            <p>GYMNASE DES COURTILLES</p>

                            <div className="results">
                                <div className="nameTeam1">
                                    <h3>{Object.keys(posts).length === 0 ? <div>Loading</div> :posts["REGIONALE M"].prevMatchup.teamHome}</h3>
                                </div>

                                <div className="score">
                                    <h3>{Object.keys(posts).length === 0 ? <div>Loading</div> :posts["REGIONALE M"].prevMatchup.scoreHome} / {Object.keys(posts).length === 0 ? <div>Loading</div> :posts["REGIONALE M"].prevMatchup.scoreAway}</h3>
                                </div>

                                <div className="nameTeam1">
                                    <h3>{Object.keys(posts).length === 0 ? <div>Loading</div> :posts["REGIONALE M"].prevMatchup.teamAway}</h3>
                                </div>
                            </div>
                            <p>{Object.keys(posts).length === 0 ? <div>Loading</div> :convertToTime(posts["REGIONALE M"].prevMatchup.matchupDate)}</p>
                        </div>

                        <div className="team2">
                            <img id="logoEquipe" src={Object.keys(posts).length === 0 ? <div>Loading</div> :posts["REGIONALE M"].prevMatchup.teamAwayLogo} alt="logo"/>
                        </div>

                    </div>
                </div>

                <div className="container">
                    <div className="headerMatch">
                        <h2>{Object.keys(posts).length === 0 ? <div>Loading</div> :convertToDate(posts["REGIONALE M"].nextMatchup.matchupDate)}</h2>
                        <p>REGIONALE M</p>
                    </div>
                    
                    <div className="matchFutur">

                        <div className="team1">
                        
                            <img id="logoEquipe" src={Object.keys(posts).length === 0 ? <div>Loading</div> :posts["REGIONALE M"].nextMatchup.teamHomeLogo} alt="logo"/>
                        </div>

                        <div className="info">
                            {
                                Object.keys(posts).length === 0 ? 
                                <div>Loading</div> :
                                <p>{Object.keys(posts).length === 0 ? <div>Loading</div> :posts["REGIONALE M"].nextMatchup.court}</p>
                            }

                            <div className="results">
                                <div className="nameTeam1">
                                    <h3>{Object.keys(posts).length === 0 ? <div>Loading</div> :posts["REGIONALE M"].nextMatchup.teamHome}</h3>
                                </div>

                                <div className="score">
                                    <h3>{Object.keys(posts).length === 0 ? <div>Loading</div> :posts["REGIONALE M"].nextMatchup.scoreHome} / {Object.keys(posts).length === 0 ? <div>Loading</div> :posts["NATIONALE 2 M"].nextMatchup.scoreAway}</h3>
                                </div>

                                <div className="nameTeam1">
                                    <h3>{Object.keys(posts).length === 0 ? <div>Loading</div> :posts["REGIONALE M"].nextMatchup.teamAway}</h3>
                                </div>
                            </div>
                            <p>{Object.keys(posts).length === 0 ? <div>Loading</div> :convertToTime(posts["REGIONALE M"].nextMatchup.matchupDate)}</p>
                        </div>

                        <div className="team2">
                            <img id="logoEquipe" src={Object.keys(posts).length === 0 ? <div>Loading</div> :posts["REGIONALE M"].nextMatchup.teamAwayLogo} alt="logo"/>
                        </div>

                    </div>
                </div>

                <div className="container">
                    <div className="headerMatch">
                        <h2>{Object.keys(posts).length === 0 ? <div>Loading</div> :convertToDate(posts["REGIONALE M"].secondNextMatchup.matchupDate)}</h2>
                        <p>REGIONALE M</p>
                    </div>
                
                    <div className="matchFutur">

                        <div className="team1">
                        
                            <img id="logoEquipe" src={Object.keys(posts).length === 0 ? <div>Loading</div> :posts["REGIONALE M"].secondNextMatchup.teamHomeLogo} alt="logo"/>
                        </div>
                        
                        <div className="info">
                            {
                                Object.keys(posts).length === 0 ? 
                                <div>Loading</div> :
                                <p>{Object.keys(posts).length === 0 ? <div>Loading</div> :posts["REGIONALE M"].secondNextMatchup.court}</p>
                            }

                            <div className="results">
                                <div className="nameTeam1">
                                    <h3>{Object.keys(posts).length === 0 ? <div>Loading</div> :posts["REGIONALE M"].secondNextMatchup.teamHome}</h3>
                                </div>

                                <div className="score">
                                    <h3>{Object.keys(posts).length === 0 ? <div>Loading</div> :posts["REGIONALE M"].secondNextMatchup.scoreHome} / {Object.keys(posts).length === 0 ? <div>Loading</div> :posts["NATIONALE 2 M"].secondNextMatchup.scoreAway}</h3>
                                </div>

                                <div className="nameTeam1">
                                    <h3>{Object.keys(posts).length === 0 ? <div>Loading</div> :posts["REGIONALE M"].secondNextMatchup.teamAway}</h3>
                                </div>
                            </div>
                            <p>{Object.keys(posts).length === 0 ? <div>Loading</div> :convertToTime(posts["REGIONALE M"].secondNextMatchup.matchupDate)}</p>
                        </div>

                        <div className="team2">
                            <img id="logoEquipe" src={Object.keys(posts).length === 0 ? <div>Loading</div> :posts["REGIONALE M"].secondNextMatchup.teamAwayLogo} alt="logo"/>
                        </div>

                    </div>
                </div>


                <div className="containerProgram">
                    <Link className="btn btn-primary" to="./Programme" role="button">Voir le Programme complet</Link>
                </div>

                
            </div>

        </div>
        
   )
}

export default MatchScores;
