import React, { Component } from 'react';
import '../css/body.css';
import Home from './home';
import Accounts from './accounts';
import Merchants from './merchants';
import {
    getDepositor,
    getAccounts,
    getMerchants
  } from '../util/service-helper';
import axios from 'axios';

class Body extends Component{

    constructor(props){
        super(props);
    
        this.state = {
          depList: [],
          acctList: [],
          accounts: {
            acct_no: ' ',
            acct_shortname: ' ',
            acct_type: ' ',
            curr_balance: ' ',
          },
          merchList: [],
          merchants: {
          merch_name: ' ',
          }
        };
      }
    
      componentDidMount(){
        this.getDepositor();
        this.getAccounts();
        this.getMerchants();
      }
      
      //show depositor
      getDepositor(){
        getDepositor().then(res => {
          console.log(res);
          this.setState({depList: res.data});
        
        }
        )
      }

      //list all accounts
      getAccounts(){
        getAccounts().then(res => {
          console.log(res);
          this.setState({acctList: res.data});
        
        }
        )
      }

      //list all merchants
      getMerchants(){
        getMerchants().then(res => {
          console.log(res);
          this.setState({merchList: res.data});
          console.log("GET");
          console.log(res.data);
        })
      }


      handleChangeInfo = e => {
        const {name, value} = e.target;
    
        this.setState((prevState) => ({
          accounts: {
            ...prevState.accounts,
            [name]: value
          }
        }));
      }


      //add accounts
      handleAddAccounts = acct => {
        
        let accounts = this.state.accounts;
        let acctList = [...this.state.acctList];

        acctList.push(accounts);
        this.setState({acctList : acctList});

        acct.preventDefault();

        console.log("POST");
        console.log(accounts);

        let headers = {'Content-Type' : 'application/json',}
        
        axios.post('http://localhost:8080/OnlineBanking/rest/accounts/', accounts, {headers: headers}).then(res => {
          console.log(res.data);
        });
      }

      handleChangeInfoMerchants = e => {
        const {name, value} = e.target;
    
        this.setState((prevState) => ({
          merchants: {
            ...prevState.merchants,
            [name]: value
          }
        }));
      }

      //add merchants
      handleAddMerchants = merch => {
        
        let merchants = this.state.merchants;
        let merchList = [...this.state.merchList];

        merchList.push(merchants);
        this.setState({merchList : merchList});

        merch.preventDefault();

        console.log("POST");
        console.log(merchants);

        let headers = {'Content-Type' : 'application/json',}
        
        axios.post('http://localhost:8080/OnlineBanking/rest/merchants/', merchants, {headers: headers}).then(res => {
          console.log(res.data);
        });
      }

      

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
                    
                    {/*<Home depList={this.state.depList} acctList={this.state.acctList} />*/}

                    {/*<Accounts acctList={this.state.acctList} handleChangeInfo = {this.handleChangeInfo} handleAddAccounts={this.handleAddAccounts}/>*/}

                  
                      <Merchants merchList = {this.state.merchList} 
                        handleChangeInfo = {this.handleChangeInfo} handleAddMerchants = {this.handleAddMerchants}/>
                   
                        
                </div>

            </div>
        );
    }
}

export default Body;