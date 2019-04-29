import React, { Component } from 'react';
import '../css/home.css';

class Home extends Component{
    render(){
        return(
            <div id="home">
               <div id="showDepositor">
                <h3>Depositor Details</h3>
                    <hr/>

                    <div id="depName" className="homeTxt">
                        <span>PAULA GUILLERO DICHOSO</span>
                    </div>

                    <div id="depAddres" className="homeTxt">
                        <span>QUEZON CITY PHILIPPINES</span>
                    </div>

                    <div id="depContact" className="homeTxt">
                        <span>09560598369</span>
                    </div>
                </div>

                <div id="showAccounts">
                    <h3>Account Details</h3>
                    <hr/>
                
                </div>

            </div>
        );
    }
}

export default Home;