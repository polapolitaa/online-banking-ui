import React, { Component } from 'react';
import '../css/body.css';
import Home from './home';


class Body extends Component{
    render(){
        return(
            <div id="body" className='divborder'>
               <div id="func">
                    
                    <div id="home">
                        <button className="button" name="home">Home</button>
                    </div>

                    <div id="accounts">
                        <button className="button" name="accounts">Accounts</button>
                    </div>

                    <div id="merchants">
                        <button className="button" name="merchants">Merchants</button>
                    </div>

                    <div id="Transactions">
                        <button className="button" name="Transactions">Transactions</button> 
                    </div>           
                </div>
                
                <div id="def-views">
                    <Home />
                </div>

            </div>
        );
    }
}

export default Body;