import React, { Component } from 'react';

import '../css/HomePageInfo.css';

class HomePageInfo extends Component {
    render() {
        return(
            <div className="HomePageInfo">
                <div className="textArea">
                    <h1>LE SITE INTERNET D’ASNIÈRES VOLLEY FAIT PEAU NEUVE !</h1>
                    <p id="subTitle"> 
                        Après cette longue période d’attente…
                    </p>
                    <p id="content">
                        Nous avons « enfin ! » le plaisir de vous proposer le nouveau site Asnières Volley, qui a pour but principal de promouvoir la pratique du volley-ball à Asnières-sur-Seine. Nous espérons qu’il saura se montrer à la hauteur de vos attentes et que les Asnièroises et les Asnierois de naissance et de cœur, pourront y trouver toutes les informations nécessaires à leurs besoins.
                    </p>
                    <p>
                        Un grand merci à l’ensemble des personnes qui ont participé de près ou de loin à cette réalisation !
                        Blandine, Gary, Yanice, Alexandre, Alice, Imtiaz, Frédéric, Tahuy, M’Hamed et Hicham...
                    </p>
                </div>
            </div>
        )
    }
}

export default HomePageInfo