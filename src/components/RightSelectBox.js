import React , {Component} from 'react';
import { Consumer } from '../context'

class RightSelectBox  extends Component{
 
  render() {
    return (
       <Consumer>
        {
          context => {
            return (
                <div className="card-container"> 
                 <p className="per-rate">1 {context.rightCountry} = {context.leftCurrency} {context.leftCountry} </p>
                 <div  className="card">
                    <select
                      ref={(select) => this.rightSelectBoxValue=select } 
                      onClick={() => {context.actions.SelectBoxChange(0 , this.rightSelectBoxValue.value)}}>
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


export default RightSelectBox;