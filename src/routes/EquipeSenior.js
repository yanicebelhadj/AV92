import React, { Component } from 'react';
import Banniere from '../components/Banniere';
import Classement from '../components/Classement';
import Navbar from '../components/Navbar';
import Score from '../components/Score';
import TeamPicture from '../components/TeamPicture';
import TrainingTime from '../components/TrainingTime';

import {Link} from "react-router-dom"
import client from '../Client'

import '../css/EquipeSenior.css';

class EquipeSenior extends Component {

    constructor() {
        super()
        this.state = {equipe: []}
    }

    componentDidMount(){
        client.getEntries({
            'content_type' : 'joueur', 'order': '-sys.createdAt'
          }).then((entries)=> {
            this.setState({equipe: entries.items }) 
          })
    }

    

    render() {
        var tab = this.state.equipe
        tab.sort(function compare(a, b) {
            if (parseInt(a.fields.numero) < parseInt(b.fields.numero))
                return -1;
            if (parseInt(a.fields.numero) > parseInt(b.fields.numero))
                return 1;
            return 0
        })
        
        
         
        return(
            <div className="EquipeSenior">
                {this.state.equipe.length === 0 ?
                <div> Loading </div>
                :
                <> 
                <Navbar />
                <Banniere retourButton="none" path1 = "Les équipes" path2 = {window.location.pathname === "/EquipeSenior/N2" ?
                                                                            "Nationale 2 Masculine"
                                                                            :window.location.pathname === "/EquipeSenior/Prenat"?
                                                                            "Pré Nationale Féminine"
                                                                            :window.location.pathname === "/EquipeSenior/RegM"?
                                                                            "Régionale Masculine"
                                                                            :window.location.pathname === "/EquipeSenior/Equipe_M18_F"?
                                                                            "M18 Filles CDF"
                                                                            :window.location.pathname === "/EquipeSenior/Equipe_M18_M"?
                                                                            "M18 Garçons CDF"
                                                                            :window.location.pathname === "/EquipeSenior/Equipe_M15_M"?
                                                                            "M15 G CDF et Championnat Régional"
                                                                            :window.location.pathname === "/EquipeSenior/Equipe_M13_F"?
                                                                            "M13 F CDF et Championnat Régional"
                                                                            :window.location.pathname === "/EquipeSenior/Equipe_M13_M"?
                                                                            "M13 G CDF et Championnat Régional"
                                                                            :window.location.pathname === "/EquipeSenior/Equipe_M11"?
                                                                            "M11 CDF"
                                                                            :null} />
                
                <TeamPicture />

                <div className="ContainerTeam" >

                    <div className="TeamInformations">

                                
                                    
                                    <div className="containerPlayerCardN2" style={{display:"flex",flexDirection:"row",flexWrap: "wrap"}}>
                                        {
                                            window.location.pathname === "/EquipeSenior/N2" ?
                                                                                        
                                            <div className="Player">
                                                <h1>LES JOUEURS</h1>

                                                <div style={{display:"flex",flexDirection:"row", flexWrap:"wrap"}}>
                                                    {this.state.equipe.map((joueur) => {
                                                        return(
                                                            (joueur.fields.role === "Joueur" & joueur.fields.equipe === "Nationale 2 Masculine" ?
                                                            <Link className="PlayerCard player1" to={{pathname: `/EquipeSenior/N2/${joueur.sys.id}` }} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} style= {{backgroundImage: `url(${joueur.fields.photo1.fields.file.url})`,backgroundSize:"115%",backgroundPosition:"center"}} >
                                                                <div style= {{backgroundImage: `url(${joueur.fields.photo2.fields.file.url})`,backgroundSize:"115%",backgroundPosition:"center",width:"100%",height:"100%"}} className="bg2"></div>
                                                                <div className="textArea" style={{position:"absolute",height:"60%"}}>
                                                                    <div className="playerNumber" style={{color:"#BA2F33"}}>{joueur.fields.numero}</div>
                                                                    <div className="playerName">
                                                                        {joueur.fields.prenom + " " + joueur.fields.nom}<br/>
                                                                        <span className="poste">{joueur.fields.position}</span>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                            :
                                                            null)
                                                        )    
                                                    })} 
                                                </div>
                                            
                                            </div>

                                            : window.location.pathname === "/EquipeSenior/Prenat" ?
                                            
                                            
                                            <div className="Player">
                                                <h1>LES JOUEURS</h1>
                                                
                                                <div style={{display:"flex",flexDirection:"row", flexWrap:"wrap"}}>
                                                    {this.state.equipe.map((joueur) => {
                                                        return(
                                                            (joueur.fields.role === "Joueur" & joueur.fields.equipe === "Pré Nationale Féminine" ?
                                                            <Link className="PlayerCard player1" to={{ pathname: `/EquipeSenior/Prenat/${joueur.sys.id}` }} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} style= {{backgroundImage: `url(${joueur.fields.photo1.fields.file.url})`,backgroundSize:"115%",backgroundPosition:"center"}} >
                                                                    <div style= {{backgroundImage: `url(${joueur.fields})`,backgroundSize:"115%",backgroundPosition:"center",width:"100%",height:"100%"}} className="bg2"></div>
                                                                    <div className="textArea" style={{position:"absolute",height:"60%"}}>
                                                                        <div className="playerNumber" style={{color:"#BA2F33"}}>{joueur.fields.numero}</div>
                                                                        <div className="playerName">
                                                                            {joueur.fields.prenom + " " + joueur.fields.nom}<br/>
                                                                            <span className="poste">{joueur.fields.position}</span>
                                                                        </div>
                                                                    </div>                                                    
                                                                </Link>
                                                            :
                                                            null)
                                                        ) 

                                                    })}
                                                </div>
                                            
                                            </div>

                                            :
                                            
                                            null
                                        }
                                    </div>
                                
                        
                        <div className="Coach">
                            <h1>STAFF TECHNIQUE</h1>
                            <div style={{display:"flex",flexDirection:"row"}}>
                                
                                {this.state.equipe.map((joueur) => {
                                    return(
                                        <>
                                            {
                                                window.location.pathname === "/EquipeSenior/N2" ?
                                                
                                                (joueur.fields.role === "Coach" & joueur.fields.equipe.includes(`Nationale 2 Masculine`)  
                                                ? 
                                                <Link to={{ pathname: `/EquipeSenior/N2/${joueur.sys.id}` }} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} style= {{backgroundImage: `url(${joueur.fields.photo1.fields.file.url})`,backgroundSize:"115%",backgroundPosition:"center"}} className="PlayerCard player1">
                                                    <div style= {{backgroundImage: `url(${joueur.fields.photo2.fields.file.url})`,backgroundSize:"115%",backgroundPosition:"center",width:"100%",height:"100%"}} className="bg2"></div>
                                                    <div className="textArea" style={{position:"absolute", height:"60%"}}>
                                                        <div className="playerNumber" style={{color:"#BA2F33"}}>{joueur.fields.numero}</div>
                                                        <div className="playerName">
                                                            {joueur.fields.prenom + " " + joueur.fields.nom}<br/>
                                                            <span className="poste">{joueur.fields.position}</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                                :
                                                null)

                                                : window.location.pathname === "/EquipeSenior/Prenat" ?
                                                
                                                (joueur.fields.role === "Coach" & joueur.fields.equipe.includes(`Pré Nationale Féminine`)  
                                                ? 
                                                <Link to={{ pathname: `/EquipeSenior/Prenat/${joueur.sys.id}` }} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} style= {{backgroundImage: `url(${joueur.fields.photo1.fields.file.url})`,backgroundSize:"115%",backgroundPosition:"center"}} className="PlayerCard player1">
                                                    <div style= {{backgroundImage: `url(${joueur.fields.photo2.fields.file.url})`,backgroundSize:"115%",backgroundPosition:"center",width:"100%",height:"100%"}} className="bg2"></div>
                                                    <div className="textArea" style={{position:"absolute", height:"60%"}}>
                                                        <div className="playerNumber" style={{color:"#BA2F33"}}>{joueur.fields.numero}</div>
                                                        <div className="playerName">
                                                            {joueur.fields.prenom + " " + joueur.fields.nom}<br/>
                                                            <span className="poste">{joueur.fields.position}</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                                :
                                                null)

                                                : window.location.pathname === "/EquipeSenior/RegM" ?
                                                
                                                (joueur.fields.role === "Coach" & joueur.fields.equipe.includes(`Régionale Masculine`)  
                                                ? 
                                                <Link to={{ pathname: `/EquipeSenior/RegM/${joueur.sys.id}` }} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} style= {{backgroundImage: `url(${joueur.fields.photo1.fields.file.url})`,backgroundSize:"115%",backgroundPosition:"center"}} className="PlayerCard player1">
                                                    <div style= {{backgroundImage: `url(${joueur.fields.photo2.fields.file.url})`,backgroundSize:"115%",backgroundPosition:"center",width:"100%",height:"100%"}} className="bg2"></div>
                                                    <div className="textArea" style={{position:"absolute", height:"60%"}}>
                                                        <div className="playerNumber" style={{color:"#BA2F33"}}>{joueur.fields.numero}</div>
                                                        <div className="playerName">
                                                            {joueur.fields.prenom + " " + joueur.fields.nom}<br/>
                                                            <span className="poste">{joueur.fields.position}</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                                :
                                                null)

                                                : window.location.pathname === "/EquipeSenior/Equipe_M18_F" ?
                                                
                                                (joueur.fields.role === "Coach" & joueur.fields.equipe.includes(`M18 Filles`)  
                                                ? 
                                                <Link to={{ pathname: `/EquipeSenior/Equipe_M18_F/${joueur.sys.id}` }} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} style= {{backgroundImage: `url(${joueur.fields.photo1.fields.file.url})`,backgroundSize:"115%",backgroundPosition:"center"}} className="PlayerCard player1">
                                                    <div style= {{backgroundImage: `url(${joueur.fields.photo2.fields.file.url})`,backgroundSize:"115%",backgroundPosition:"center",width:"100%",height:"100%"}} className="bg2"></div>
                                                    <div className="textArea" style={{position:"absolute", height:"60%"}}>
                                                        <div className="playerNumber" style={{color:"#BA2F33"}}>{joueur.fields.numero}</div>
                                                        <div className="playerName">
                                                            {joueur.fields.prenom + " " + joueur.fields.nom}<br/>
                                                            <span className="poste">{joueur.fields.position}</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                                :
                                                null)

                                                : window.location.pathname === "/EquipeSenior/Equipe_M18_M" ?
                                                
                                                (joueur.fields.role === "Coach" & joueur.fields.equipe.includes(`M18 Garçons`)  
                                                ? 
                                                <Link to={{ pathname: `/EquipeSenior/Equipe_M18_M/${joueur.sys.id}` }} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} style= {{backgroundImage: `url(${joueur.fields.photo1.fields.file.url})`,backgroundSize:"115%",backgroundPosition:"center"}} className="PlayerCard player1">
                                                    <div style= {{backgroundImage: `url(${joueur.fields.photo2.fields.file.url})`,backgroundSize:"115%",backgroundPosition:"center",width:"100%",height:"100%"}} className="bg2"></div>
                                                    <div className="textArea" style={{position:"absolute", height:"60%"}}>
                                                        <div className="playerNumber" style={{color:"#BA2F33"}}>{joueur.fields.numero}</div>
                                                        <div className="playerName">
                                                            {joueur.fields.prenom + " " + joueur.fields.nom}<br/>
                                                            <span className="poste">{joueur.fields.position}</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                                :
                                                null)

                                                : window.location.pathname === "/EquipeSenior/Equipe_M15_M" ?
                                                
                                                (joueur.fields.role === "Coach" & joueur.fields.equipe.includes(`M15 G`)  
                                                ? 
                                                <Link to={{ pathname: `/EquipeSenior/Equipe_M15_M/${joueur.sys.id}` }} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} style= {{backgroundImage: `url(${joueur.fields.photo1.fields.file.url})`,backgroundSize:"115%",backgroundPosition:"center"}} className="PlayerCard player1">
                                                    <div style= {{backgroundImage: `url(${joueur.fields.photo2.fields.file.url})`,backgroundSize:"115%",backgroundPosition:"center",width:"100%",height:"100%"}} className="bg2"></div>
                                                    <div className="textArea" style={{position:"absolute", height:"60%"}}>
                                                        <div className="playerNumber" style={{color:"#BA2F33"}}>{joueur.fields.numero}</div>
                                                        <div className="playerName">
                                                            {joueur.fields.prenom + " " + joueur.fields.nom}<br/>
                                                            <span className="poste">{joueur.fields.position}</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                                :
                                                null)

