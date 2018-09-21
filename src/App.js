import React, { Component } from 'react';
import './App.css';

import { exchangeRateInEuro } from './exchange-rate.js';

//components
import SelectBox from './components/SelectBox.js';
import Divider from './components/Divider.js';

class App extends Component {
  state={
    exchangeRate : exchangeRateInEuro,
  }

  render() {
    return (
      <div className="container">
        <h1>Currency Converter</h1>
        <form>
          <SelectBox ratesInEuro={ this.state.exchangeRate }/>
          <Divider />
          <SelectBox ratesInEuro={ this.state.exchangeRate }/>
        </form>
      </div>
    );
  }
}

export default App;
