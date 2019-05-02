import React, { Component, Fragment } from 'react';
import '../css/home.css';
import PropTypes from 'prop-types';

class Merchants extends Component{
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
                <span><h2>Merchants</h2></span>
                    <hr/>

                    <table className='MerchTbl'>
                        <thead>

                        </thead>
                        <tbody>

                            <tr>
                                <th>ID</th>
                                <th>Merchant</th>
                                <th></th>
                            </tr>
                            {
                                this.props.merchList.map((m) =>{
                                    return(
                                        <tr>
                                        <td>{m.merch_id}</td>
                                        <td>{m.merch_name}</td>
                                        <td><button type="button">Pay Bill</button></td>
                                        </tr>
                                    )
                                })
                            }
                            
                        </tbody>
                    </table>

                </div>
                   
                    
            </div>
        );
    }
}

Merchants.propTypes = {
    handleChangeInfoMerchants: PropTypes.func,
    handleAddMerchants: PropTypes.func,
    merchList: PropTypes.func
}

export default Merchants;