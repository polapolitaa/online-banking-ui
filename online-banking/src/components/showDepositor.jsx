import React, { Component } from 'react';
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
                    <span>0{this.props.depContactNo}</span>
                    </div>
            </div>
    

            </div>
        );
    }
}

ShowDepositor.propTypes = {
    depFName: PropTypes.string,
    depMName: PropTypes.string,
    depLName: PropTypes.string,
    depAddress: PropTypes.string,
    depContactNo: PropTypes.number,
    depID: PropTypes.number
}

export default ShowDepositor;