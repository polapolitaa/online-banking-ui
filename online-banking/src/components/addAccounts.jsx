import React, { Component, Fragment } from 'react';
import '../css/home.css';
import ShowAccounts from './showAccounts';
import PropTypes from 'prop-types';

class AddAccounts extends Component{
    render(){
        
        let acctList = this.props.acctList;

        return(
            <div id="addAccounts">
                <div className="addAccountsContainer">
                    <span><h1>Add Account</h1></span>
                </div>   

                <form>
                Account No.: <br/> <input type="number" name="acctNo" placeholder="1234567890" onChange={this.props.handleChangeInfo} /><br/>
                Account Short Name: <br/> <input type="text" name="shortName" placeholder="BILLS" onChange={this.props.handleChangeInfo} /><br/>
                Account Type: <br/> <input type="text" name="type" placeholder="Savings, Checking" onChange={this.props.handleChangeInfo} /><br/>
                Current Balance: <br/> <input type="number" name="currBalance" placeholder="12,000" onChange={this.props.handleChangeInfo}/><br/>
                <button type="button" onClick={this.props.handleAddAccounts}>Add</button>
                </form>

            </div>
        );
    }
}

AddAccounts.propTypes = {
    handleChangeInfo: PropTypes.func,
    handleAddAccounts: PropTypes.func
}

export default AddAccounts;