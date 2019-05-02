import React, { Component } from 'react';
import '../css/home.css';
import ShowDepositor from './showDepositor';
import ShowAccounts from './showAccounts';

class Home extends Component{
    render(){

        let depList = this.props.depList;
        let acctList = this.props.acctList;

        return(
            <div id="home">

                {/*SHOW DEPOSITOR */}
                <div classname="showDepHead">
                <h3>Depositor Details</h3>
                 <hr/>
                </div>

               {depList.map(depositor => {
                   return(
                    <ShowDepositor depFName={depositor.dep_fname} depMName={depositor.dep_mname} 
                    depLName={depositor.dep_lname} depAddress={depositor.address}
                     depContactNo={depositor.contactNo}/>
                   )
               })}
               

                {/*SHOW ACCOUNTS */}
                <div id="showAcctHead">
                <h3>Account Details</h3>
                    <hr/>
                </div>
                
                {acctList.map(accounts => {
                   return(
                    
                    <ShowAccounts acctNo={accounts.acct_no} shortName={accounts.acct_shortname}
                    acctType={accounts.acct_type} currBal={accounts.curr_balance}/>
            
                   )
               })}

            </div>
        );
    }
}

export default Home;