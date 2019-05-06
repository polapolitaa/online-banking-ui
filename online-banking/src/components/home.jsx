import React, { Component } from 'react';
import '../css/home.css';
import ShowDepositor from './showDepositor';
import ShowAccountsHome from './showAccountsHome';

class Home extends Component{
    render(){

        let depList = this.props.depList;
        let acctList = this.props.acctList;

        return(
            <div id="home">

                {/*SHOW DEPOSITOR */}
                <div className="showDepHead">
                <h3>Depositor Details</h3>
                 <hr/>
                </div>

               {depList.map(depositor => {
                   return(
                    <ShowDepositor key={depositor.dep_id} depFName={depositor.dep_fname} depMName={depositor.dep_mname} 
                    depLName={depositor.dep_lname} depAddress={depositor.address}
                     depContactNo={depositor.contactNo} depID={depositor.dep_id}/>
                     
                   )
               })}
               

                {/*SHOW ACCOUNTS */}
                <div id="showAcctHead">
                <h3>Account Details</h3>
                    <hr/>
                </div>
                
                {acctList.map(accounts => {
                   return(
                    <ShowAccountsHome key={accounts.acct_no} acctNo={accounts.acct_no} shortName={accounts.acct_shortname}
                    acctType={accounts.acct_type} currBal={accounts.curr_balance}/>
          
                   )
               })}

            </div>
        );
    }
}

export default Home;