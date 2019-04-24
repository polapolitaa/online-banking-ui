import React, { Component } from 'react';
import '../css/header.css';

class Header extends Component{
    render(){
        return(
            <div id="header" className='divborder'>
                <h1 className="headTxt">JVB Banking Corporation</h1>
				<hr/>
            </div>
        );
    }
}

export default Header;