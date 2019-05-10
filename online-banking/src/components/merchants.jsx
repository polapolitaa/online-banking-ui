import React, { Component } from 'react';
import axios from 'axios';
import '../css/home.css';
import '../css/merchant.css';
import PropTypes from 'prop-types';

class Merchants extends Component{

    constructor(props)
    {
        super(props)

        this.state = ({
            curr_balance2: 0.00,
            amount: 0.00,
            acct_no: ''
        })
    }

    handleChangeAccts = e =>{
        e.preventDefault();

        let acct_no = e.target.value;
        console.log(e.target.value);

        this.setState({acct_no: acct_no});


        axios.get('http://localhost:8080/OnlineBanking/rest/accounts/'+ acct_no).then(res => {
          
            this.setState({acctList: res.data});
            console.log(res.data);

            let curr_balance2 = res.data.curr_balance;

            this.setState({curr_balance2: curr_balance2});

        });

    }

    handleGetAmount = e => 
    {
        this.setState({amount: e.target.value});
    }

     //pay merchant

     handlePayMerchant = merch => {

            merch.preventDefault();

            let new_currBalance = this.state.curr_balance2 - this.state.amount;
                    
            console.log(new_currBalance);
            alert("Bills Paid");

            let headers = {'Content-Type' : 'application/json'}

            axios.put('http://localhost:8080/OnlineBanking/rest/accounts/', new_currBalance, {headers: headers}).then(res => { 
                console.log(res.data);
            
        });
      }

    render(){ 
        return(
            <div id="merchants">
                <div className="addMerchantContainer">
                    <span><h2>Add Merchant</h2></span>
                    <hr/>
                        <form>
                        <table className='merchAccountTbl'>
                            <thead>

                            </thead>
                            <tbody>

                                <tr>
                                    <td>Merchant:</td>
                                    <td><input type="text" name="merch_name" placeholder="" onChange={this.props.handleChangeInfoMerchants}/></td>
                                </tr>
                            </tbody>
                            </table>
                            <span className="addMerchButton"><button type="button" onClick={this.props.handleAddMerchants}>Add Merchant</button></span>
                        </form>
                </div>

                <div className="showMerchantContainer">
                <span><h2>Bills Payment</h2></span>
                    <hr/>

                    {/*PAY MERCHANT */}
                    <div className="pay-merchant">
                    <form>
                    
                    <table className='pay-merchant-tbl'>
                        <thead>

                        </thead>
                        <tbody>

                            <tr>
                                <td>Merchant:</td>
                                <td><select name="merch_name" onClick={this.props.handleChangeInfoMerchants}>
                                            <option>-----</option>
                                        {this.props.merchList.map((merch)=>
                                            <option key={merch.merch_id} name="merch_name" value={merch.merch_name}>{merch.merch_name}
                                            </option>)}
                                        </select></td>
                            </tr>
                            <tr><td>Account No.:</td>
                            <td><select name="acct_no" onClick={this.handleChangeAccts}>
                                            <option>-----</option>
                                        {this.props.acctList.map((acno)=>
                                            <option key={acno.acct_no} name="acct_no" value={acno.acct_no}>{acno.acct_no}({acno.acct_shortname})
                                            </option>)}
                                        </select></td>
                            
                            </tr>                               
                            <tr>
                                <td>Amount: </td>
                                <td><input type="text" name="curr_balance" onChange={this.handleGetAmount}/></td>
                            </tr>
                        </tbody>
                        </table>
                        <span className="acctButton"><button type="button" onClick={this.handlePayMerchant}>Pay Bill</button></span>
                    </form>
                    </div>
                    

                </div>
                   
                    
            </div>
        );
    }
}

Merchants.propTypes = {
    handleChangeInfoMerchants: PropTypes.func,
    handleAddMerchants: PropTypes.func,
    handleChangeInfo: PropTypes.func,
    merchList: PropTypes.array,
    acctList: PropTypes.array
}

export default Merchants;