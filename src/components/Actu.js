import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import client from '../Client'

import '../css/Actu.css';

class Actu extends Component {

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
    }

    render() {
        
        return(
            <>
                {this.state.articlepage.length === 0 ?
                    <div> Loading </div>
                    :
                    this.state.articlepage.map((actu) => {
                        return(
                            <>
                                <div key={actu.sys.id} className="actu" id="background_img3" style = {{backgroundImage: `url(${actu.fields.media.fields.file.url})`}}>
                                    <div className="background_shade_overlay">
                                        <div className="overlay">
                                            <div className="categoryActu">
                                                <div className="circle_category"></div>
                                                <div className="content_category">
                                                    <p> {actu.fields.cible} </p>
                                                </div>
                                            </div>
                                            <div className="date"> 
                                                    <p>{actu.fields.date}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="background_shade">
                                        <div className="filter">
                                            <div className="content_actu">
                                                    <h1>{actu.fields.titre} </h1>
                                                    <p>{actu.fields.description}</p>
                                                <Link id="button_actu" className="button2" to={{ pathname: `/ActuPage/${actu.sys.id}` }}>Lire la suite</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )

                    })
                }
            </>
        )
    }
}

export default Actu 