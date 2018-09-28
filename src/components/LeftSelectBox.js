import React , { Component } from 'react';
import PropTypes from 'prop-types';

class LeftSelectBox extends Component {

  state ={
    leftRateTo: 0,
    amountToConvert : 0,
  };

   componentWillMount() {
    this.labelforselect='USD';
  };

  onSelectChangeValue = (e) => {
    this.labelforselect = e.target.options[e.target.selectedIndex].innerHTML
    this.props.leftSelectChange(this.selectValue.value , this.labelforselect);
    this.InputChange();
  };

  // onInputChange = () => {
  //   console.log(this.inputValue.value);
  //   console.log(this.selectValue.value);
  //   console.log(this.props.leftRateTo);

  //   this.valueForRightInput = (this.inputValue.value/this.selectValue.value * this.props.leftRateTo)
  //   this.props.InputChange(this.valueForRightInput);
  // }

	render(){
    return(
      <div className="card-container"> 
       <p className="per-rate">{`1 ${this.labelforselect} = ${this.props.leftRateTo} ${this.props.rightSelectBoxLabel}` }</p>
       <div  className="card">
          <select id='hello' ref={(select) => this.selectValue = select }  onChange={this.onSelectChangeValue} name='USD'>
            {
              this.props.ratesInEuro.map((rates , index) => {
                return <option
                          value={rates.rate} 
                          key={index}
                          name={rates.currency}
                          > 
                          {rates.currency}
                        </option>
              })
            }
          </select>
          <input type="text" placeholder="type amount to convert here" 
                  ref={(input) => this.inputValue = input }
                 />
       </div>
      </div>
   );
  };
}

LeftSelectBox.propTypes={
  ratesInEuro : PropTypes.array.isRequired,
  leftRateTo : PropTypes.number.isRequired,
  rightSelectBoxLabel: PropTypes.string.isRequired,
  leftSelectChange : PropTypes.func.isRequired,
};

export default LeftSelectBox ;