import React, { Component } from 'react';
import '../css/home.css';
import PropTypes from 'prop-types';

class Home extends Component{
    render(){
        return(
            <div id="home">
               <div id="showDepositor">
                <h3>Depositor Details</h3>
                    <hr/>

                    <div>
                       <div id="depName" className="homeTxt">
                       <span>{this.props.depFName} {this.props.depMName} {this.props.depLName}</span>
                       </div>
        
                       <div id="depAddress" className="homeTxt">
                                <span>{this.props.depAddress}</span>
                       </div>
        
                       <div id="depContact" className="homeTxt">
                       <span>{this.props.depContactNo}</span>
                       </div>
                </div>
        

                </div>

                {/*SHOW ACCOUNTS */}
                <div id="showAccounts">
                    <h3>Account Details</h3>
                    <hr/>
                    
                    <div className="acctDetContainer">
                    
                    <h4 className="shortName">{this.props.shortName}</h4>
                    <hr/>
                    <table className = "acctDetails">
	                <thead></thead>
	
                        <tbody>
                            <tr>
                                <td>Account No.:</td>
                                <td>{this.props.acctNo}</td>
                            </tr>

                            <tr>
                                <td>Account Type:</td>
                                <td>{this.props.acctType}</td>
                            </tr>

                            <tr>
                                <td>Current Balance:</td>
                                <td>{this.props.currBal}</td>
                            </tr>
                        </tbody>
                        
                    </table>
                    
                    </div>

                    
                </div>

            </div>
        );
    }
}

Home.propTypes = {
    depFName: PropTypes.func,
    depMName: PropTypes.func,
    depLName: PropTypes.func,
    depAddress: PropTypes.func,
    depContactNo: PropTypes.func,
    acctNo: PropTypes.func,
    acctType: PropTypes.func,
    currBal: PropTypes.func,
    shortName: PropTypes.func
    
}

export default Home;