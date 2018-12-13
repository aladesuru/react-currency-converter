import React , { Component } from 'react';
import { exchangeRateInEuro } from '../exchange-rate.js';


const CurrencyConverter = React.createContext();

export class Provider extends Component{

  state = {
    exchangeRate : exchangeRateInEuro,
    leftCountry : 'USD',
    rightCountry : 'USD',
    leftCurrencyCrossRate : 1,
    rightCurrencyCrossRate : 1,
  };

/*
  * method that gets select box values to determine cross rate
*/
 getSelectBoxValue = (leftSelectboxValue , rightSelectBoxValue) => {
    this.setState(() => {
        return  {leftCurrencyCrossRate : parseFloat(leftSelectboxValue / rightSelectBoxValue).toFixed(4),
          rightCurrencyCrossRate : parseFloat(rightSelectBoxValue / leftSelectboxValue).toFixed(4),
        }
      }
     )
  };

/*
  * methods that calculate amount to convert to using cross rate from getSelectBoxValue method 
*/

  leftInputChange = (leftInputValue , rightInputElement) => {
    if (!isNaN(leftInputValue) && leftInputValue !== "") {
          rightInputElement.value = Number(this.state.leftCurrencyCrossRate * leftInputValue).toFixed(2);
    }else {
        rightInputElement.value = "";
    } 
 };

 rightInputChange = (rightInputValue , leftInputElement) => {
    if (!isNaN(rightInputValue) && rightInputValue !== "") {
        
       leftInputElement.value = Number(this.state.rightCurrencyCrossRate * rightInputValue).toFixed(2);
    } 
    else {
      leftInputElement.value = "";
    }
 };

/*
  * changeCountryOnSelectBoxChange method is use to change both select box label,
  * call getSelectBoxValue, leftInputChange and rightInputchange methods 
*/
  changeCountryOnSelectBoxChange = (leftOptText,rightOptText,leftSelectboxValue,rightSelectBoxValue) => {
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
        
      } 
      else if(rightOptText) {
        this.setState((prevState) => {
          return {
            rightCountry : prevState.exchangeRate[elId].country,
          }
        })
        
      }

      this.getSelectBoxValue(leftSelectboxValue , rightSelectBoxValue);
  };

  render(){
    return (
        <CurrencyConverter.Provider value={{
          exchangeRateInEuro : this.state.exchangeRate,
          leftCountry : this.state.leftCountry,
          rightCountry : this.state.rightCountry,
          leftCurrency : this.state.leftCurrencyCrossRate,
          rightCurrency : this.state.rightCurrencyCrossRate,
          
          actions: {
            SelectBoxChange : this.changeCountryOnSelectBoxChange,
            getSelectBoxValue : this.getSelectBoxValue,
            leftInputChange : this.leftInputChange,
            rightInputChange : this.rightInputChange,
          },
        }}>

          { this.props.children }

        </CurrencyConverter.Provider>
      );
  }
}

export const Consumer = CurrencyConverter.Consumer;
