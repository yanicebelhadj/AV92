import React, { Component } from 'react';

import Navbar from './Navbar';

import {Link} from 'react-router-dom';
import logo from '../images/logo.png'

import '../css/Banniere.css';
import NavbarMobile from './NavbarMobile';

class Banniere extends Component {
   
    
    render() {
        return(
            <div className="Banniere">
                <div>
                    <div className="banniereDesktop">

                        <Link style={{display: this.props.retourButton}} to= {this.props.precedentPage}>
                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="#BA2F33" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                            </svg>
                        </Link>

                        <h3>{this.props.path1}</h3>
                        {
                            this.props.path2 !== undefined ?
                                <h2> | {this.props.path2}</h2>
                                :
                                null
                        }

                        {
                            this.props.pathEnGras !== undefined ?
                                <h2> | {this.props.pathEnGras}</h2>
                                :
                                null
                        }
                    
                                        
                    </div>
                    <div className="banniereMobile">
                        <NavbarMobile />

                        <img className="logoBanniere" src={logo} alt="logo"></img>

                        <div className="verticalLine"></div>
                        
                        <div className="associationName">ASNIÈRES VOLLEY BALL 92</div>

                    </div>
                </div>

                <Link to="/" id="logOut">
                    <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.2478 3H18.0173C18.5171 3 18.9965 3.21071 19.35 3.58579C19.7034 3.96086 19.902 4.46957 19.902 5V19C19.902 19.5304 19.7034 20.0391 19.35 20.4142C18.9965 20.7893 18.5171 21 18.0173 21H14.2478"
                        stroke="#2B3968" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                        <path
                        d="M9.53589 17L14.2477 12L9.53589 7" stroke="#2B3968" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                        <path d="M14.2479 12H2.93945" stroke="#2B3968" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                    </svg>
                </Link>

            </div>
        )
    }
}

export default Banniere