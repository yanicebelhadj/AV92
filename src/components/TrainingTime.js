import React, { Component } from 'react';

import client from '../Client'

import '../css/TrainingTime.css';

class TrainingTime extends Component {

    constructor() {
        super()
        this.state = {trainingTime: []}
    }

    componentDidMount(){
        client.getEntries({
            'content_type' : 'entrainement', 'order': '-sys.createdAt'
          }).then((entries)=> {
            this.setState({trainingTime: entries.items }) 
          })
    }

    

    render() {
        const team =["Nationale 2 Masculine","Régionale Masculine","Pré Nationale Féminine"]
        
        return(
            <div className="TrainingTime">

            <h1>HEURES DES ENTRAINEMENTS</h1>
            <div style={{display:"flex",flexDirection:"row"}}>                            
            

                <div className={"day"}>
                    <div className="textArea">
                        <div className="weekDay">
                            LUNDI
                        </div>


                        {
                            window.location.pathname === "/EquipeSenior/N2" ?   
                            (this.state.trainingTime.map(
                                equipe => (equipe.fields.equipe === "Nationale 2 Masculine" )?  
                                equipe.fields.jourLieuHeure.map(
                                    lieu => lieu.Jour === "LUNDI" ?
                                        <>
                                            <div>
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0)">
                                                        <path d="M14.8546 6.66675C14.8546 11.3334 8.76905 15.3334 8.76905 15.3334C8.76905 15.3334 2.68347 11.3334 2.68347 6.66675C2.68347 5.07545 3.32463 3.54933 4.4659 2.42411C5.60716 1.29889 7.15505 0.666748 8.76905 0.666748C10.383 0.666748 11.9309 1.29889 13.0722 2.42411C14.2135 3.54933 14.8546 5.07545 14.8546 6.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                        <path d="M8.769 8.66675C9.88933 8.66675 10.7975 7.77132 10.7975 6.66675C10.7975 5.56218 9.88933 4.66675 8.769 4.66675C7.64868 4.66675 6.74048 5.56218 6.74048 6.66675C6.74048 7.77132 7.64868 8.66675 8.769 8.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0">
                                                            <rect width="16.2282" height="16" fill="white" transform="translate(0.654907)"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <div className="location">
                                                    {lieu.Lieu}
                                                </div>
                                            </div>
                                            <div className="time">
                                                {lieu.Heure}
                                            </div>
                                        </>
                                        :
                                        null
                                )
                                :
                                null
                            ))

                            :window.location.pathname === "/EquipeSenior/Prenat" ?   

                            (this.state.trainingTime.map(
                                equipe => (equipe.fields.equipe === "Pré Nationale Féminine" )?  
                                equipe.fields.jourLieuHeure.map(
                                    lieu => lieu.Jour === "LUNDI" ?
                                        <>
                                            <div>
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0)">
                                                        <path d="M14.8546 6.66675C14.8546 11.3334 8.76905 15.3334 8.76905 15.3334C8.76905 15.3334 2.68347 11.3334 2.68347 6.66675C2.68347 5.07545 3.32463 3.54933 4.4659 2.42411C5.60716 1.29889 7.15505 0.666748 8.76905 0.666748C10.383 0.666748 11.9309 1.29889 13.0722 2.42411C14.2135 3.54933 14.8546 5.07545 14.8546 6.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                        <path d="M8.769 8.66675C9.88933 8.66675 10.7975 7.77132 10.7975 6.66675C10.7975 5.56218 9.88933 4.66675 8.769 4.66675C7.64868 4.66675 6.74048 5.56218 6.74048 6.66675C6.74048 7.77132 7.64868 8.66675 8.769 8.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0">
                                                            <rect width="16.2282" height="16" fill="white" transform="translate(0.654907)"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <div className="location">
                                                    {lieu.Lieu}
                                                </div>
                                            </div>
                                            <div className="time">
                                                {lieu.Heure}
                                            </div>
                                        </>
                                        :
                                        null
                                )
                                :
                                null
                            ))

                            : window.location.pathname === "/EquipeSenior/RegM" ?

                            (this.state.trainingTime.map(
                                equipe => (equipe.fields.equipe === "Régionale Masculine" )?  
                                equipe.fields.jourLieuHeure.map(
                                    lieu => lieu.Jour === "LUNDI" ?
                                        <>
                                            <div>
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0)">
                                                        <path d="M14.8546 6.66675C14.8546 11.3334 8.76905 15.3334 8.76905 15.3334C8.76905 15.3334 2.68347 11.3334 2.68347 6.66675C2.68347 5.07545 3.32463 3.54933 4.4659 2.42411C5.60716 1.29889 7.15505 0.666748 8.76905 0.666748C10.383 0.666748 11.9309 1.29889 13.0722 2.42411C14.2135 3.54933 14.8546 5.07545 14.8546 6.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                        <path d="M8.769 8.66675C9.88933 8.66675 10.7975 7.77132 10.7975 6.66675C10.7975 5.56218 9.88933 4.66675 8.769 4.66675C7.64868 4.66675 6.74048 5.56218 6.74048 6.66675C6.74048 7.77132 7.64868 8.66675 8.769 8.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0">
                                                            <rect width="16.2282" height="16" fill="white" transform="translate(0.654907)"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <div className="location">
                                                    {lieu.Lieu}
                                                </div>
                                            </div>
                                            <div className="time">
                                                {lieu.Heure}
                                            </div>
                                        </>
                                        :
                                        null
                                )
                                :
                                null
                            ))

                            : window.location.pathname === "/EquipeSenior/Equipe_M18_F" ?

