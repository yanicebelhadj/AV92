import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import logo from '../images/logo.png';
import actu_img from '../images/actu_img.jpg';

import client from '../Client'

import '../css/ActuList.css';

class ActuList extends Component {

    constructor() {
        super()
        this.state = {articlepage: []}
    }

    componentDidMount(){
        client.getEntries({
            'content_type' : 'actualite', 'order': '-sys.createdAt'
          }).then((entries)=> {
            this.setState({articlepage: entries.items }) 
          })
          
          {console.log(this.state.articlepage)}
    }

    

    render() {

        return(
            <div className="ActuList">
                <div className="fond-couleur"></div>

                <div className="fond-img">
                    <img id="imgFond" src= {actu_img} alt="image de fond"/>
                </div>
        
                <div className="fond-logo">
                    <img id="logoFond" src= {logo} alt="image de fond"/>
                </div>
                
                <div className="text-area">

                    <div className="title_page">
                        <h1>ACTUALITÉ</h1>
                    </div>
                    
                    {this.state.articlepage.length === 0 ?
                        <div> Loading </div>
                        :
                        this.state.articlepage.map((actu,index) => {
                            return(
                                <>
                                    <a href = {`/ActuPage/${actu.sys.id}`}>
                                        <div className="link_article">
                                            <div className="title_actu">
                                                <p>{this.state.articlepage[index].fields.titre}</p>      
                                            </div>
                                            <div className="icone_fleche">
                                                <p>
                                                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 13L7 7L0.999999 1" stroke="white" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                    </svg>
                                                </p>
                                            </div>
                                        </div>
                                    </a >
                        
                                    <div className="ligne"></div>
                                </>
                            )   
                        })   
                    }

                    

                </div>
            </div>
        )
    }
}

export default ActuList