                                                : window.location.pathname === "/EquipeSenior/Equipe_M13_F" ?
                                                
                                                (joueur.fields.role === "Coach" & joueur.fields.equipe.includes(`M13 F`)  
                                                ? 
                                                <Link to={{ pathname: `/EquipeSenior/Equipe_M13_F/${joueur.sys.id}` }} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} style= {{backgroundImage: `url(${joueur.fields.photo1.fields.file.url})`,backgroundSize:"115%",backgroundPosition:"center"}} className="PlayerCard player1">
                                                    <div style= {{backgroundImage: `url(${joueur.fields.photo2.fields.file.url})`,backgroundSize:"115%",backgroundPosition:"center",width:"100%",height:"100%"}} className="bg2"></div>
                                                    <div className="textArea" style={{position:"absolute", height:"60%"}}>
                                                        <div className="playerNumber" style={{color:"#BA2F33"}}>{joueur.fields.numero}</div>
                                                        <div className="playerName">
                                                            {joueur.fields.prenom + " " + joueur.fields.nom}<br/>
                                                            <span className="poste">{joueur.fields.position}</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                                :
                                                null)

                                                : window.location.pathname === "/EquipeSenior/Equipe_M13_M" ?
                                                
                                                (joueur.fields.role === "Coach" & joueur.fields.equipe.includes(`M13 G`)  
                                                ? 
                                                <Link to={{ pathname: `/EquipeSenior/Equipe_M13_M/${joueur.sys.id}` }} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} style= {{backgroundImage: `url(${joueur.fields.photo1.fields.file.url})`,backgroundSize:"115%",backgroundPosition:"center"}} className="PlayerCard player1">
                                                    <div style= {{backgroundImage: `url(${joueur.fields.photo2.fields.file.url})`,backgroundSize:"115%",backgroundPosition:"center",width:"100%",height:"100%"}} className="bg2"></div>
                                                    <div className="textArea" style={{position:"absolute", height:"60%"}}>
                                                        <div className="playerNumber" style={{color:"#BA2F33"}}>{joueur.fields.numero}</div>
                                                        <div className="playerName">
                                                            {joueur.fields.prenom + " " + joueur.fields.nom}<br/>
                                                            <span className="poste">{joueur.fields.position}</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                                :
                                                null)

                                                : window.location.pathname === "/EquipeSenior/Equipe_M11" ?
                                                
                                                (joueur.fields.role === "Coach" & joueur.fields.equipe.includes(`M11`)  
                                                ? 
                                                <Link to={{ pathname: `/EquipeSenior/Equipe_M11/${joueur.sys.id}` }} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} style= {{backgroundImage: `url(${joueur.fields.photo1.fields.file.url})`,backgroundSize:"115%",backgroundPosition:"center"}} className="PlayerCard player1">
                                                    <div style= {{backgroundImage: `url(${joueur.fields.photo2.fields.file.url})`,backgroundSize:"115%",backgroundPosition:"center",width:"100%",height:"100%"}} className="bg2"></div>
                                                    <div className="textArea" style={{position:"absolute", height:"60%"}}>
                                                        <div className="playerNumber" style={{color:"#BA2F33"}}>{joueur.fields.numero}</div>
                                                        <div className="playerName">
                                                            {joueur.fields.prenom + " " + joueur.fields.nom}<br/>
                                                            <span className="poste">{joueur.fields.position}</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                                :
                                                null)

                                                : 

                                                null
                                            }
                                        </>
                                    )

                                })}

                            </div>
                        </div>

                       <TrainingTime />

                    </div>
                    
                    {/* <div className="Scores">
                        <h1>MATCH ALLER</h1>
                        <div>
                            <Score />
                        </div>
                        
                        <h1>MATCH RETOUR</h1>
                        <div>
                            <Score />
                        </div>

                    </div> */}
                    
                </div>     
        
                {/* <Classement /> */}

                </>
                }
            </div>
        )
    }
}

export default EquipeSenior 