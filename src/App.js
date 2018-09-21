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
    leftperRate : 0,
    RightperRate : 0,
  }

  leftSelectValueChange = (value) => {
    this.setState({
      leftperRate : value,
    })
  }

  render(){
    return (
      <div className="container">
        <h1>Currency Converter</h1>
        <form>
          <LeftSelectBox 
          ratesInEuro={ this.state.exchangeRate }
          selectValueChange={this.selectValueChange}
          perRate={this.state.perRate}/>

          <Divider />

          <RightSelectBox 
          ratesInEuro={ this.state.exchangeRate }
          selectValueChange={this.selectValueChange}
          perRate={this.state.perRate}/>
        </form>
      </div>
    );
  }
}

export default App;
