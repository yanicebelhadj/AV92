import React, {useState, useEffect} from 'react'

import logo from '../images/logo.png'

import axios from'axios'

import '../css/Score.css';

function Score() {

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

    return(
        Object.keys(posts).length === 0 ? <div>Loading</div> :
            <div className="Score">
                <div className="headerMatch">
                    <p>{posts[day[0]][0].category}</p>
                </div>
            
                <div className="match">
                    
                    <div className="team1">
                        <img id="logoEquipe" src={posts[day[0]][0].teamHomeLogo} alt="logo"/>
                    </div>

                    <div className="info" >
                        <p>{posts[day[0]][0].court}</p>

                        <div className="results">
                            <div className="nameTeam1">
                                {posts[day[0]][0].teamHome === "ASNIERES VOLLEY 92" ? 
                                    <h3 style={{color:"#BA2F33", fontWeight:"700px"}}>{posts[day[0]][0].teamHome}</h3>
                                    :
                                    <h3>{posts[day[0]][0].teamHome}</h3>
                                }
                            </div>

                            <div className="score">
                                <h3>{posts[day[0]][0].scoreHome} / {posts[day[0]][0].scoreAway}</h3>
                            </div>

                            <div className="nameTeam1" style={{textAlign:"right"}}>
                                {posts[day[0]][0].teamAway === "ASNIERES VOLLEY 92" ? 
                                    <h3 style={{color:"#BA2F33", fontWeight:"700px"}}>{posts[day[0]][0].teamAway}</h3>
                                    :
                                    <h3>{posts[day[0]][0].teamAway}</h3>
                                }
                            </div>
                        </div>

                        <p>{convertToTime(posts[day[0]][0].matchupDate)}</p>
                    </div>

                    <div className="team2">
                        <img id="logoEquipe" src={posts[day[0]][0].teamAwayLogo} alt="logo"/>
                    </div>

                </div>
            </div>
        
    )
    
}

export default Score