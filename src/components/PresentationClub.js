import React, { Component } from 'react';

import client from '../Client'

import Gymnase from '../images/Gymnase.png'

import '../css/PresentationClub.css';

class PresentationClub extends Component {

    constructor() {
        super()
        this.state = {pres: []}
    }

    componentDidMount(){
        client.getEntries({
            'content_type' : 'VieDuClub', 'order': '-sys.createdAt'
          }).then((entries)=> {
            this.setState({pres: entries.items }) 
          })
    }

    render() {
        return(
            <div className="PresentationClub">
                {
                    this.state.pres.length === 0 ?
                    <div> Loading </div>
                    :
                    
                    <>
                        <img id = "ImgPres" src = {this.state.pres[0].fields.PresentationImage.fields.file.url} alt= "ImgPres"></img>
                        <div className="TextPres">
                            <p>
                                {this.state.pres[0].fields.TextPresentation}
                                {/* Le club de volley ball de la ville d’Asnières-sur-Seine a été créé en 1948, après plus de 70 ans d’existence, Asnières Volley a permis à de nombreuses joueuses et nombreux joueurs de volley de se construire sportivement et socialement à travers l’un des sports collectifs le plus pratiqué au monde. Des grands moments sportifs et humains se sont joués sur le parquet du gymnase « emblématique » des Courtilles.
                                <br/><br/>Aujourd’hui, l’association sportive Asnières Volley 92 s’inscrit dans la continuité en assurant la promotion, le développement et la diversification de ses pratiques. Riche de son histoire, de ses adhérent(e)s et de ses valeurs d’ouverture et de partage autour de la pratique sportive du Volley ball, Asnières Volley s’attache chaque saison à favoriser la pratique sportive auprès des plus jeunes. La formation, les enjeux socio-éducatifs sont des axes forts qui dirigent l’orientation sportive de notre association.
                                <br/><br/>Le club d’Asnières volley étant encore considéré comme l’une des meilleures écoles de volley de France, l’association s’attache à proposer un encadrement et des créneaux sportifs de qualité afin que chaque adhérent puisse partager la pratique du volley-ball dans les meilleures conditions possibles.
                                <br/><br/><span style = {{color: "#BA2F33",fontFamily: "Viga", fontSize: "24px", fontWeight: "400" }}>La différence est une force !</span> */}

                            </p>
                        </div>
                    </>
                        
                }
            </div>
        )
    }
}

export default PresentationClub