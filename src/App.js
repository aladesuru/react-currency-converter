import React, { Component } from 'react';
import { Consumer } from './context'

import Divider from './components/Divider.js';


class App extends Component {

 componentDidMount(){
  this.setInitValue()
 }

  render(){
   return (
       <div className="container">
        <h1>Currency Converter</h1>
        <Consumer>
          {
            context => {

              this.setInitValue = () => {
                context.actions.getSelectBoxValue(this.leftSelectBoxValue.value , this.rightSelectBoxValue.value)
              }

              return (
                  <form>
                   <div className="card-container"> 
                     <p className="per-rate">1 {context.leftCountry} = {context.leftCurrency} {context.rightCountry} </p>
                     <div  className="card">
                        <select 
                          ref={select => this.leftSelectBoxValue=select} 
                          onChange={() => {
                            context.actions.SelectBoxChange(
                              this.leftSelectBoxValue.value , 0 ,this.leftSelectBoxValue.value ,this.rightSelectBoxValue.value 
                              )}
                          }>

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
                            onChange={() => {
                              context.actions.SelectBoxChange(0 , this.rightSelectBoxValue.value , this.leftSelectBoxValue.value ,this.rightSelectBoxValue.value
                                )}
                            }>

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
                                  onChange={() => {context.actions.rightInputChange(this.rightInput.value , this.leftInput)}}
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
