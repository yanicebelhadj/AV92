import React, { Component } from 'react';
import Banniere from '../components/Banniere';
import ActuList from '../components/ActuList';

import client from '../Client'

import '../css/Actuality.css';
import Navbar from '../components/Navbar';

class Actuality extends Component {

    constructor() {
        super()
        this.state = {articlepage: []}
    }

    componentDidMount(){
        client.getEntries({
            'content_type' : 'actualite', 'order': '-sys.createdAt', 'sys.id': `${this.props.match.params.id}`
          }).then((entries)=> {
            this.setState({articlepage: entries.items[0] }) 
          })
    }

    render() {
        return(
            <div className="Actuality">
                {this.state.articlepage.length === 0 ?
                <div> Loading </div>
                :
                <>
                    <Navbar />
                    <Banniere precedentPage="/ActuPage" path1="Dernières actualités" pathEnGras = {this.state.articlepage.fields.titre} />
                    <div className = "flexActu">
                        <ActuList />
                        <div className="article_container">
                            <div className="title_container">
                                <div className="title_article">
                                    <h1>{this.state.articlepage.fields.titre}</h1>
                                </div>

                                <div className="share">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z" stroke="#2B3968" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                        <path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z" stroke="#2B3968" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                        <path d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z" stroke="#2B3968" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                        <path d="M8.59009 13.51L15.4201 17.49" stroke="#2B3968" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                        <path d="M15.4101 6.51001L8.59009 10.49" stroke="#2B3968" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>

                            </div>
                            
                            <div className="infoArticle">
                                <div className="club">
                                    <h2>{this.state.articlepage.fields.cible}</h2>
                                </div>
                                <div className="date">
                                    <p>{this.state.articlepage.fields.date}</p>
                                </div>
                            </div>
                            
                            <div className="line"></div>

                            <div className="image_article">
                                <img src ={this.state.articlepage.fields.media.fields.file.url} alt="mediaArticle1" /> 
                            </div>
                            
                            <div className="subtitle_article">
                                <p>{this.state.articlepage.fields.description}</p>
                            </div>
                            
                            <div className="content_article">
                                <p>{this.state.articlepage.fields.contenuArticle}</p>
                            </div>

                            <div className="line_light"></div>

                            <div className="author">
                                <p>Auteur : {this.state.articlepage.fields.auteur} | Le {this.state.articlepage.fields.date}</p>
                            </div>
                                
                        </div>
                    </div>
                </>
                }
            </div>
        )
    }    

}

export default Actuality 