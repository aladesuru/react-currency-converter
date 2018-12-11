import React , { Component } from 'react';
import { exchangeRateInEuro } from '../exchange-rate.js';

const CurrencyConverter = React.createContext();

export class Provider extends Component{

  state = {
    exchangeRate : exchangeRateInEuro,
    leftCountry : 'USD',
    rightCountry : 'USD',
    leftCurrencyCrossRate : 1,
    leftInputValue : "",
    rightCurrencyCrossRate : 1,
    // rightInputValue : 0,
  };

/*
  * method that gets select box values to determine cross rate
*/
 getSelectBoxValue = (leftSelectboxValue , rightSelectBoxValue) => {
    // console.log("leftSelectboxValue :" , leftSelectboxValue);
    // console.log("rightSelectBoxValue :" , rightSelectBoxValue);
    this.setState((prevState) => {
        return  {leftCurrencyCrossRate : parseFloat(leftSelectboxValue / rightSelectBoxValue).toFixed(4),
          rightCurrencyCrossRate : parseFloat(rightSelectBoxValue / leftSelectboxValue).toFixed(4),
        }
      }
     )
    
    // console.log("leftCurrencyCrossRate" , this.state.leftCurrencyCrossRate);
    // console.log("rightCurrencyCrossRate" , this.state.rightCurrencyCrossRate);
  };

/*
  * cross coversion methods  
*/

  leftInputChange = (leftInputValue , rightInputElement) => {
    console.log("leftInputValue is :" , leftInputValue)
    // console.log(this.state.leftCurrencyCrossRate)
    // console.log("rightInputElement is :" , rightInputElement)

    if (!isNaN(leftInputValue) && leftInputValue !== "") {
          rightInputElement.value = Number(this.state.leftCurrencyCrossRate * leftInputValue).toFixed(2)
    }else {
        rightInputElement.value = ""
    } 

    // console.log(leftInputValue);
 };

 // rightInputChange = (rightInputValue) => {
 //    if (!isNaN(rightInputValue) && rightInputValue !== "") {
 //        this.setState({
 //        leftInputValue : Number(this.state.rightCurrencyCrossRate * rightInputValue).toFixed(2)
 //      })
 //    } 
 //    else {
 //      this.setState({leftInputValue: ""})
 //    }
 // };

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
          leftCurrency : this.state.leftCurrencyCrossRate,
          rightCurrency : this.state.rightCurrencyCrossRate,
          // leftInput : this.state.leftInput,
          // rightInput : this.state.rightInput,
          // rightInputValue : this.state.rightInputValue,
          // leftInputValue :this.state.leftInputValue,

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