                            (this.state.trainingTime.map(
                                equipe => (equipe.fields.equipe === "M18 Filles" )?  
                                equipe.fields.jourLieuHeure.map(
                                    lieu => lieu.Jour === "LUNDI" ?
                                        <>
                                            <div>
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0)">
                                                        <path d="M14.8546 6.66675C14.8546 11.3334 8.76905 15.3334 8.76905 15.3334C8.76905 15.3334 2.68347 11.3334 2.68347 6.66675C2.68347 5.07545 3.32463 3.54933 4.4659 2.42411C5.60716 1.29889 7.15505 0.666748 8.76905 0.666748C10.383 0.666748 11.9309 1.29889 13.0722 2.42411C14.2135 3.54933 14.8546 5.07545 14.8546 6.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                        <path d="M8.769 8.66675C9.88933 8.66675 10.7975 7.77132 10.7975 6.66675C10.7975 5.56218 9.88933 4.66675 8.769 4.66675C7.64868 4.66675 6.74048 5.56218 6.74048 6.66675C6.74048 7.77132 7.64868 8.66675 8.769 8.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0">
                                                            <rect width="16.2282" height="16" fill="white" transform="translate(0.654907)"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <div className="location">
                                                    {lieu.Lieu}
                                                </div>
                                            </div>
                                            <div className="time">
                                                {lieu.Heure}
                                            </div>
                                        </>
                                        :
                                        null
                                )
                                :
                                null
                            ))

                            : window.location.pathname === "/EquipeSenior/Equipe_M18_M" ?

                            (this.state.trainingTime.map(
                                equipe => (equipe.fields.equipe === "M18 Garçons" )?  
                                equipe.fields.jourLieuHeure.map(
                                    lieu => lieu.Jour === "LUNDI" ?
                                        <>
                                            <div>
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0)">
                                                        <path d="M14.8546 6.66675C14.8546 11.3334 8.76905 15.3334 8.76905 15.3334C8.76905 15.3334 2.68347 11.3334 2.68347 6.66675C2.68347 5.07545 3.32463 3.54933 4.4659 2.42411C5.60716 1.29889 7.15505 0.666748 8.76905 0.666748C10.383 0.666748 11.9309 1.29889 13.0722 2.42411C14.2135 3.54933 14.8546 5.07545 14.8546 6.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                        <path d="M8.769 8.66675C9.88933 8.66675 10.7975 7.77132 10.7975 6.66675C10.7975 5.56218 9.88933 4.66675 8.769 4.66675C7.64868 4.66675 6.74048 5.56218 6.74048 6.66675C6.74048 7.77132 7.64868 8.66675 8.769 8.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0">
                                                            <rect width="16.2282" height="16" fill="white" transform="translate(0.654907)"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <div className="location">
                                                    {lieu.Lieu}
                                                </div>
                                            </div>
                                            <div className="time">
                                                {lieu.Heure}
                                            </div>
                                        </>
                                        :
                                        null
                                )
                                :
                                null
                            ))

                            :window.location.pathname === "/EquipeSenior/Equipe_M15_M" ?

                            (this.state.trainingTime.map(
                                equipe => (equipe.fields.equipe === "M15 G" )?  
                                equipe.fields.jourLieuHeure.map(
                                    lieu => lieu.Jour === "LUNDI" ?
                                        <>
                                            <div>
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0)">
                                                        <path d="M14.8546 6.66675C14.8546 11.3334 8.76905 15.3334 8.76905 15.3334C8.76905 15.3334 2.68347 11.3334 2.68347 6.66675C2.68347 5.07545 3.32463 3.54933 4.4659 2.42411C5.60716 1.29889 7.15505 0.666748 8.76905 0.666748C10.383 0.666748 11.9309 1.29889 13.0722 2.42411C14.2135 3.54933 14.8546 5.07545 14.8546 6.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                        <path d="M8.769 8.66675C9.88933 8.66675 10.7975 7.77132 10.7975 6.66675C10.7975 5.56218 9.88933 4.66675 8.769 4.66675C7.64868 4.66675 6.74048 5.56218 6.74048 6.66675C6.74048 7.77132 7.64868 8.66675 8.769 8.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0">
                                                            <rect width="16.2282" height="16" fill="white" transform="translate(0.654907)"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <div className="location">
                                                    {lieu.Lieu}
                                                </div>
                                            </div>
                                            <div className="time">
                                                {lieu.Heure}
                                            </div>
                                        </>
                                        :
                                        null
                                )
                                :
                                null
                            ))

                            :window.location.pathname === "/EquipeSenior/Equipe_M13_F" ?

                            (this.state.trainingTime.map(
                                equipe => (equipe.fields.equipe === "M13 F" )?  
                                equipe.fields.jourLieuHeure.map(
                                    lieu => lieu.Jour === "LUNDI" ?
                                        <>
                                            <div>
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0)">
                                                        <path d="M14.8546 6.66675C14.8546 11.3334 8.76905 15.3334 8.76905 15.3334C8.76905 15.3334 2.68347 11.3334 2.68347 6.66675C2.68347 5.07545 3.32463 3.54933 4.4659 2.42411C5.60716 1.29889 7.15505 0.666748 8.76905 0.666748C10.383 0.666748 11.9309 1.29889 13.0722 2.42411C14.2135 3.54933 14.8546 5.07545 14.8546 6.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                        <path d="M8.769 8.66675C9.88933 8.66675 10.7975 7.77132 10.7975 6.66675C10.7975 5.56218 9.88933 4.66675 8.769 4.66675C7.64868 4.66675 6.74048 5.56218 6.74048 6.66675C6.74048 7.77132 7.64868 8.66675 8.769 8.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0">
                                                            <rect width="16.2282" height="16" fill="white" transform="translate(0.654907)"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <div className="location">
                                                    {lieu.Lieu}
                                                </div>
                                            </div>
                                            <div className="time">
                                                {lieu.Heure}
                                            </div>
                                        </>
                                        :
                                        null
                                )
                                :
                                null
                            ))

                            :window.location.pathname === "/EquipeSenior/Equipe_M13_M" ?

                            (this.state.trainingTime.map(
                                equipe => (equipe.fields.equipe === "M13 G" )?  
                                equipe.fields.jourLieuHeure.map(
                                    lieu => lieu.Jour === "LUNDI" ?
                                        <>
                                            <div>
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0)">
                                                        <path d="M14.8546 6.66675C14.8546 11.3334 8.76905 15.3334 8.76905 15.3334C8.76905 15.3334 2.68347 11.3334 2.68347 6.66675C2.68347 5.07545 3.32463 3.54933 4.4659 2.42411C5.60716 1.29889 7.15505 0.666748 8.76905 0.666748C10.383 0.666748 11.9309 1.29889 13.0722 2.42411C14.2135 3.54933 14.8546 5.07545 14.8546 6.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                        <path d="M8.769 8.66675C9.88933 8.66675 10.7975 7.77132 10.7975 6.66675C10.7975 5.56218 9.88933 4.66675 8.769 4.66675C7.64868 4.66675 6.74048 5.56218 6.74048 6.66675C6.74048 7.77132 7.64868 8.66675 8.769 8.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0">
                                                            <rect width="16.2282" height="16" fill="white" transform="translate(0.654907)"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <div className="location">
                                                    {lieu.Lieu}
                                                </div>
                                            </div>
                                            <div className="time">
                                                {lieu.Heure}
                                            </div>
                                        </>
                                        :
                                        null
                                )
                                :
                                null
                            ))

                            :window.location.pathname === "/EquipeSenior/Equipe_M11" ?

                            (this.state.trainingTime.map(
                                equipe => (equipe.fields.equipe === "M11" )?  
                                equipe.fields.jourLieuHeure.map(
                                    lieu => lieu.Jour === "LUNDI" ?
                                        <>
                                            <div>
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0)">
                                                        <path d="M14.8546 6.66675C14.8546 11.3334 8.76905 15.3334 8.76905 15.3334C8.76905 15.3334 2.68347 11.3334 2.68347 6.66675C2.68347 5.07545 3.32463 3.54933 4.4659 2.42411C5.60716 1.29889 7.15505 0.666748 8.76905 0.666748C10.383 0.666748 11.9309 1.29889 13.0722 2.42411C14.2135 3.54933 14.8546 5.07545 14.8546 6.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                        <path d="M8.769 8.66675C9.88933 8.66675 10.7975 7.77132 10.7975 6.66675C10.7975 5.56218 9.88933 4.66675 8.769 4.66675C7.64868 4.66675 6.74048 5.56218 6.74048 6.66675C6.74048 7.77132 7.64868 8.66675 8.769 8.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0">
                                                            <rect width="16.2282" height="16" fill="white" transform="translate(0.654907)"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <div className="location">
                                                    {lieu.Lieu}
                                                </div>
                                            </div>
                                            <div className="time">
                                                {lieu.Heure}
                                            </div>
                                        </>
                                        :
                                        null
                                )
                                :
                                null
                            ))

                            :

                            null
                        }

                    </div>
                </div>
                
                <div className={"day"}>
                    <div className="textArea">
                        <div className="weekDay">
                            MARDI
                        </div>


                        {
                            window.location.pathname === "/EquipeSenior/N2" ?   
                            (this.state.trainingTime.map(
                                equipe => (equipe.fields.equipe === "Nationale 2 Masculine" )?  
                                equipe.fields.jourLieuHeure.map(
                                    lieu => lieu.Jour === "MARDI" ?
                                        <>
                                            <div>
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0)">
                                                        <path d="M14.8546 6.66675C14.8546 11.3334 8.76905 15.3334 8.76905 15.3334C8.76905 15.3334 2.68347 11.3334 2.68347 6.66675C2.68347 5.07545 3.32463 3.54933 4.4659 2.42411C5.60716 1.29889 7.15505 0.666748 8.76905 0.666748C10.383 0.666748 11.9309 1.29889 13.0722 2.42411C14.2135 3.54933 14.8546 5.07545 14.8546 6.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                        <path d="M8.769 8.66675C9.88933 8.66675 10.7975 7.77132 10.7975 6.66675C10.7975 5.56218 9.88933 4.66675 8.769 4.66675C7.64868 4.66675 6.74048 5.56218 6.74048 6.66675C6.74048 7.77132 7.64868 8.66675 8.769 8.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0">
                                                            <rect width="16.2282" height="16" fill="white" transform="translate(0.654907)"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <div className="location">
                                                    {lieu.Lieu}
                                                </div>
                                            </div>
                                            <div className="time">
                                                {lieu.Heure}
                                            </div>
                                        </>
                                        :
                                        null
                                )
                                :
                                null
                            ))

                            :window.location.pathname === "/EquipeSenior/Prenat" ?   

                            (this.state.trainingTime.map(
                                equipe => (equipe.fields.equipe === "Pré Nationale Féminine" )?  
                                equipe.fields.jourLieuHeure.map(
                                    lieu => lieu.Jour === "MARDI" ?
                                        <>
                                            <div>
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0)">
                                                        <path d="M14.8546 6.66675C14.8546 11.3334 8.76905 15.3334 8.76905 15.3334C8.76905 15.3334 2.68347 11.3334 2.68347 6.66675C2.68347 5.07545 3.32463 3.54933 4.4659 2.42411C5.60716 1.29889 7.15505 0.666748 8.76905 0.666748C10.383 0.666748 11.9309 1.29889 13.0722 2.42411C14.2135 3.54933 14.8546 5.07545 14.8546 6.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                        <path d="M8.769 8.66675C9.88933 8.66675 10.7975 7.77132 10.7975 6.66675C10.7975 5.56218 9.88933 4.66675 8.769 4.66675C7.64868 4.66675 6.74048 5.56218 6.74048 6.66675C6.74048 7.77132 7.64868 8.66675 8.769 8.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0">
                                                            <rect width="16.2282" height="16" fill="white" transform="translate(0.654907)"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <div className="location">
                                                    {lieu.Lieu}
                                                </div>
                                            </div>
                                            <div className="time">
                                                {lieu.Heure}
                                            </div>
                                        </>
                                        :
                                        null
                                )
                                :
                                null
                            ))

                            : window.location.pathname === "/EquipeSenior/RegM" ?

                            (this.state.trainingTime.map(
                                equipe => (equipe.fields.equipe === "Régionale Masculine" )?  
                                equipe.fields.jourLieuHeure.map(
                                    lieu => lieu.Jour === "MARDI" ?
                                        <>
                                            <div>
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0)">
                                                        <path d="M14.8546 6.66675C14.8546 11.3334 8.76905 15.3334 8.76905 15.3334C8.76905 15.3334 2.68347 11.3334 2.68347 6.66675C2.68347 5.07545 3.32463 3.54933 4.4659 2.42411C5.60716 1.29889 7.15505 0.666748 8.76905 0.666748C10.383 0.666748 11.9309 1.29889 13.0722 2.42411C14.2135 3.54933 14.8546 5.07545 14.8546 6.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                        <path d="M8.769 8.66675C9.88933 8.66675 10.7975 7.77132 10.7975 6.66675C10.7975 5.56218 9.88933 4.66675 8.769 4.66675C7.64868 4.66675 6.74048 5.56218 6.74048 6.66675C6.74048 7.77132 7.64868 8.66675 8.769 8.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0">
                                                            <rect width="16.2282" height="16" fill="white" transform="translate(0.654907)"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <div className="location">
                                                    {lieu.Lieu}
                                                </div>
                                            </div>
                                            <div className="time">
                                                {lieu.Heure}
                                            </div>
                                        </>
                                        :
                                        null
                                )
                                :
                                null
                            ))

                            : window.location.pathname === "/EquipeSenior/Equipe_M18_F" ?

                            (this.state.trainingTime.map(
                                equipe => (equipe.fields.equipe === "M18 Filles" )?  
                                equipe.fields.jourLieuHeure.map(
                                    lieu => lieu.Jour === "MARDI" ?
                                        <>
                                            <div>
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0)">
                                                        <path d="M14.8546 6.66675C14.8546 11.3334 8.76905 15.3334 8.76905 15.3334C8.76905 15.3334 2.68347 11.3334 2.68347 6.66675C2.68347 5.07545 3.32463 3.54933 4.4659 2.42411C5.60716 1.29889 7.15505 0.666748 8.76905 0.666748C10.383 0.666748 11.9309 1.29889 13.0722 2.42411C14.2135 3.54933 14.8546 5.07545 14.8546 6.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                        <path d="M8.769 8.66675C9.88933 8.66675 10.7975 7.77132 10.7975 6.66675C10.7975 5.56218 9.88933 4.66675 8.769 4.66675C7.64868 4.66675 6.74048 5.56218 6.74048 6.66675C6.74048 7.77132 7.64868 8.66675 8.769 8.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0">
                                                            <rect width="16.2282" height="16" fill="white" transform="translate(0.654907)"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <div className="location">
                                                    {lieu.Lieu}
                                                </div>
                                            </div>
                                            <div className="time">
                                                {lieu.Heure}
                                            </div>
                                        </>
                                        :
                                        null
                                )
                                :
                                null
                            ))

                            : window.location.pathname === "/EquipeSenior/Equipe_M18_M" ?

                            (this.state.trainingTime.map(
                                equipe => (equipe.fields.equipe === "M18 Garçons" )?  
                                equipe.fields.jourLieuHeure.map(
                                    lieu => lieu.Jour === "MARDI" ?
                                        <>
                                            <div>
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0)">
                                                        <path d="M14.8546 6.66675C14.8546 11.3334 8.76905 15.3334 8.76905 15.3334C8.76905 15.3334 2.68347 11.3334 2.68347 6.66675C2.68347 5.07545 3.32463 3.54933 4.4659 2.42411C5.60716 1.29889 7.15505 0.666748 8.76905 0.666748C10.383 0.666748 11.9309 1.29889 13.0722 2.42411C14.2135 3.54933 14.8546 5.07545 14.8546 6.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                        <path d="M8.769 8.66675C9.88933 8.66675 10.7975 7.77132 10.7975 6.66675C10.7975 5.56218 9.88933 4.66675 8.769 4.66675C7.64868 4.66675 6.74048 5.56218 6.74048 6.66675C6.74048 7.77132 7.64868 8.66675 8.769 8.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0">
                                                            <rect width="16.2282" height="16" fill="white" transform="translate(0.654907)"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <div className="location">
                                                    {lieu.Lieu}
                                                </div>
                                            </div>
                                            <div className="time">
                                                {lieu.Heure}
                                            </div>
                                        </>
                                        :
                                        null
                                )
                                :
                                null
                            ))

                            :window.location.pathname === "/EquipeSenior/Equipe_M15_M" ?

                            (this.state.trainingTime.map(
                                equipe => (equipe.fields.equipe === "M15 G" )?  
                                equipe.fields.jourLieuHeure.map(
                                    lieu => lieu.Jour === "MARDI" ?
                                        <>
                                            <div>
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0)">
                                                        <path d="M14.8546 6.66675C14.8546 11.3334 8.76905 15.3334 8.76905 15.3334C8.76905 15.3334 2.68347 11.3334 2.68347 6.66675C2.68347 5.07545 3.32463 3.54933 4.4659 2.42411C5.60716 1.29889 7.15505 0.666748 8.76905 0.666748C10.383 0.666748 11.9309 1.29889 13.0722 2.42411C14.2135 3.54933 14.8546 5.07545 14.8546 6.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                        <path d="M8.769 8.66675C9.88933 8.66675 10.7975 7.77132 10.7975 6.66675C10.7975 5.56218 9.88933 4.66675 8.769 4.66675C7.64868 4.66675 6.74048 5.56218 6.74048 6.66675C6.74048 7.77132 7.64868 8.66675 8.769 8.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0">
                                                            <rect width="16.2282" height="16" fill="white" transform="translate(0.654907)"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <div className="location">
                                                    {lieu.Lieu}
                                                </div>
                                            </div>
                                            <div className="time">
                                                {lieu.Heure}
                                            </div>
                                        </>
                                        :
                                        null
                                )
                                :
                                null
                            ))

                            :window.location.pathname === "/EquipeSenior/Equipe_M13_F" ?

                            (this.state.trainingTime.map(
                                equipe => (equipe.fields.equipe === "M13 F" )?  
                                equipe.fields.jourLieuHeure.map(
                                    lieu => lieu.Jour === "MARDI" ?
                                        <>
                                            <div>
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0)">
                                                        <path d="M14.8546 6.66675C14.8546 11.3334 8.76905 15.3334 8.76905 15.3334C8.76905 15.3334 2.68347 11.3334 2.68347 6.66675C2.68347 5.07545 3.32463 3.54933 4.4659 2.42411C5.60716 1.29889 7.15505 0.666748 8.76905 0.666748C10.383 0.666748 11.9309 1.29889 13.0722 2.42411C14.2135 3.54933 14.8546 5.07545 14.8546 6.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                        <path d="M8.769 8.66675C9.88933 8.66675 10.7975 7.77132 10.7975 6.66675C10.7975 5.56218 9.88933 4.66675 8.769 4.66675C7.64868 4.66675 6.74048 5.56218 6.74048 6.66675C6.74048 7.77132 7.64868 8.66675 8.769 8.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0">
                                                            <rect width="16.2282" height="16" fill="white" transform="translate(0.654907)"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <div className="location">
                                                    {lieu.Lieu}
                                                </div>
                                            </div>
                                            <div className="time">
                                                {lieu.Heure}
                                            </div>
                                        </>
                                        :
                                        null
                                )
                                :
                                null
                            ))

                            :window.location.pathname === "/EquipeSenior/Equipe_M13_M" ?

                            (this.state.trainingTime.map(
                                equipe => (equipe.fields.equipe === "M13 G" )?  
                                equipe.fields.jourLieuHeure.map(
                                    lieu => lieu.Jour === "MARDI" ?
                                        <>
                                            <div>
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0)">
                                                        <path d="M14.8546 6.66675C14.8546 11.3334 8.76905 15.3334 8.76905 15.3334C8.76905 15.3334 2.68347 11.3334 2.68347 6.66675C2.68347 5.07545 3.32463 3.54933 4.4659 2.42411C5.60716 1.29889 7.15505 0.666748 8.76905 0.666748C10.383 0.666748 11.9309 1.29889 13.0722 2.42411C14.2135 3.54933 14.8546 5.07545 14.8546 6.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                        <path d="M8.769 8.66675C9.88933 8.66675 10.7975 7.77132 10.7975 6.66675C10.7975 5.56218 9.88933 4.66675 8.769 4.66675C7.64868 4.66675 6.74048 5.56218 6.74048 6.66675C6.74048 7.77132 7.64868 8.66675 8.769 8.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0">
                                                            <rect width="16.2282" height="16" fill="white" transform="translate(0.654907)"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <div className="location">
                                                    {lieu.Lieu}
                                                </div>
                                            </div>
                                            <div className="time">
                                                {lieu.Heure}
                                            </div>
                                        </>
                                        :
                                        null
                                )
                                :
                                null
                            ))

                            :window.location.pathname === "/EquipeSenior/Equipe_M11" ?

                            (this.state.trainingTime.map(
                                equipe => (equipe.fields.equipe === "M11" )?  
                                equipe.fields.jourLieuHeure.map(
                                    lieu => lieu.Jour === "MARDI" ?
                                        <>
                                            <div>
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0)">
                                                        <path d="M14.8546 6.66675C14.8546 11.3334 8.76905 15.3334 8.76905 15.3334C8.76905 15.3334 2.68347 11.3334 2.68347 6.66675C2.68347 5.07545 3.32463 3.54933 4.4659 2.42411C5.60716 1.29889 7.15505 0.666748 8.76905 0.666748C10.383 0.666748 11.9309 1.29889 13.0722 2.42411C14.2135 3.54933 14.8546 5.07545 14.8546 6.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                        <path d="M8.769 8.66675C9.88933 8.66675 10.7975 7.77132 10.7975 6.66675C10.7975 5.56218 9.88933 4.66675 8.769 4.66675C7.64868 4.66675 6.74048 5.56218 6.74048 6.66675C6.74048 7.77132 7.64868 8.66675 8.769 8.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0">
                                                            <rect width="16.2282" height="16" fill="white" transform="translate(0.654907)"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <div className="location">
                                                    {lieu.Lieu}
                                                </div>
                                            </div>
                                            <div className="time">
                                                {lieu.Heure}
                                            </div>
                                        </>
                                        :
                                        null
                                )
                                :
                                null
                            ))

                            :

                            null
                        }

                    </div>
                </div>

                <div className={"day"}>
                    <div className="textArea">
                        <div className="weekDay">
                            MERCREDI
                        </div>


                        {
                            window.location.pathname === "/EquipeSenior/N2" ?   
                            (this.state.trainingTime.map(
                                equipe => (equipe.fields.equipe === "Nationale 2 Masculine" )?  
                                equipe.fields.jourLieuHeure.map(
                                    lieu => lieu.Jour === "MERCREDI" ?
                                        <>
                                            <div>
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0)">
                                                        <path d="M14.8546 6.66675C14.8546 11.3334 8.76905 15.3334 8.76905 15.3334C8.76905 15.3334 2.68347 11.3334 2.68347 6.66675C2.68347 5.07545 3.32463 3.54933 4.4659 2.42411C5.60716 1.29889 7.15505 0.666748 8.76905 0.666748C10.383 0.666748 11.9309 1.29889 13.0722 2.42411C14.2135 3.54933 14.8546 5.07545 14.8546 6.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                        <path d="M8.769 8.66675C9.88933 8.66675 10.7975 7.77132 10.7975 6.66675C10.7975 5.56218 9.88933 4.66675 8.769 4.66675C7.64868 4.66675 6.74048 5.56218 6.74048 6.66675C6.74048 7.77132 7.64868 8.66675 8.769 8.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0">
                                                            <rect width="16.2282" height="16" fill="white" transform="translate(0.654907)"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <div className="location">
                                                    {lieu.Lieu}
                                                </div>
                                            </div>
                                            <div className="time">
                                                {lieu.Heure}
                                            </div>
                                        </>
                                        :
                                        null
                                )
                                :
                                null
                            ))

                            :window.location.pathname === "/EquipeSenior/Prenat" ?   

                            (this.state.trainingTime.map(
                                equipe => (equipe.fields.equipe === "Pré Nationale Féminine" )?  
                                equipe.fields.jourLieuHeure.map(
                                    lieu => lieu.Jour === "MERCREDI" ?
                                        <>
                                            <div>
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0)">
                                                        <path d="M14.8546 6.66675C14.8546 11.3334 8.76905 15.3334 8.76905 15.3334C8.76905 15.3334 2.68347 11.3334 2.68347 6.66675C2.68347 5.07545 3.32463 3.54933 4.4659 2.42411C5.60716 1.29889 7.15505 0.666748 8.76905 0.666748C10.383 0.666748 11.9309 1.29889 13.0722 2.42411C14.2135 3.54933 14.8546 5.07545 14.8546 6.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                        <path d="M8.769 8.66675C9.88933 8.66675 10.7975 7.77132 10.7975 6.66675C10.7975 5.56218 9.88933 4.66675 8.769 4.66675C7.64868 4.66675 6.74048 5.56218 6.74048 6.66675C6.74048 7.77132 7.64868 8.66675 8.769 8.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0">
                                                            <rect width="16.2282" height="16" fill="white" transform="translate(0.654907)"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <div className="location">
                                                    {lieu.Lieu}
                                                </div>
                                            </div>
                                            <div className="time">
                                                {lieu.Heure}
                                            </div>
                                        </>
                                        :
                                        null
                                )
                                :
                                null
                            ))

                            : window.location.pathname === "/EquipeSenior/RegM" ?

                            (this.state.trainingTime.map(
                                equipe => (equipe.fields.equipe === "Régionale Masculine" )?  
                                equipe.fields.jourLieuHeure.map(
                                    lieu => lieu.Jour === "MERCREDI" ?
                                        <>
                                            <div>
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0)">
                                                        <path d="M14.8546 6.66675C14.8546 11.3334 8.76905 15.3334 8.76905 15.3334C8.76905 15.3334 2.68347 11.3334 2.68347 6.66675C2.68347 5.07545 3.32463 3.54933 4.4659 2.42411C5.60716 1.29889 7.15505 0.666748 8.76905 0.666748C10.383 0.666748 11.9309 1.29889 13.0722 2.42411C14.2135 3.54933 14.8546 5.07545 14.8546 6.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                        <path d="M8.769 8.66675C9.88933 8.66675 10.7975 7.77132 10.7975 6.66675C10.7975 5.56218 9.88933 4.66675 8.769 4.66675C7.64868 4.66675 6.74048 5.56218 6.74048 6.66675C6.74048 7.77132 7.64868 8.66675 8.769 8.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0">
                                                            <rect width="16.2282" height="16" fill="white" transform="translate(0.654907)"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <div className="location">
                                                    {lieu.Lieu}
                                                </div>
                                            </div>
                                            <div className="time">
                                                {lieu.Heure}
                                            </div>
                                        </>
                                        :
                                        null
                                )
                                :
                                null
                            ))

                            : window.location.pathname === "/EquipeSenior/Equipe_M18_F" ?

                            (this.state.trainingTime.map(
                                equipe => (equipe.fields.equipe === "M18 Filles" )?  
                                equipe.fields.jourLieuHeure.map(
                                    lieu => lieu.Jour === "MERCREDI" ?
                                        <>
                                            <div>
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0)">
                                                        <path d="M14.8546 6.66675C14.8546 11.3334 8.76905 15.3334 8.76905 15.3334C8.76905 15.3334 2.68347 11.3334 2.68347 6.66675C2.68347 5.07545 3.32463 3.54933 4.4659 2.42411C5.60716 1.29889 7.15505 0.666748 8.76905 0.666748C10.383 0.666748 11.9309 1.29889 13.0722 2.42411C14.2135 3.54933 14.8546 5.07545 14.8546 6.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                        <path d="M8.769 8.66675C9.88933 8.66675 10.7975 7.77132 10.7975 6.66675C10.7975 5.56218 9.88933 4.66675 8.769 4.66675C7.64868 4.66675 6.74048 5.56218 6.74048 6.66675C6.74048 7.77132 7.64868 8.66675 8.769 8.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0">
                                                            <rect width="16.2282" height="16" fill="white" transform="translate(0.654907)"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <div className="location">
                                                    {lieu.Lieu}
                                                </div>
                                            </div>
                                            <div className="time">
                                                {lieu.Heure}
                                            </div>
                                        </>
                                        :
                                        null
                                )
                                :
                                null
                            ))

                            : window.location.pathname === "/EquipeSenior/Equipe_M18_M" ?

                            (this.state.trainingTime.map(
                                equipe => (equipe.fields.equipe === "M18 Garçons" )?  
                                equipe.fields.jourLieuHeure.map(
                                    lieu => lieu.Jour === "MERCREDI" ?
                                        <>
                                            <div>
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0)">
                                                        <path d="M14.8546 6.66675C14.8546 11.3334 8.76905 15.3334 8.76905 15.3334C8.76905 15.3334 2.68347 11.3334 2.68347 6.66675C2.68347 5.07545 3.32463 3.54933 4.4659 2.42411C5.60716 1.29889 7.15505 0.666748 8.76905 0.666748C10.383 0.666748 11.9309 1.29889 13.0722 2.42411C14.2135 3.54933 14.8546 5.07545 14.8546 6.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                        <path d="M8.769 8.66675C9.88933 8.66675 10.7975 7.77132 10.7975 6.66675C10.7975 5.56218 9.88933 4.66675 8.769 4.66675C7.64868 4.66675 6.74048 5.56218 6.74048 6.66675C6.74048 7.77132 7.64868 8.66675 8.769 8.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0">
                                                            <rect width="16.2282" height="16" fill="white" transform="translate(0.654907)"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <div className="location">
                                                    {lieu.Lieu}
                                                </div>
                                            </div>
                                            <div className="time">
                                                {lieu.Heure}
                                            </div>
                                        </>
                                        :
                                        null
                                )
                                :
                                null
                            ))

                            :window.location.pathname === "/EquipeSenior/Equipe_M15_M" ?

                            (this.state.trainingTime.map(
                                equipe => (equipe.fields.equipe === "M15 G" )?  
                                equipe.fields.jourLieuHeure.map(
                                    lieu => lieu.Jour === "MERCREDI" ?
                                        <>
                                            <div>
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0)">
                                                        <path d="M14.8546 6.66675C14.8546 11.3334 8.76905 15.3334 8.76905 15.3334C8.76905 15.3334 2.68347 11.3334 2.68347 6.66675C2.68347 5.07545 3.32463 3.54933 4.4659 2.42411C5.60716 1.29889 7.15505 0.666748 8.76905 0.666748C10.383 0.666748 11.9309 1.29889 13.0722 2.42411C14.2135 3.54933 14.8546 5.07545 14.8546 6.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                        <path d="M8.769 8.66675C9.88933 8.66675 10.7975 7.77132 10.7975 6.66675C10.7975 5.56218 9.88933 4.66675 8.769 4.66675C7.64868 4.66675 6.74048 5.56218 6.74048 6.66675C6.74048 7.77132 7.64868 8.66675 8.769 8.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0">
                                                            <rect width="16.2282" height="16" fill="white" transform="translate(0.654907)"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <div className="location">
                                                    {lieu.Lieu}
                                                </div>
                                            </div>
                                            <div className="time">
                                                {lieu.Heure}
                                            </div>
                                        </>
                                        :
                                        null
                                )
                                :
                                null
                            ))

                            :window.location.pathname === "/EquipeSenior/Equipe_M13_F" ?

                            (this.state.trainingTime.map(
                                equipe => (equipe.fields.equipe === "M13 F" )?  
                                equipe.fields.jourLieuHeure.map(
                                    lieu => lieu.Jour === "MERCREDI" ?
                                        <>
                                            <div>
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0)">
                                                        <path d="M14.8546 6.66675C14.8546 11.3334 8.76905 15.3334 8.76905 15.3334C8.76905 15.3334 2.68347 11.3334 2.68347 6.66675C2.68347 5.07545 3.32463 3.54933 4.4659 2.42411C5.60716 1.29889 7.15505 0.666748 8.76905 0.666748C10.383 0.666748 11.9309 1.29889 13.0722 2.42411C14.2135 3.54933 14.8546 5.07545 14.8546 6.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                        <path d="M8.769 8.66675C9.88933 8.66675 10.7975 7.77132 10.7975 6.66675C10.7975 5.56218 9.88933 4.66675 8.769 4.66675C7.64868 4.66675 6.74048 5.56218 6.74048 6.66675C6.74048 7.77132 7.64868 8.66675 8.769 8.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0">
                                                            <rect width="16.2282" height="16" fill="white" transform="translate(0.654907)"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <div className="location">
                                                    {lieu.Lieu}
                                                </div>
                                            </div>
                                            <div className="time">
                                                {lieu.Heure}
                                            </div>
                                        </>
                                        :
                                        null
                                )
                                :
                                null
                            ))

                            :window.location.pathname === "/EquipeSenior/Equipe_M13_M" ?

                            (this.state.trainingTime.map(
                                equipe => (equipe.fields.equipe === "M13 G" )?  
                                equipe.fields.jourLieuHeure.map(
                                    lieu => lieu.Jour === "MERCREDI" ?
                                        <>
                                            <div>
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0)">
                                                        <path d="M14.8546 6.66675C14.8546 11.3334 8.76905 15.3334 8.76905 15.3334C8.76905 15.3334 2.68347 11.3334 2.68347 6.66675C2.68347 5.07545 3.32463 3.54933 4.4659 2.42411C5.60716 1.29889 7.15505 0.666748 8.76905 0.666748C10.383 0.666748 11.9309 1.29889 13.0722 2.42411C14.2135 3.54933 14.8546 5.07545 14.8546 6.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                        <path d="M8.769 8.66675C9.88933 8.66675 10.7975 7.77132 10.7975 6.66675C10.7975 5.56218 9.88933 4.66675 8.769 4.66675C7.64868 4.66675 6.74048 5.56218 6.74048 6.66675C6.74048 7.77132 7.64868 8.66675 8.769 8.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0">
                                                            <rect width="16.2282" height="16" fill="white" transform="translate(0.654907)"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <div className="location">
                                                    {lieu.Lieu}
                                                </div>
                                            </div>
                                            <div className="time">
                                                {lieu.Heure}
                                            </div>
                                        </>
                                        :
                                        null
                                )
                                :
                                null
                            ))

                            :window.location.pathname === "/EquipeSenior/Equipe_M11" ?

                            (this.state.trainingTime.map(
                                equipe => (equipe.fields.equipe === "M11" )?  
                                equipe.fields.jourLieuHeure.map(
                                    lieu => lieu.Jour === "MERCREDI" ?
                                        <>
                                            <div>
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0)">
                                                        <path d="M14.8546 6.66675C14.8546 11.3334 8.76905 15.3334 8.76905 15.3334C8.76905 15.3334 2.68347 11.3334 2.68347 6.66675C2.68347 5.07545 3.32463 3.54933 4.4659 2.42411C5.60716 1.29889 7.15505 0.666748 8.76905 0.666748C10.383 0.666748 11.9309 1.29889 13.0722 2.42411C14.2135 3.54933 14.8546 5.07545 14.8546 6.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                        <path d="M8.769 8.66675C9.88933 8.66675 10.7975 7.77132 10.7975 6.66675C10.7975 5.56218 9.88933 4.66675 8.769 4.66675C7.64868 4.66675 6.74048 5.56218 6.74048 6.66675C6.74048 7.77132 7.64868 8.66675 8.769 8.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0">
                                                            <rect width="16.2282" height="16" fill="white" transform="translate(0.654907)"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <div className="location">
                                                    {lieu.Lieu}
                                                </div>
                                            </div>
                                            <div className="time">
                                                {lieu.Heure}
                                            </div>
                                        </>
                                        :
                                        null
                                )
                                :
                                null
                            ))

                            :

                            null
                        }

                    </div>
                </div>

                <div className={"day"}>
                    <div className="textArea">
                        <div className="weekDay">
                            JEUDI
                        </div>


                        {
                            window.location.pathname === "/EquipeSenior/N2" ?   
                            (this.state.trainingTime.map(
                                equipe => (equipe.fields.equipe === "Nationale 2 Masculine" )?  
                                equipe.fields.jourLieuHeure.map(
                                    lieu => lieu.Jour === "JEUDI" ?
                                        <>
                                            <div>
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0)">
                                                        <path d="M14.8546 6.66675C14.8546 11.3334 8.76905 15.3334 8.76905 15.3334C8.76905 15.3334 2.68347 11.3334 2.68347 6.66675C2.68347 5.07545 3.32463 3.54933 4.4659 2.42411C5.60716 1.29889 7.15505 0.666748 8.76905 0.666748C10.383 0.666748 11.9309 1.29889 13.0722 2.42411C14.2135 3.54933 14.8546 5.07545 14.8546 6.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                        <path d="M8.769 8.66675C9.88933 8.66675 10.7975 7.77132 10.7975 6.66675C10.7975 5.56218 9.88933 4.66675 8.769 4.66675C7.64868 4.66675 6.74048 5.56218 6.74048 6.66675C6.74048 7.77132 7.64868 8.66675 8.769 8.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0">
                                                            <rect width="16.2282" height="16" fill="white" transform="translate(0.654907)"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <div className="location">
                                                    {lieu.Lieu}
                                                </div>
                                            </div>
                                            <div className="time">
                                                {lieu.Heure}
                                            </div>
                                        </>
                                        :
                                        null
                                )
                                :
                                null
                            ))

                            :window.location.pathname === "/EquipeSenior/Prenat" ?   

                            (this.state.trainingTime.map(
                                equipe => (equipe.fields.equipe === "Pré Nationale Féminine" )?  
                                equipe.fields.jourLieuHeure.map(
                                    lieu => lieu.Jour === "JEUDI" ?
                                        <>
                                            <div>
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0)">
                                                        <path d="M14.8546 6.66675C14.8546 11.3334 8.76905 15.3334 8.76905 15.3334C8.76905 15.3334 2.68347 11.3334 2.68347 6.66675C2.68347 5.07545 3.32463 3.54933 4.4659 2.42411C5.60716 1.29889 7.15505 0.666748 8.76905 0.666748C10.383 0.666748 11.9309 1.29889 13.0722 2.42411C14.2135 3.54933 14.8546 5.07545 14.8546 6.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                        <path d="M8.769 8.66675C9.88933 8.66675 10.7975 7.77132 10.7975 6.66675C10.7975 5.56218 9.88933 4.66675 8.769 4.66675C7.64868 4.66675 6.74048 5.56218 6.74048 6.66675C6.74048 7.77132 7.64868 8.66675 8.769 8.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0">
                                                            <rect width="16.2282" height="16" fill="white" transform="translate(0.654907)"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <div className="location">
                                                    {lieu.Lieu}
                                                </div>
                                            </div>
                                            <div className="time">
                                                {lieu.Heure}
                                            </div>
                                        </>
                                        :
                                        null
                                )
                                :
                                null
                            ))

                            : window.location.pathname === "/EquipeSenior/RegM" ?

                            (this.state.trainingTime.map(
                                equipe => (equipe.fields.equipe === "Régionale Masculine" )?  
                                equipe.fields.jourLieuHeure.map(
                                    lieu => lieu.Jour === "JEUDI" ?
                                        <>
                                            <div>
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0)">
                                                        <path d="M14.8546 6.66675C14.8546 11.3334 8.76905 15.3334 8.76905 15.3334C8.76905 15.3334 2.68347 11.3334 2.68347 6.66675C2.68347 5.07545 3.32463 3.54933 4.4659 2.42411C5.60716 1.29889 7.15505 0.666748 8.76905 0.666748C10.383 0.666748 11.9309 1.29889 13.0722 2.42411C14.2135 3.54933 14.8546 5.07545 14.8546 6.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                        <path d="M8.769 8.66675C9.88933 8.66675 10.7975 7.77132 10.7975 6.66675C10.7975 5.56218 9.88933 4.66675 8.769 4.66675C7.64868 4.66675 6.74048 5.56218 6.74048 6.66675C6.74048 7.77132 7.64868 8.66675 8.769 8.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0">
                                                            <rect width="16.2282" height="16" fill="white" transform="translate(0.654907)"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <div className="location">
                                                    {lieu.Lieu}
                                                </div>
                                            </div>
                                            <div className="time">
                                                {lieu.Heure}
                                            </div>
                                        </>
                                        :
                                        null
                                )
                                :
                                null
                            ))

                            : window.location.pathname === "/EquipeSenior/Equipe_M18_F" ?

                            (this.state.trainingTime.map(
                                equipe => (equipe.fields.equipe === "M18 Filles" )?  
                                equipe.fields.jourLieuHeure.map(
                                    lieu => lieu.Jour === "JEUDI" ?
                                        <>
                                            <div>
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0)">
                                                        <path d="M14.8546 6.66675C14.8546 11.3334 8.76905 15.3334 8.76905 15.3334C8.76905 15.3334 2.68347 11.3334 2.68347 6.66675C2.68347 5.07545 3.32463 3.54933 4.4659 2.42411C5.60716 1.29889 7.15505 0.666748 8.76905 0.666748C10.383 0.666748 11.9309 1.29889 13.0722 2.42411C14.2135 3.54933 14.8546 5.07545 14.8546 6.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                        <path d="M8.769 8.66675C9.88933 8.66675 10.7975 7.77132 10.7975 6.66675C10.7975 5.56218 9.88933 4.66675 8.769 4.66675C7.64868 4.66675 6.74048 5.56218 6.74048 6.66675C6.74048 7.77132 7.64868 8.66675 8.769 8.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0">
                                                            <rect width="16.2282" height="16" fill="white" transform="translate(0.654907)"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <div className="location">
                                                    {lieu.Lieu}
                                                </div>
                                            </div>
                                            <div className="time">
                                                {lieu.Heure}
                                            </div>
                                        </>
                                        :
                                        null
                                )
                                :
                                null
                            ))

                            : window.location.pathname === "/EquipeSenior/Equipe_M18_M" ?

                            (this.state.trainingTime.map(
                                equipe => (equipe.fields.equipe === "M18 Garçons" )?  
                                equipe.fields.jourLieuHeure.map(
                                    lieu => lieu.Jour === "JEUDI" ?
                                        <>
                                            <div>
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0)">
                                                        <path d="M14.8546 6.66675C14.8546 11.3334 8.76905 15.3334 8.76905 15.3334C8.76905 15.3334 2.68347 11.3334 2.68347 6.66675C2.68347 5.07545 3.32463 3.54933 4.4659 2.42411C5.60716 1.29889 7.15505 0.666748 8.76905 0.666748C10.383 0.666748 11.9309 1.29889 13.0722 2.42411C14.2135 3.54933 14.8546 5.07545 14.8546 6.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                        <path d="M8.769 8.66675C9.88933 8.66675 10.7975 7.77132 10.7975 6.66675C10.7975 5.56218 9.88933 4.66675 8.769 4.66675C7.64868 4.66675 6.74048 5.56218 6.74048 6.66675C6.74048 7.77132 7.64868 8.66675 8.769 8.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0">
                                                            <rect width="16.2282" height="16" fill="white" transform="translate(0.654907)"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <div className="location">
                                                    {lieu.Lieu}
                                                </div>
                                            </div>
                                            <div className="time">
                                                {lieu.Heure}
                                            </div>
                                        </>
                                        :
                                        null
                                )
                                :
                                null
                            ))

                            :window.location.pathname === "/EquipeSenior/Equipe_M15_M" ?

                            (this.state.trainingTime.map(
                                equipe => (equipe.fields.equipe === "M15 G" )?  
                                equipe.fields.jourLieuHeure.map(
                                    lieu => lieu.Jour === "JEUDI" ?
                                        <>
                                            <div>
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0)">
                                                        <path d="M14.8546 6.66675C14.8546 11.3334 8.76905 15.3334 8.76905 15.3334C8.76905 15.3334 2.68347 11.3334 2.68347 6.66675C2.68347 5.07545 3.32463 3.54933 4.4659 2.42411C5.60716 1.29889 7.15505 0.666748 8.76905 0.666748C10.383 0.666748 11.9309 1.29889 13.0722 2.42411C14.2135 3.54933 14.8546 5.07545 14.8546 6.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                        <path d="M8.769 8.66675C9.88933 8.66675 10.7975 7.77132 10.7975 6.66675C10.7975 5.56218 9.88933 4.66675 8.769 4.66675C7.64868 4.66675 6.74048 5.56218 6.74048 6.66675C6.74048 7.77132 7.64868 8.66675 8.769 8.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0">
                                                            <rect width="16.2282" height="16" fill="white" transform="translate(0.654907)"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <div className="location">
                                                    {lieu.Lieu}
                                                </div>
                                            </div>
                                            <div className="time">
                                                {lieu.Heure}
                                            </div>
                                        </>
                                        :
                                        null
                                )
                                :
                                null
                            ))

                            :window.location.pathname === "/EquipeSenior/Equipe_M13_F" ?

                            (this.state.trainingTime.map(
                                equipe => (equipe.fields.equipe === "M13 F" )?  
                                equipe.fields.jourLieuHeure.map(
                                    lieu => lieu.Jour === "JEUDI" ?
                                        <>
                                            <div>
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0)">
                                                        <path d="M14.8546 6.66675C14.8546 11.3334 8.76905 15.3334 8.76905 15.3334C8.76905 15.3334 2.68347 11.3334 2.68347 6.66675C2.68347 5.07545 3.32463 3.54933 4.4659 2.42411C5.60716 1.29889 7.15505 0.666748 8.76905 0.666748C10.383 0.666748 11.9309 1.29889 13.0722 2.42411C14.2135 3.54933 14.8546 5.07545 14.8546 6.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                        <path d="M8.769 8.66675C9.88933 8.66675 10.7975 7.77132 10.7975 6.66675C10.7975 5.56218 9.88933 4.66675 8.769 4.66675C7.64868 4.66675 6.74048 5.56218 6.74048 6.66675C6.74048 7.77132 7.64868 8.66675 8.769 8.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0">
                                                            <rect width="16.2282" height="16" fill="white" transform="translate(0.654907)"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <div className="location">
                                                    {lieu.Lieu}
                                                </div>
                                            </div>
                                            <div className="time">
                                                {lieu.Heure}
                                            </div>
                                        </>
                                        :
                                        null
                                )
                                :
                                null
                            ))

                            :window.location.pathname === "/EquipeSenior/Equipe_M13_M" ?

                            (this.state.trainingTime.map(
                                equipe => (equipe.fields.equipe === "M13 G" )?  
                                equipe.fields.jourLieuHeure.map(
                                    lieu => lieu.Jour === "JEUDI" ?
                                        <>
                                            <div>
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0)">
                                                        <path d="M14.8546 6.66675C14.8546 11.3334 8.76905 15.3334 8.76905 15.3334C8.76905 15.3334 2.68347 11.3334 2.68347 6.66675C2.68347 5.07545 3.32463 3.54933 4.4659 2.42411C5.60716 1.29889 7.15505 0.666748 8.76905 0.666748C10.383 0.666748 11.9309 1.29889 13.0722 2.42411C14.2135 3.54933 14.8546 5.07545 14.8546 6.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                        <path d="M8.769 8.66675C9.88933 8.66675 10.7975 7.77132 10.7975 6.66675C10.7975 5.56218 9.88933 4.66675 8.769 4.66675C7.64868 4.66675 6.74048 5.56218 6.74048 6.66675C6.74048 7.77132 7.64868 8.66675 8.769 8.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0">
                                                            <rect width="16.2282" height="16" fill="white" transform="translate(0.654907)"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <div className="location">
                                                    {lieu.Lieu}
                                                </div>
                                            </div>
                                            <div className="time">
                                                {lieu.Heure}
                                            </div>
                                        </>
                                        :
                                        null
                                )
                                :
                                null
                            ))

                            :window.location.pathname === "/EquipeSenior/Equipe_M11" ?

                            (this.state.trainingTime.map(
                                equipe => (equipe.fields.equipe === "M11" )?  
                                equipe.fields.jourLieuHeure.map(
                                    lieu => lieu.Jour === "JEUDI" ?
                                        <>
                                            <div>
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0)">
                                                        <path d="M14.8546 6.66675C14.8546 11.3334 8.76905 15.3334 8.76905 15.3334C8.76905 15.3334 2.68347 11.3334 2.68347 6.66675C2.68347 5.07545 3.32463 3.54933 4.4659 2.42411C5.60716 1.29889 7.15505 0.666748 8.76905 0.666748C10.383 0.666748 11.9309 1.29889 13.0722 2.42411C14.2135 3.54933 14.8546 5.07545 14.8546 6.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                        <path d="M8.769 8.66675C9.88933 8.66675 10.7975 7.77132 10.7975 6.66675C10.7975 5.56218 9.88933 4.66675 8.769 4.66675C7.64868 4.66675 6.74048 5.56218 6.74048 6.66675C6.74048 7.77132 7.64868 8.66675 8.769 8.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0">
                                                            <rect width="16.2282" height="16" fill="white" transform="translate(0.654907)"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <div className="location">
                                                    {lieu.Lieu}
                                                </div>
                                            </div>
                                            <div className="time">
                                                {lieu.Heure}
                                            </div>
                                        </>
                                        :
                                        null
                                )
                                :
                                null
                            ))

                            :

                            null
                        }

                    </div>
                </div>

                <div className={"day"}>
                    <div className="textArea">
                        <div className="weekDay">
                            VENDREDI
                        </div>


                        {
                            window.location.pathname === "/EquipeSenior/N2" ?   
                            (this.state.trainingTime.map(
                                equipe => (equipe.fields.equipe === "Nationale 2 Masculine" )?  
                                equipe.fields.jourLieuHeure.map(
                                    lieu => lieu.Jour === "VENDREDI" ?
                                        <>
                                            <div>
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0)">
                                                        <path d="M14.8546 6.66675C14.8546 11.3334 8.76905 15.3334 8.76905 15.3334C8.76905 15.3334 2.68347 11.3334 2.68347 6.66675C2.68347 5.07545 3.32463 3.54933 4.4659 2.42411C5.60716 1.29889 7.15505 0.666748 8.76905 0.666748C10.383 0.666748 11.9309 1.29889 13.0722 2.42411C14.2135 3.54933 14.8546 5.07545 14.8546 6.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                        <path d="M8.769 8.66675C9.88933 8.66675 10.7975 7.77132 10.7975 6.66675C10.7975 5.56218 9.88933 4.66675 8.769 4.66675C7.64868 4.66675 6.74048 5.56218 6.74048 6.66675C6.74048 7.77132 7.64868 8.66675 8.769 8.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0">
                                                            <rect width="16.2282" height="16" fill="white" transform="translate(0.654907)"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <div className="location">
                                                    {lieu.Lieu}
                                                </div>
                                            </div>
                                            <div className="time">
                                                {lieu.Heure}
                                            </div>
                                        </>
                                        :
                                        null
                                )
                                :
                                null
                            ))

                            :window.location.pathname === "/EquipeSenior/Prenat" ?   

                            (this.state.trainingTime.map(
                                equipe => (equipe.fields.equipe === "Pré Nationale Féminine" )?  
                                equipe.fields.jourLieuHeure.map(
                                    lieu => lieu.Jour === "VENDREDI" ?
                                        <>
                                            <div>
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0)">
                                                        <path d="M14.8546 6.66675C14.8546 11.3334 8.76905 15.3334 8.76905 15.3334C8.76905 15.3334 2.68347 11.3334 2.68347 6.66675C2.68347 5.07545 3.32463 3.54933 4.4659 2.42411C5.60716 1.29889 7.15505 0.666748 8.76905 0.666748C10.383 0.666748 11.9309 1.29889 13.0722 2.42411C14.2135 3.54933 14.8546 5.07545 14.8546 6.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                        <path d="M8.769 8.66675C9.88933 8.66675 10.7975 7.77132 10.7975 6.66675C10.7975 5.56218 9.88933 4.66675 8.769 4.66675C7.64868 4.66675 6.74048 5.56218 6.74048 6.66675C6.74048 7.77132 7.64868 8.66675 8.769 8.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0">
                                                            <rect width="16.2282" height="16" fill="white" transform="translate(0.654907)"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <div className="location">
                                                    {lieu.Lieu}
                                                </div>
                                            </div>
                                            <div className="time">
                                                {lieu.Heure}
                                            </div>
                                        </>
                                        :
                                        null
                                )
                                :
                                null
                            ))

                            : window.location.pathname === "/EquipeSenior/RegM" ?

                            (this.state.trainingTime.map(
                                equipe => (equipe.fields.equipe === "Régionale Masculine" )?  
                                equipe.fields.jourLieuHeure.map(
                                    lieu => lieu.Jour === "VENDREDI" ?
                                        <>
                                            <div>
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0)">
                                                        <path d="M14.8546 6.66675C14.8546 11.3334 8.76905 15.3334 8.76905 15.3334C8.76905 15.3334 2.68347 11.3334 2.68347 6.66675C2.68347 5.07545 3.32463 3.54933 4.4659 2.42411C5.60716 1.29889 7.15505 0.666748 8.76905 0.666748C10.383 0.666748 11.9309 1.29889 13.0722 2.42411C14.2135 3.54933 14.8546 5.07545 14.8546 6.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                        <path d="M8.769 8.66675C9.88933 8.66675 10.7975 7.77132 10.7975 6.66675C10.7975 5.56218 9.88933 4.66675 8.769 4.66675C7.64868 4.66675 6.74048 5.56218 6.74048 6.66675C6.74048 7.77132 7.64868 8.66675 8.769 8.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0">
                                                            <rect width="16.2282" height="16" fill="white" transform="translate(0.654907)"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <div className="location">
                                                    {lieu.Lieu}
                                                </div>
                                            </div>
                                            <div className="time">
                                                {lieu.Heure}
                                            </div>
                                        </>
                                        :
                                        null
                                )
                                :
                                null
                            ))

                            : window.location.pathname === "/EquipeSenior/Equipe_M18_F" ?

                            (this.state.trainingTime.map(
                                equipe => (equipe.fields.equipe === "M18 Filles" )?  
                                equipe.fields.jourLieuHeure.map(
                                    lieu => lieu.Jour === "VENDREDI" ?
                                        <>
                                            <div>
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0)">
                                                        <path d="M14.8546 6.66675C14.8546 11.3334 8.76905 15.3334 8.76905 15.3334C8.76905 15.3334 2.68347 11.3334 2.68347 6.66675C2.68347 5.07545 3.32463 3.54933 4.4659 2.42411C5.60716 1.29889 7.15505 0.666748 8.76905 0.666748C10.383 0.666748 11.9309 1.29889 13.0722 2.42411C14.2135 3.54933 14.8546 5.07545 14.8546 6.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                        <path d="M8.769 8.66675C9.88933 8.66675 10.7975 7.77132 10.7975 6.66675C10.7975 5.56218 9.88933 4.66675 8.769 4.66675C7.64868 4.66675 6.74048 5.56218 6.74048 6.66675C6.74048 7.77132 7.64868 8.66675 8.769 8.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0">
                                                            <rect width="16.2282" height="16" fill="white" transform="translate(0.654907)"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <div className="location">
                                                    {lieu.Lieu}
                                                </div>
                                            </div>
                                            <div className="time">
                                                {lieu.Heure}
                                            </div>
                                        </>
                                        :
                                        null
                                )
                                :
                                null
                            ))

                            : window.location.pathname === "/EquipeSenior/Equipe_M18_M" ?

                            (this.state.trainingTime.map(
                                equipe => (equipe.fields.equipe === "M18 Garçons" )?  
                                equipe.fields.jourLieuHeure.map(
                                    lieu => lieu.Jour === "VENDREDI" ?
                                        <>
                                            <div>
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0)">
                                                        <path d="M14.8546 6.66675C14.8546 11.3334 8.76905 15.3334 8.76905 15.3334C8.76905 15.3334 2.68347 11.3334 2.68347 6.66675C2.68347 5.07545 3.32463 3.54933 4.4659 2.42411C5.60716 1.29889 7.15505 0.666748 8.76905 0.666748C10.383 0.666748 11.9309 1.29889 13.0722 2.42411C14.2135 3.54933 14.8546 5.07545 14.8546 6.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                        <path d="M8.769 8.66675C9.88933 8.66675 10.7975 7.77132 10.7975 6.66675C10.7975 5.56218 9.88933 4.66675 8.769 4.66675C7.64868 4.66675 6.74048 5.56218 6.74048 6.66675C6.74048 7.77132 7.64868 8.66675 8.769 8.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0">
                                                            <rect width="16.2282" height="16" fill="white" transform="translate(0.654907)"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <div className="location">
                                                    {lieu.Lieu}
                                                </div>
                                            </div>
                                            <div className="time">
                                                {lieu.Heure}
                                            </div>
                                        </>
                                        :
                                        null
                                )
                                :
                                null
                            ))

                            :window.location.pathname === "/EquipeSenior/Equipe_M15_M" ?

                            (this.state.trainingTime.map(
                                equipe => (equipe.fields.equipe === "M15 G" )?  
                                equipe.fields.jourLieuHeure.map(
                                    lieu => lieu.Jour === "VENDREDI" ?
                                        <>
                                            <div>
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0)">
                                                        <path d="M14.8546 6.66675C14.8546 11.3334 8.76905 15.3334 8.76905 15.3334C8.76905 15.3334 2.68347 11.3334 2.68347 6.66675C2.68347 5.07545 3.32463 3.54933 4.4659 2.42411C5.60716 1.29889 7.15505 0.666748 8.76905 0.666748C10.383 0.666748 11.9309 1.29889 13.0722 2.42411C14.2135 3.54933 14.8546 5.07545 14.8546 6.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                        <path d="M8.769 8.66675C9.88933 8.66675 10.7975 7.77132 10.7975 6.66675C10.7975 5.56218 9.88933 4.66675 8.769 4.66675C7.64868 4.66675 6.74048 5.56218 6.74048 6.66675C6.74048 7.77132 7.64868 8.66675 8.769 8.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0">
                                                            <rect width="16.2282" height="16" fill="white" transform="translate(0.654907)"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <div className="location">
                                                    {lieu.Lieu}
                                                </div>
                                            </div>
                                            <div className="time">
                                                {lieu.Heure}
                                            </div>
                                        </>
                                        :
                                        null
                                )
                                :
                                null
                            ))

                            :window.location.pathname === "/EquipeSenior/Equipe_M13_F" ?

                            (this.state.trainingTime.map(
                                equipe => (equipe.fields.equipe === "M13 F" )?  
                                equipe.fields.jourLieuHeure.map(
                                    lieu => lieu.Jour === "VENDREDI" ?
                                        <>
                                            <div>
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0)">
                                                        <path d="M14.8546 6.66675C14.8546 11.3334 8.76905 15.3334 8.76905 15.3334C8.76905 15.3334 2.68347 11.3334 2.68347 6.66675C2.68347 5.07545 3.32463 3.54933 4.4659 2.42411C5.60716 1.29889 7.15505 0.666748 8.76905 0.666748C10.383 0.666748 11.9309 1.29889 13.0722 2.42411C14.2135 3.54933 14.8546 5.07545 14.8546 6.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                        <path d="M8.769 8.66675C9.88933 8.66675 10.7975 7.77132 10.7975 6.66675C10.7975 5.56218 9.88933 4.66675 8.769 4.66675C7.64868 4.66675 6.74048 5.56218 6.74048 6.66675C6.74048 7.77132 7.64868 8.66675 8.769 8.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0">
                                                            <rect width="16.2282" height="16" fill="white" transform="translate(0.654907)"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <div className="location">
                                                    {lieu.Lieu}
                                                </div>
                                            </div>
                                            <div className="time">
                                                {lieu.Heure}
                                            </div>
                                        </>
                                        :
                                        null
                                )
                                :
                                null
                            ))

                            :window.location.pathname === "/EquipeSenior/Equipe_M13_M" ?

                            (this.state.trainingTime.map(
                                equipe => (equipe.fields.equipe === "M13 G" )?  
                                equipe.fields.jourLieuHeure.map(
                                    lieu => lieu.Jour === "VENDREDI" ?
                                        <>
                                            <div>
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0)">
                                                        <path d="M14.8546 6.66675C14.8546 11.3334 8.76905 15.3334 8.76905 15.3334C8.76905 15.3334 2.68347 11.3334 2.68347 6.66675C2.68347 5.07545 3.32463 3.54933 4.4659 2.42411C5.60716 1.29889 7.15505 0.666748 8.76905 0.666748C10.383 0.666748 11.9309 1.29889 13.0722 2.42411C14.2135 3.54933 14.8546 5.07545 14.8546 6.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                        <path d="M8.769 8.66675C9.88933 8.66675 10.7975 7.77132 10.7975 6.66675C10.7975 5.56218 9.88933 4.66675 8.769 4.66675C7.64868 4.66675 6.74048 5.56218 6.74048 6.66675C6.74048 7.77132 7.64868 8.66675 8.769 8.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0">
                                                            <rect width="16.2282" height="16" fill="white" transform="translate(0.654907)"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <div className="location">
                                                    {lieu.Lieu}
                                                </div>
                                            </div>
                                            <div className="time">
                                                {lieu.Heure}
                                            </div>
                                        </>
                                        :
                                        null
                                )
                                :
                                null
                            ))

                            :window.location.pathname === "/EquipeSenior/Equipe_M11" ?

                            (this.state.trainingTime.map(
                                equipe => (equipe.fields.equipe === "M11" )?  
                                equipe.fields.jourLieuHeure.map(
                                    lieu => lieu.Jour === "VENDREDI" ?
                                        <>
                                            <div>
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0)">
                                                        <path d="M14.8546 6.66675C14.8546 11.3334 8.76905 15.3334 8.76905 15.3334C8.76905 15.3334 2.68347 11.3334 2.68347 6.66675C2.68347 5.07545 3.32463 3.54933 4.4659 2.42411C5.60716 1.29889 7.15505 0.666748 8.76905 0.666748C10.383 0.666748 11.9309 1.29889 13.0722 2.42411C14.2135 3.54933 14.8546 5.07545 14.8546 6.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                        <path d="M8.769 8.66675C9.88933 8.66675 10.7975 7.77132 10.7975 6.66675C10.7975 5.56218 9.88933 4.66675 8.769 4.66675C7.64868 4.66675 6.74048 5.56218 6.74048 6.66675C6.74048 7.77132 7.64868 8.66675 8.769 8.66675Z" stroke="#fff" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0">
                                                            <rect width="16.2282" height="16" fill="white" transform="translate(0.654907)"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <div className="location">
                                                    {lieu.Lieu}
                                                </div>
                                            </div>
                                            <div className="time">
                                                {lieu.Heure}
                                            </div>
                                        </>
                                        :
                                        null
                                )
                                :
                                null
                            ))

                            :

                            null
                        }

                    </div>
                </div>

            </div>
            
        </div>
        )
    }
}

export default TrainingTime