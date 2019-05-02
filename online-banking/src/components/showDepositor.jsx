import React, { Component, Fragment } from 'react';
import '../css/home.css';
import PropTypes from 'prop-types';

class ShowDepositor extends Component{
    render(){

        
        return(
            <div id="showDepositor">
                <div>
                   <div id="depName" className="homeTxt">
                   <span>{this.props.depFName} {this.props.depMName} {this.props.depLName}</span>
                   </div>
    
                   <div id="depAddress" className="homeTxt">
                            <span>{this.props.depAddress}</span>
                   </div>
    
                   <div id="depContact" className="homeTxt">
                   <span>{this.props.depContactNo}</span>
                   </div>
            </div>
    

            </div>
        );
    }
}

ShowDepositor.propTypes = {
    depFName: PropTypes.func,
    depMName: PropTypes.func,
    depLName: PropTypes.func,
    depAddress: PropTypes.func,
    depContactNo: PropTypes.func,
}

export default ShowDepositor;