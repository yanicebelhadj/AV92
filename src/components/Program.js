import React, {useState, useEffect} from 'react'

import '../css/Program.css';

import axios from'axios'

function Program(){

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios
            .get("https://av92.npkn.net/av92-programme")
            .then(res => {
                // console.log(res)
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[])

    const day = Object.keys(posts)

    function convertToTime(date){
        let time_cut = date.split('T')[1].split(':')
        time_cut.length =2
        let finalTime = time_cut.join('h')
        return finalTime
    }

    var nbday=[]
    for(let i=0;i<day.length;i++){
        nbday.push(i)
    }

    function createArray(day){
        let tab = []

        for (let i = 0; i < posts[day].length; i++){ 
            tab.push(i)
        }

        return tab
    }
 
    
    return(
        <div className="Program">
           
                {nbday.map((i,key)=>{
                   return   <div style={{width:"100%",display: "flex",flexDirection: "column",justifyContent: "center",alignItems: "center"}}>
                                {Object.keys(posts).length === 0 ? <div>Loading</div> :
                                <>
                                    <div className="day" key={key}>{day[i]}</div>
                                
                                    <div className="containerMatchProgramme">
                                        {createArray(day[i]).map((j,key)=>{
                                            return  <div id ="MatchProgramme">
                                                        <div className="headerMatch">
                                                            <p>{posts[day[i]][j].category}</p>
                                                        </div>
                                            
                                                        <div className="match">

                                                            <div className="team1">
                                                                <img id="logoEquipe" src={posts[day[i]][j].teamHomeLogo} alt="logo"/>
                                                            </div>

                                                            <div className="info">
                                                                <p>{posts[day[i]][j].court}</p>

                                                                <div className="results">
                                                                    <div className="nameTeam1" id="team1">
                                                                        {posts[day[i]][j].teamHome === "ASNIERES VOLLEY 92" ? 
                                                                            <h3 style={{color:"#BA2F33", fontWeight:"700px"}}>{posts[day[i]][j].teamHome}</h3>
                                                                            :
                                                                            <h3>{posts[day[i]][j].teamHome}</h3>
                                                                        }
                                                                        
                                                                    </div>

                                                                    <div className="score">
                                                                        <h3>{posts[day[i]][j].scoreHome} / {posts[day[i]][j].scoreAway}</h3>
                                                                    </div>

                                                                    <div className="nameTeam1" id="team2">
                                                                        {posts[day[i]][j].teamAway === "ASNIERES VOLLEY 92" ? 
                                                                            <h3 style={{color:"#BA2F33", fontWeight:"700px"}}>{posts[day[i]][j].teamAway}</h3>
                                                                            :
                                                                            <h3>{posts[day[i]][j].teamAway}</h3>
                                                                        }
                                                                    </div>
                                                                </div>

                                                                <p>{convertToTime(posts[day[i]][j].matchupDate)}</p>
                                                            </div>

                                                            <div className="team2">
                                                                <img id="logoEquipe" src={posts[day[i]][j].teamAwayLogo} alt="logo"/>
                                                            </div>

                                                        </div>
                                                    </div>
                                        })
                                        }
                                    </div>
                                    
                                </>
                                }
                            </div>
                })
                }

           
                
        </div>
        
        )
    }

    export default Program
