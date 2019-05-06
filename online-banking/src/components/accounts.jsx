import React, { Component} from 'react';
import '../css/home.css';
import ShowAccounts from './showAccounts';
import PropTypes from 'prop-types';

class Accounts extends Component{

    render(){

        let acctList = this.props.acctList;

        return(
            <div id="accounts">
                <div className="addAccountsContainer">
                    <span><h3>Open Account</h3></span>
                    <hr/>
                        <form>
                    
                        <table className='addAccountTbl'>
                            <thead>

                            </thead>
                            <tbody>

                                <tr>
                                    <td>Short Name:</td>
                                    <td><input type="text" name="acct_shortname" onChange={this.props.handleChangeInfo}/></td>
                                </tr>
                                <tr>
                                    <td>Account No.:</td>
                                    <td><input type="text" name="acct_no" onChange={this.props.handleChangeInfo} /></td>
                                </tr>                               
                                <tr>
                                    <td>Account Type:</td>
                                    <td><input type="radio" name="acct_type" value="Savings" onChange={this.props.handleChangeInfo} />Savings <br/>
                                    <input type="radio" name="acct_type" value="Checking" onChange={this.props.handleChangeInfo} />Checking  </td>
                                </tr>
                                <tr>
                                    <td>Current Balance: </td>
                                    <td><input type="text" name="curr_balance" onChange={this.props.handleChangeInfo}/></td>
                                </tr>
                            </tbody>
                            </table>
                            <span className="acctButton"><button type="button" onClick={this.props.handleAddAccounts}>Add Account</button></span>
                        </form>
                </div>

                <div className="editAccountsContainer">
                    <span><h3>Edit Account</h3></span>
                    <hr/>
                        <form>
                    
                        <table className='editAccountTbl'>
                            <thead>

                            </thead>
                            <tbody>

                                <tr>
                                    <td>Account No.:</td>
                                    <td>
                                        <select name="acct_no" onClick={this.props.handleChangeInfo}><option selected="selected">-----</option>{acctList.map((acno)=>
                                            <option key={acno.acct_no} name="acct_no" value={acno.acct_no}>{acno.acct_no}({acno.acct_shortname})</option>)}
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>New Short Name:</td>
                                    <td><input type="text" name="acct_shortname" onChange={this.props.handleChangeInfo}/></td>
                                </tr>
                            </tbody>
                            </table>
                            <span className="acctButton"><button type="button" onClick={this.props.handleEditAccounts}>Edit Account</button></span>
                        </form>
                </div>

                <div id="showAcctHead">
                    <h3>List of Accounts</h3>
                        <hr/>
                </div>
                
                {acctList.map(accounts => {
                   return(
                    
                    <ShowAccounts key={accounts.acct_no} acctNo={accounts.acct_no} shortName={accounts.acct_shortname}
                    acctType={accounts.acct_type} currBal={accounts.curr_balance}/>
                    
                   )
               })}
                    
            </div>
        );
    }
}

Accounts.propTypes = {
    handleChangeInfo: PropTypes.func,
    handleAddAccounts: PropTypes.func,
    handleEditAccounts: PropTypes.func
}

export default Accounts;