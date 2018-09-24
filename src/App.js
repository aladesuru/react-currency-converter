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
    rateTo: 0,
  }

  componentDidMount =() =>{
    
  }

  onSelectChange = (value) => {
    this.setState({
      rateTo : Number(value),
    })
  }

  render(){
    console.log(this.state.rateTo)
    return (
      <div className="container">
        <h1>Currency Converter</h1>
        <form>
          <LeftSelectBox 
          ratesInEuro={ this.state.exchangeRate }
          rateTo={this.state.rateTo}/>

          <Divider />

          <RightSelectBox 
          ratesInEuro={ this.state.exchangeRate }
          onSelectChange={this.onSelectChange}/>
        </form>
      </div>
    );
  }
}

export default App;
