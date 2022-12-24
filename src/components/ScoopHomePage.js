import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import client from '../Client'

import '../css/ScoopHomePage.css';

class ScoopHomePage extends Component {

    constructor() {
        super()
        this.state = {articlepage: []}
    }

    componentDidMount(){
        client.getEntries({
            'content_type' : 'actualite'
          }).then((entries)=> {
            this.setState({articlepage: entries.items[0]}) 
          })
    }

    render() {
        return(
            <>
                <div className="ScoopHomePage">
                    {this.state.articlepage.length === 0 ?
                        <div> Loading </div>
                        :
                        <>
                        <div className="background_shade_overlay">
                            <div className="overlay">
                                <div className="categoryActu">
                                    <div className="circle_category"></div>
                                    <div className="content_category">
                                        <p> {this.state.articlepage.fields.cible} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="backgroundFilter">
                            <div className="textArea">
                                <h1>ÇA VIENT DE TOMBER !</h1>

                                <div className="title_article">                                  
                                    <h1>{this.state.articlepage.fields.titre}</h1>                                
                                </div>
                                
                                <div className="content_article">                                
                                    <p>{this.state.articlepage.fields.contenuArticle}</p>
                                </div>
                            </div>

                            <div className="imageArea">
                                <img id="imageScoopHomePage" src ={this.state.articlepage.fields.media.fields.file.url} alt="mediaArticle2" /> 
                            </div>
                        </div>

                        
                        </>
                    }
                </div>

                {this.state.articlepage.length === 0 ?
                    <div> Loading </div>
                    :
                    <div className="ScoopHomePageMobile" style = {{display:"none",backgroundImage: `url(${this.state.articlepage.fields.media.fields.file.url})`,backgroundSize: "cover",backgroundPosition: "center 0%",backgroundRepeat:"no-repeat"}}>

                        <div className="descriptionCard">
                            <div className = "cible" >
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8" cy="8" r="7" fill="#BA2F33" stroke="white" stroke-width="2"/>
                                </svg>
                                {this.state.articlepage.length === 0 ?
                                    <div> Loading </div>
                                    :
                                    <h2 style = {{fontSize: "16px", width:"150px"}}>{this.state.articlepage.fields.cible} </h2>
                                }
                            </div>
                            <div className = "date">
                                {this.state.articlepage.length === 0 ?
                                    <div> Loading </div>
                                    :
                                    <h2 style = {{fontSize: "16px", width:"150px"}}>{this.state.articlepage.fields.date} </h2>
                                }                            
                            </div>
                        </div>
                        
                        <div className="redirectionPage">
                            <div className="containerRedirection">
                                <div className="textArea">
                                    <h1>ÇA VIENT DE TOMBER !</h1>
                                    <p>{this.state.articlepage.fields.titre} </p>
                                </div>
                                
                                <Link id="button_redirection" to={{ pathname: `/ActuPage/${this.state.articlepage.sys.id}` }}>
                                    Voir l'actualité
                                </Link>
                            </div>
                        </div>

                    </div>
                }
            </>
        )
    }
}

export default ScoopHomePage