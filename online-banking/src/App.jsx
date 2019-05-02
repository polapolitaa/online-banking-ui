import React, { Component } from 'react';
import './css/main.css';
import Header from './components/header.jsx';
import Body from './components/body.jsx';
import Footer from './components/footer.jsx';

class App extends Component {


  render() {
    return (
      <div className="App">
        
        <Header />

        <Body/>

        <Footer />


      </div>
    );
  }
}

export default App;
