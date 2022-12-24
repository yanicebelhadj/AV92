import React, { Component } from 'react';
import Banniere from '../components/Banniere';
import CoachPlayerDetails from '../components/Coach-PlayerDetails';
import Navbar from '../components/Navbar';

import client from '../Client'

import '../css/Coach-PlayerPage.css';

class CoachPlayerPage extends Component {
    constructor() {
        super()
        this.state = {equipe: []}
    }

    componentDidMount(){
        client.getEntries({
            'content_type' : 'joueur', 'order': '-sys.createdAt', 'sys.id': `${this.props.match.params.id}`
        }).then((entries)=> {
            this.setState({equipe: entries.items }) 
        })
    }
    
    render() {
        const pathname = (str) => {
            const words = str.split('/');
            return "/"+words[1]+"/"+words[2];
        }
        
        return(
            <div className="CoachPlayerPage">
                {this.state.equipe.length === 0 ?
                    <div> Loading </div>
                    :
                    <> 
                <Navbar />
                <Banniere   precedentPage = {pathname(window.location.pathname) === "/EquipeSenior/N2" ?
                                    "/EquipeSenior/N2"
                                    :pathname(window.location.pathname) === "/EquipeSenior/Prenat"?
                                    "/EquipeSenior/Prenat"
                                    :pathname(window.location.pathname) === "/EquipeSenior/RegM"?
                                    "/EquipeSenior/RegM"
                                    :pathname(window.location.pathname) === "/EquipeSenior/Equipe_M18_F"?
                                    "/EquipeSenior/Equipe_M18_F"
                                    :pathname(window.location.pathname) === "/EquipeSenior/Equipe_M18_M"?
                                    "/EquipeSenior/Equipe_M18_M"
                                    :pathname(window.location.pathname) === "/EquipeSenior/Equipe_M15_M"?
                                    "/EquipeSenior/Equipe_M15_M"
                                    :pathname(window.location.pathname) === "/EquipeSenior/Equipe_M13_F"?
                                    "/EquipeSenior/Equipe_M13_F"
                                    :pathname(window.location.pathname) === "/EquipeSenior/Equipe_M13_M"?
                                    "/EquipeSenior/Equipe_M13_M"
                                    :pathname(window.location.pathname) === "/EquipeSenior/Equipe_M11"?
                                    "/EquipeSenior/Equipe_M11"
                                    :null} 
                            path1 = "Les équipes" 
                            path2 = {pathname(window.location.pathname) === "/EquipeSenior/N2" ?
                                    "Nationale 2 Masculine"
                                    :pathname(window.location.pathname) === "/EquipeSenior/Prenat"?
                                    "Pré Nationale Féminine"
                                    :pathname(window.location.pathname) === "/EquipeSenior/RegM"?
                                    "Régionale Masculine"
                                    :pathname(window.location.pathname) === "/EquipeSenior/Equipe_M18_F"?
                                    "M18 Filles CDF"
                                    :pathname(window.location.pathname) === "/EquipeSenior/Equipe_M18_M"?
                                    "M18 Garçons CDF"
                                    :pathname(window.location.pathname) === "/EquipeSenior/Equipe_M15_M"?
                                    "M15 G CDF et Championnat Régional"
                                    :pathname(window.location.pathname) === "/EquipeSenior/Equipe_M13_F"?
                                    "M13 F CDF et Championnat Régional"
                                    :pathname(window.location.pathname) === "/EquipeSenior/Equipe_M13_M"?
                                    "M13 G CDF et Championnat Régional"
                                    :pathname(window.location.pathname) === "/EquipeSenior/Equipe_M11"?
                                    "M11 CDF"
                                    :null} 
                            pathEnGras={this.state.equipe[0].fields.prenom +" "+ this.state.equipe[0].fields.nom} />

                <div style={{display:"flex", flexDirection:"row",height:"100%"}}>
                            <div className="PicturePlayer" style= {{backgroundImage: `url(${this.state.equipe[0].fields.photo1.fields.file.url})`,backgroundSize:"190%",backgroundPosition:"center 0"}}>

                                <div className="PlayerNumber" >
                                
                                </div>
                            </div>

                            <div className="DescriptionPlayer">
                                <div className="PlayerName">
                                    <h1><span style={{fontFamily:"Ruda"}}>{this.state.equipe[0].fields.numero} | </span>{this.state.equipe[0].fields.prenom} {this.state.equipe[0].fields.nom}</h1>
                                </div>

                                <div className="CoachPlayerDetails">
                
                                    <div className="textArea">
                                        <div className="Nationalite">
                                            <h3>Nationalité</h3>
                                            <p>{this.state.equipe[0].fields.nationalite}</p>
                                        </div>
                                        <div className="line"></div>
                                        <div className="Age">
                                            <h3>Âge</h3>
                                            <p>{this.state.equipe[0].fields.age} ans</p>
                                        </div>
                                        <div className="line"></div>
                                        <div className="Position">
                                            <h3>Position</h3>
                                            <p>{this.state.equipe[0].fields.position}</p>
                                        </div>
                                        <div className="line"></div>
                                        <div className="Age">
                                            <h3>Taille</h3>
                                            <p>{this.state.equipe[0].fields.taille} cm</p>
                                        </div>
                                        <div className="line"></div>
                                        <div className="Main_Forte"></div>
                                        <div className="Age">
                                            <h3>Main Forte</h3>
                                            <p>{this.state.equipe[0].fields.mainForte}</p>
                                        </div>
                                        <div className="line"></div>
                                        <div className="Action_pref">
                                            <h3>Action Préférée</h3>
                                            <p>{this.state.equipe[0].fields.actionPreferee}</p>
                                        </div>
                                        <div className="line"></div>
                                        <div className="Anciens_Clubs">
                                            <h3>Anciens Clubs</h3>
                                            <p>{this.state.equipe[0].fields.anciensClubs}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                </div>
                </>
            }
            </div>
        )
    }
}

export default CoachPlayerPage