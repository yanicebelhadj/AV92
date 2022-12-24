import React, { Component } from 'react';
import Banniere from '../components/Banniere';
import Navbar from '../components/Navbar';
import Program from '../components/Program';

import '../css/ProgramPage.css';

class ProgramPage extends Component {
    render() {
        return(
            <div className="ProgramPage">
                <Navbar />
                <Banniere retourButton="none" path1="Le Programme"/>

                <div className= "ContainerImage"  style= {{backgroundImage: `url("https://docs.google.com/uc?id=12ANgzjGnHaUtXfQECxXvEMAE1IaLl9e-")`,backgroundSize:"175%",backgroundPosition:" center",width:"100%",height:"100%", minHeight:"100vh"}} >
                    <div className="textArea">
                        <h1>LE PROGRAMME DU WEEK END</h1>
                        <a href= "http://www.ffvbbeach.org/ffvbapp/resu/seniors/2021-2022/index_2md.htm" role="button">SITE FFVB</a>
                    </div>

                    <Program />
                    <a id="mobileRedirection" href= "http://www.ffvbbeach.org/ffvbapp/resu/seniors/2021-2022/index_2md.htm" role="button">SITE FFVB</a>

                </div>

            </div>
        )
    }
}

export default ProgramPage 