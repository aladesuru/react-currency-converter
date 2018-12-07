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
    leftInput : 0,
    rightInput: 0,  
    totalAmount : 0,   
  };


  liftUpSelectBoxValues = (value) => {
    console.log('is me')
    this.setState({rightCurrencyRate : value})
  };

/*
  * changeCountryOnSelectBoxChange method is use to change both select box label  
*/

  changeCountryOnSelectBoxChange = (leftOptText , rightOptText) => {
      console.log(leftOptText , 'left box change');
      console.log(rightOptText , 'right box change');

        var elId = 0;
      for (var i = 0; i < this.state.exchangeRate.length ; i++) {
        if (leftOptText && (parseFloat(this.state.exchangeRate[i].currency) ===  parseFloat(leftOptText))) {
            elId = i;
        }else if (rightOptText && parseFloat(this.state.exchangeRate[i].currency) ===  parseFloat(rightOptText)) {
            elId = i;
        }
      }

      if (leftOptText) { 
        this.setState(() => {
          console.log(this.state.exchangeRate[elId].country);
          return {
            leftCountry : this.state.exchangeRate[elId].country,
          }
        })
      } else if(rightOptText) {
        this.setState(() => {
          console.log(this.state.exchangeRate[elId].country);
          return {
            rightCountry : this.state.exchangeRate[elId].country,
          }
        })
      }
  };

/*
  * crossConversion method  
*/
  crossConversion = (selectboxValueInEuro , inputValue) => {
    return Number((1 / selectboxValueInEuro) * inputValue).toFixed(4);
  }

/*
  * OnInputChange method is use for conversion  
*/

  onInputChange = (leftSelectboxValueInEuro , rightSelectboxValueInEuro , inputValue) => {
    if (leftSelectboxValueInEuro) {

        this.setState(() => {
          return {
            totalAmount : this.crossConversion(leftSelectboxValueInEuro , inputValue)
          }
        });

    }else if (rightSelectboxValueInEuro) {
      this.setState(() => {
          return {
            totalAmount : this.crossConversion(rightSelectboxValueInEuro , inputValue)
          }
        });
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
          leftInput : this.leftInput,
          rightInput : this.rightInput,
          totalAmount : this.totalAmount,

          actions: {
            SelectBoxChange : this.changeCountryOnSelectBoxChange,
            liftUpSelectBoxValues : this.liftUpSelectBoxValues,
          },
        }}>

          { this.props.children }

        </CurrencyConverter.Provider>
      );
  }
}

export const Consumer = CurrencyConverter.Consumer;
