import React, { Component } from 'react';
import '../css/home.css';
import PropTypes from 'prop-types';

class ListMerchants extends Component{
    render(){

        
        return(
            <div id="listMerchants">
                    
                    <div className="merchDetContainer">

                    <h4 className="shortName">{this.props.shortName}</h4>
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
                            <tr>
                                <td></td>
                                <td>{this.props.merchName}</td>
                                <td><button type="button">Pay Bill</button></td>
                            </tr>
                        </tbody>
                    </table>
                    
                    </div>
                    
                </div>
        );
    }
}

ListMerchants.propTypes = {
    merchName: PropTypes.string
}

export default ListMerchants;