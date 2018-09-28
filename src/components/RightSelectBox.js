import React , { Component } from 'react';
import PropTypes from 'prop-types';


class RightSelectBox extends Component {

  state ={
    rate_from: '',
    rate_to : 0,
    amountToConvert : 0,
  };

  componentWillMount(){
    this.rate_from ='USD';
  };

  selectChange = (e) => {
    this.rate_from = e.target.options[e.target.selectedIndex].innerHTML
    this.props.rightSelectChange(this.selectValue.value , this.rate_from);
  };


	render(){
    return(
      <div className="card-container"> 
       <p className="per-rate">{`1 ${this.rate_from} = ${this.props.rightRateTo} ${this.props.leftSelectBoxLabel}`}</p>
       <div  className="card">
          <select onChange={this.selectChange} ref={(select) => this.selectValue = select } name='USD'>
            {
              this.props.ratesInEuro.map((rates , index) => {
                return <option value={rates.rate} key={index}> {rates.currency} </option>
              })
            }
          </select>
          <input type="text" 
                  placeholder="type amount to convert here" 
                  ref={(input) => this.inputValue = input }
                  />
       </div>
      </div>
   );
  };
}

RightSelectBox.propTypes={
  ratesInEuro : PropTypes.array.isRequired,
  rightSelectChange: PropTypes.func.isRequired,
  rightRateTo : PropTypes.number.isRequired,
  leftSelectBoxLabel : PropTypes.string.isRequired,
};

export default RightSelectBox ;