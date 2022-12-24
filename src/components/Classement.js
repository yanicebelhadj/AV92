import React, { Component } from 'react';

import '../css/Classement.css';

class Classement extends Component {
    render() {
        return(
            <div className="Classement">

                <h1>CLASSEMENT</h1>
                <table>

                    <thead>
                        <tr>
                            <th scope="col" id="num"></th>
                            <th scope="col" id="logo">Équipe</th>
                            <th scope="col" id="point">Points</th>
                            <th scope="col">Joués</th>
                            <th scope="col">Gagnés</th>
                            <th scope="col">Perdus</th>
                            <th scope="col">3-0</th>
                            <th scope="col">3-1</th>
                            <th scope="col">3-2</th>
                            <th scope="col">2-3</th>
                            <th scope="col">1-3</th>
                            <th scope="col">0-3</th>
                            <th scope="col">SetP</th>
                            <th scope="col">SetC</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <th scope="row" id="num">1</th>
                            <td id="logo">
                                <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                                    <img src={"https://docs.google.com/uc?id="+"1qk1CTToZ6xweZEUg5uGYuREJAtbAINam"}></img><p>PUC VOLLEY-BALL 2 CFC</p>
                                </div>
                            </td>
                            <td id="point">0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <th scope="row" id="num">2</th>
                            <td id="logo">
                                <img src={"https://docs.google.com/uc?id="+"1XDJHgmq64pNDhMACnPC6Ylx6IWvcKwOw"}></img><p>ASNIÈRES VOLLEY 92</p>
                            </td>                            
                            <td id="point">0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <th scope="row" id="num">3</th>
                            <td id="logo">
                                <img src={"https://docs.google.com/uc?id="+"1Enl-2wqWeXz8HyRI-INb0T11wv6AxtyC"}></img><p>C’CHARTRES VOLLEY</p>
                            </td>                            
                            <td id="point">0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>

                        <tr>
                            <th scope="row" id="num">4</th>
                            <td id="logo">
                                <img src={"https://docs.google.com/uc?id="+"1I6eAqrwKh77mekEws3TnCpia2iOVe1nO"}></img><p>VOLLEY CLUB HEROUVILLE</p>
                            </td>                               
                            <td id="point">0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                        
                        <tr>
                            <th scope="row" id="num">5</th>
                            <td id="logo">
                                <img src={"https://docs.google.com/uc?id="+"1B8ShNa7oop1SlRzfOc3y-IVIffRPbJdU"}></img><p>VESINET STADE ST-GERMANOIS VB</p>

                            </td>                               
                            <td id="point">0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>

                        <tr>
                            <th scope="row" id="num">6</th>
                            <td id="logo">
                                <img src={"https://docs.google.com/uc?id="+"1zkDihu827jNRMDce7k2u_4YBZHhgVBbn"}></img><p>PARIS AMICALE CAMOU</p>
                            </td>                               
                            <td id="point">0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <th scope="row" id="num">7</th>
                            <td id="logo">
                                <img src={"https://docs.google.com/uc?id="+"1a6b9osQjYmYcSm2w6Vpzr-5r0kF5r4Qt"}></img><p>ACBB</p>
                            </td>                               
                            <td id="point">0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <th scope="row" id="num">8</th>
                            <td id="logo">
                                <img src={"https://docs.google.com/uc?id="+"1r-Q-y7jBz5Hpq4H8C1wBrNd-gMzsJIf4"}></img><p>VILLERS COTTERETS VOLLEY-BALL</p>
                            </td>                               
                            <td id="point">0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <th scope="row" id="num">9</th>
                            <td id="logo">
                                <img src={"https://docs.google.com/uc?id="+"1T8occEGxtOL3ejN7-EELGNcVvQATs3mC"}></img><p>TOURS VOLLEY-BALL 2 CFC</p>
                            </td>                               
                            <td id="point">0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <th scope="row" id="num">10</th>
                            <td id="logo">
                                <img src={"https://docs.google.com/uc?id="+"17NFBVxrwy7QtfBFvQaUY3jHTg0jwJjUM"}></img><p>SPORTING CLUB PARIS VOLLEY</p>
                            </td>                               
                            <td id="point">0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                    </tbody>

                </table>

            </div>
        )
    }
}

export default Classement