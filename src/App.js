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

componentDidMount(){
  this.setState({
    leftRateTo : this.perCrossCurrency(this.leftselectValue.value , this.rightselectValue.value),
    rightRateTo : this.perCrossCurrency(this.rightselectValue.value , this.leftselectValue.value),
  });

  // this.state.leftRateTo = this.perCrossCurrency(this.leftselectValue.value , this.rightselectValue.value)
  // this.state.rightRateTo = this.perCrossCurrency(this.rightselectValue.value , this.leftselectValue.value)

  console.log(this.state.leftRateTo);
  console.log(this.state.rightRateTo);
};

 

  InputValueIs = (elementValue , rate) => {
    return elementValue * rate; 
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
  };


  leftInputChange = (e) => {
    this.setState({
      leftRateTo : this.perCrossCurrency(Number(this.leftselectValue.value) , Number(this.rightselectValue.value)),
    })

    this.rightInputValue.value = Number(this.InputValueIs(e.target.value , this.state.leftRateTo).toFixed(2));
     console.log(this.state.leftRateTo);
     console.log(this.leftInputValue.value);
  };

  rightInputchange = (e) => {
    // this.setState({
    //   valueForRightInput : Number(e.target.value),
    //   valueForleftInput : Number(this.InputValueIs(this.rightInputValue.value , this.state.rightRateTo)).toFixed(2),
    // })
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
