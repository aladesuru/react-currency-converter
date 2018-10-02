import React, { Component } from 'react';
import './App.css';

import { exchangeRateInEuro } from './exchange-rate.js';

import Divider from './components/Divider.js';

class App extends Component {
  
  state={
    exchangeRate : exchangeRateInEuro,
    leftRateTo: 0,
    rightRateTo : 0,
    rightRateFrom : exchangeRateInEuro[0].currency,
    leftRateFrom :  exchangeRateInEuro[0].currency,
    valueForRightInput : '',
    valueForleftInput : '',
  };
 
  perCrossCurrency = (euroExchangeRatecurrencyFrom , euroExchangeRatecurrencyTo) => {
     return Number(1/euroExchangeRatecurrencyFrom * euroExchangeRatecurrencyTo).toFixed(4)
  };

componentDidMount = () => {
  this.setState({
    leftRateTo : this.perCrossCurrency(this.leftselectValue.value , this.rightselectValue.value),
    rightRateTo : this.perCrossCurrency(this.rightselectValue.value , this.leftselectValue.value),
  });
  console.log(this.state);
  console.log(this.state.rightRateTo);
};

 
  InputValueIs = (elementValue , rate) => {
    return Number(elementValue * rate).toFixed(2); 
  };
 
 rightSelectChange = (e) => {
    this.setState({
     rightRateFrom : e.target.options[e.target.selectedIndex].innerHTML,
     rightRateTo : this.perCrossCurrency(e.target.value , this.leftselectValue.value),
     leftRateTo : this.perCrossCurrency(this.leftselectValue.value , e.target.value),
    })
  };

   leftSelectChange = (e) => {
    this.setState({
      leftRateFrom : e.target.options[e.target.selectedIndex].innerHTML,
      leftRateTo : this.perCrossCurrency(e.target.value , this.rightselectValue.value),
      rightRateTo : this.perCrossCurrency(this.rightselectValue.value , e.target.value),
    })

    this.rightInputValue.value = "";
    this.leftInputValue.value = "";
  };


  leftInputChange = (e) => {
    this.rightInputValue.value = this.InputValueIs(e.target.value , this.state.leftRateTo);
  };

  rightInputchange = (e) => {
   this.leftInputValue.value = this.InputValueIs(e.target.value , this.state.rightRateTo);
  };

  
  render(){
    return (
      <div className="container">
        <h1>Currency Converter</h1>
        <form>
           <div className="card-container"> 
             <p className="per-rate">{`1 ${this.state.leftRateFrom} = ${this.state.leftRateTo} ${this.state.rightRateFrom}`}</p>
             <div  className="card">
                <select  ref={(select) => this.leftselectValue = select } onChange={this.leftSelectChange}>
                  {
                    this.state.exchangeRate.map((rates , index) => {
                      return <option value={rates.rate} key={index}> {rates.currency} </option>
                    })
                  }
                </select>
                <input type="text" 
                        placeholder="type amount to convert here" 
                        ref={(input) => this.leftInputValue = input }
                        onChange={this.leftInputChange}
                        />
             </div>
            </div>

          <Divider />

            <div className="card-container"> 
             <p className="per-rate">{`1 ${this.state.rightRateFrom} = ${this.state.rightRateTo} ${this.state.leftRateFrom}`}</p>
             <div  className="card">
                <select  ref={(select) => this.rightselectValue = select} onChange={this.rightSelectChange}>
                  {
                    this.state.exchangeRate.map((rates , index) => {
                      return <option value={rates.rate} key={index}> {rates.currency} </option>
                    })
                  }
                </select>
                <input type="text" 
                        placeholder="type amount to convert here" 
                        ref={(input) => this.rightInputValue = input }
                        onChange={this.rightInputchange}
                        />
             </div>
            </div>
        </form>
      </div>
    );
  }
}

export default App;
