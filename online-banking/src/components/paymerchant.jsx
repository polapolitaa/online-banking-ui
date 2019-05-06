import React, { Component, Fragment } from 'react';
import '../css/home.css';
import '../css/merchant.css';
import PropTypes from 'prop-types';

class PayMerchant extends Component{
    render(){

        
        return(

            <div className="pay-merchant">

              <form>
                    
                <table className='addAccountTbl'>
                <thead>
                </thead>
                <tbody>
                    <tr>
                        <td>Merchant:</td>
                        <td><input type="text" name="acct_shortname"/></td>
                   </tr>
                   <tr>                        
                       <td>Account No.:</td>
                       <td><input type="text" name="acct_no" /></td>
                    </tr>                               
                    <tr>
                        <td>Amount: </td>
                        <td><input type="text" name="curr_balance"/></td>
                    </tr>                        
                    </tbody>
                </table>
                <span className="acctButton"><button type="button">Pay Bill</button></span>
                </form>
                                 
                    
            </div>               
                    
          
        );
    }
}

export default PayMerchant;