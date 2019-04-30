import React, { Component } from 'react';
import './css/main.css';
import Header from './components/header.jsx';
import Body from './components/body.jsx';
import Footer from './components/footer.jsx';
import {
  getDepositor, 
  getAccounts
} from './util/service-helper';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      depList: [],
      acctList: [],
      
    };
  }

  componentDidMount(){
    this.getDepositor();
    this.getAccounts();
  }

  getDepositor(){
    getDepositor().then(res => {
      console.log(res);
      this.setState({depList: res.data});
    
    }
    )
  }

  getAccounts(){
    getAccounts().then(res => { 
      
      this.setState({acctList: res.data});
    
    }
    )
  }

  render() {
    return (
      <div className="App">
        
        <Header />

        <Body depList={this.state.depList}/>

        <Footer />


      </div>
    );
  }
}

export default App;
