import React, { Component, Fragment } from 'react';
import '../css/home.css';
import PropTypes from 'prop-types';

class ShowAccountsHome extends Component{
    render(){

        
        return(
            <div id="showAccounts">
                    
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
        );
    }
}

ShowAccountsHome.propTypes = {
    acctNo: PropTypes.number,
    acctType: PropTypes.string,
    currBal: PropTypes.number,
    shortName: PropTypes.string
}

export default ShowAccountsHome;