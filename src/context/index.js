import React , { Component } from 'react';
import { exchangeRateInEuro } from '../exchange-rate.js';

const CurrencyConverter = React.createContext();

export class Provider extends Component{

  state = {
    exchangeRate : exchangeRateInEuro,
    leftCountry : 'USD',
    rightCountry : 'USD',
    leftCurrencyRate : 1,
    rightCurrencyRate : 1,
  };

 getSelectBoxValues = (value1 , value2) => {
    this.setState(
      {leftCurrencyRate : parseFloat(value1 / value2).toFixed(4),
        rightCurrencyRate : parseFloat(value2 / value1).toFixed(4),
      })
  };

/*
  * changeCountryOnSelectBoxChange method is use to change both select box label  
*/

  changeCountryOnSelectBoxChange = (leftOptText , rightOptText) => {
        var elId = 0;
      for (var i = 0; i < this.state.exchangeRate.length ; i++) {
        if (leftOptText && (parseFloat(this.state.exchangeRate[i].currency) ===  parseFloat(leftOptText))) {
            elId = i;
        }else if (rightOptText && parseFloat(this.state.exchangeRate[i].currency) ===  parseFloat(rightOptText)) {
            elId = i;
        }
      }

      if (leftOptText) { 
        this.setState((prevState) => {
          return {
            leftCountry : prevState.exchangeRate[elId].country,
          }
        })
      } else if(rightOptText) {
        this.setState((prevState) => {
          return {
            rightCountry : prevState.exchangeRate[elId].country,
          }
        })
      }
  };

  render(){
    return (
        <CurrencyConverter.Provider value={{
          exchangeRateInEuro : this.state.exchangeRate,
          leftCountry : this.state.leftCountry,
          rightCountry : this.state.rightCountry,
          leftCurrency : this.state.leftCurrencyRate,
          rightCurrency : this.state.rightCurrencyRate,
          leftInput : this.state.leftInput,
          rightInput : this.state.rightInput,

          actions: {
            SelectBoxChange : this.changeCountryOnSelectBoxChange,
            liftUpSelectBoxValues : this.getSelectBoxValues,
          },
        }}>

          { this.props.children }

        </CurrencyConverter.Provider>
      );
  }
}

export const Consumer = CurrencyConverter.Consumer;
