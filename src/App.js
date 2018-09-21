import React, { Component } from 'react';
import './App.css';

import { exchangeRateInEuro } from './exchange-rate.js';

//components
import LeftSelectBox from './components/LeftSelectBox.js';
import RightSelectBox from './components/RightSelectBox.js';
import Divider from './components/Divider.js';

class App extends Component {
  state={
    exchangeRate : exchangeRateInEuro,
    leftRate : 0,
    RightRate : 0,
  }

  leftSelectValueChange = (value) => {
    this.setState({
      leftRate : value,
    })
  }

  render(){
    return (
      <div className="container">
        <h1>Currency Converter</h1>
        <form>
          <LeftSelectBox 
          ratesInEuro={ this.state.exchangeRate }
          RightRate={this.state.RightRate}/>

          <Divider />

          <RightSelectBox 
          ratesInEuro={ this.state.exchangeRate }
          leftRate={this.state.leftRate}/>
        </form>
      </div>
    );
  }
}

export default App;
