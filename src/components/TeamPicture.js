import React, { Component } from 'react';

import client from '../Client'

import '../css/TeamPicture.css';

class TeamPicture extends Component {
    constructor() {
        super()
        this.state = {equipe: []}
    }

    componentDidMount(){
        client.getEntries({
            'content_type' : 'photoEquipe', 'order': '-sys.createdAt'
          }).then((entries)=> {
            this.setState({equipe: entries.items }) 
          })
    }
    render() {
        return(
            <>               
                {this.state.equipe.length === 0 ?
                    <div> Loading </div>
                    :
                    <>
                        {
                            window.location.pathname === "/EquipeSenior/N2" ?
                            
                            (
                                this.state.equipe.map((photoEquipe) => {
                                    return(
                                        <>
                                            {
                                                photoEquipe.fields.nomEquipe == "NATIONALE 2 MASCULINE"
                                                ? 
                                                <div className="TeamPicture" style= {{ backgroundImage: `url(${photoEquipe.fields.photoEquipe.fields.file.url})`,backgroundSize:"100%",backgroundPosition:"center 20%"}}>
                                                    <div className="filterTeamPicture">
                                                        <div className="textArea">
                                                            {photoEquipe.fields.nomEquipe} - SAISON 2021 - 2022
                                                        </div>

                                                    </div>
                                                </div>
                                                :
                                                null
                                            }
                                        </>
                                    )
                                }
                                )
                            )
                            : window.location.pathname === "/EquipeSenior/Prenat" ?
                            
                            (
                                this.state.equipe.map((photoEquipe) => {
                                    return(
                                        <>
                                            {
                                                photoEquipe.fields.nomEquipe == "PRÉ NATIONALE FÉMININE"
                                                ? 
                                                <div className="TeamPicture" style= {{ backgroundImage: `url(${photoEquipe.fields.photoEquipe.fields.file.url})`,backgroundSize:"100%",backgroundPosition:"center 20%"}}>
                                                    <div className="filterTeamPicture">
                                                        <div className="textArea">
                                                            {photoEquipe.fields.nomEquipe} - SAISON 2021 - 2022
                                                        </div>

                                                    </div>
                                                </div>
                                                :
                                                null
                                            }
                                        </>
                                    )
                                }
                                )
                            )
                            :
                            null
                        }
                    </>
                    
                }
            </>
        )
    }
}

export default TeamPicture 

