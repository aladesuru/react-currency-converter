import React, { Component } from 'react';
import { Consumer } from './context'
import './App.css';

// import components
// import LeftSelectBox from './components/LeftSelectBox.js';
// import RightSelectBox from './components/RightSelectBox.js';

import Divider from './components/Divider.js';


class App extends Component {

 // state = {
 //  leftInputValue : "",
 //  rightInputValue : ""
 // }

 // leftInputChange = (e) => {
 //    if (!isNaN(e.target.value) && e.target.value !== "") {
 //        this.setState({
 //        rightInputValue : Number(this.leftCurrency * e.target.value).toFixed(2)
 //      })
 //      this.rightInput.value = this.state.rightInputValue;
 //    } 
 //    else {
 //      this.rightInput.value = "";
 //    }
 //    // console.log("right Input Value is :" , this.state.rightInputValue);
 // }

 // rightInputChange = (e) => {
 //    if (!isNaN(e.target.value) && e.target.value !== "") {
 //        this.setState({
 //        leftInputValue : Number(this.rightCurrency * e.target.value).toFixed(2)
 //      })
 //      this.leftInput.value = this.state.leftInputValue
 //    } 
 //    else {
 //        this.leftInput.value = "";
 //    }
 // }

 componentDidMount(){
  this.getValue()
 }

  render(){
   return (
       <div className="container">
        <h1>Currency Converter</h1>
        <Consumer>
          {
            context => {
              // this.rightCurrency = context.rightCurrency
              // this.leftCurrency = context.leftCurrency
              this.getValue = () => {context.actions.getSelectBoxValue(this.leftSelectBoxValue.value , this.rightSelectBoxValue.value)}
              // this.rightValue = context.rightInputValue

              return (
                  <form>
                   <div className="card-container"> 
                     <p className="per-rate">1 {context.leftCountry} = {context.leftCurrency} {context.rightCountry} </p>
                     <div  className="card">
                        <select 
                          ref={select => this.leftSelectBoxValue=select} 
                          onClick={() => {context.actions.SelectBoxChange(this.leftSelectBoxValue.value , 0)}}
                          onChange={() => {context.actions.getSelectBoxValue(this.leftSelectBoxValue.value , this.rightSelectBoxValue.value)}}
                          >
                          {
                            context.exchangeRateInEuro.map((rate , index) => {
                              return (
                                <option value={rate.currency} key={index}>
                                  { rate.country }
                                </option> 
                                )
                            })
                          }
                        </select>
                        
                        <input type="text" 
                                placeholder="type amount to convert here" 
                                ref={input => this.leftInput=input}
                                onChange={() => {context.actions.leftInputChange(this.leftInput.value , this.rightInput)}}
                                />
                     </div>
                   </div>
                   
                    <Divider />

                    <div className="card-container"> 
                       <p className="per-rate">1 {context.rightCountry} = {context.rightCurrency} {context.leftCountry} </p>
                       <div  className="card">
                          <select
                            ref={(select) => this.rightSelectBoxValue=select } 
                            onClick={() => {context.actions.SelectBoxChange(0 , this.rightSelectBoxValue.value)}}
                            onChange={() => {context.actions.getSelectBoxValue(this.leftSelectBoxValue.value , this.rightSelectBoxValue.value)}}>
                            {
                              context.exchangeRateInEuro.map((rate , index) => {
                                return (
                                  <option value={rate.currency} key={index}>
                                    { rate.country }
                                  </option> 
                                  )
                              })
                            }
                          </select>
                          <input type="text" 
                                  placeholder="type amount to convert here" 
                                  ref={input => this.rightInput=input}
                                  // value={context.rightInputValue}
                                  // onChange={(e) => {context.actions.rightInputChange(e.target.value)}}
                                  />
                       </div>
                    </div>
                  </form>
                );
            }
          }
        </Consumer>
      </div>
    ); 
  }
};

export default App;
