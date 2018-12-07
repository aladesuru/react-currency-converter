import React, { Component } from 'react';
import './App.css';

// import components
import LeftSelectBox from './components/LeftSelectBox.js';
import RightSelectBox from './components/RightSelectBox.js';
import Divider from './components/Divider.js';

class App extends Component {
  render(){
   return (
       <div className="container">
        <h1>Currency Converter</h1>
        <form>
          <LeftSelectBox />
          <Divider />
          <RightSelectBox />
        </form>
      </div>
    ); 
  }
};

export default App;
