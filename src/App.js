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
    leftRateTo: 0,
    rightSelectBoxLabel : '',
    rightRateTo : 0,
    leftSelectBoxLabel : '',

  };

  componentDidMount =() =>{
    
  };

  onSelectChange = (convertToValue , labelFortheSelect) => {
    this.setState({
      leftRateTo : Number(convertToValue),
      rightSelectBoxLabel: '',
    })
  };

   leftSelectChange = (convertToValue , labelFortheSelect) => {
    this.setState({
      rightRateTo : Number(convertToValue),
      leftSelectBoxLabel: labelFortheSelect,
    })
  };


  render(){
    console.log(this.state.leftRateTo)
    return (
      <div className="container">
        <h1>Currency Converter</h1>
        <form>
          <LeftSelectBox 
          ratesInEuro={ this.state.exchangeRate }
          leftRateTo={this.state.leftRateTo}
          rightSelectBoxLabel={this.state.rightSelectBoxLabel}
          leftSelectChange={this.leftSelectChange}
         />

          <Divider />

          <RightSelectBox 
          ratesInEuro={ this.state.exchangeRate }
          onSelectChange={this.onSelectChange}
          rightRateTo={this.state.rightRateTo}
          leftSelectBoxLabel={this.state.leftSelectBoxLabel}
          />
        </form>
      </div>
    );
  }
}

export default App;
