import React, { Component } from 'react';
import { Consumer } from '../context'

class LeftSelectBox extends Component{

 // state = {
 //  leftSelectBoxValue : 0,
 // }

 componentDidMount() {
  this.setState(() => {
    return {
      leftSelectBoxValue : this.leftSelectBoxValue.value,
    }
  })
  console.log(this.leftSelectBoxValue.value)
 }

 // getSelectValue = () => {

 // }

  render() {
    return (
       <Consumer>
        {
          context => {
            return (
                <div className="card-container"> 
                 <p className="per-rate">1 {context.leftCountry} = {context.rightCurrency} {context.rightCountry} </p>
                 <div  className="card">
                    <select 
                      ref={select => this.leftSelectBoxValue=select} 
                      onClick={() => {context.actions.SelectBoxChange(this.leftSelectBoxValue.value , 0)}}
                      onLoad={() => {context.actions.liftUpSelectBoxValues(this.state.leftSelectBoxValue)}}>
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
                            />
                 </div>
                </div>
              );
          }
        }
       </Consumer>
    );
  }	
}

export default LeftSelectBox;