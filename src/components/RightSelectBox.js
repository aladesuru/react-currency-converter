import React , { Component } from 'react';
import PropTypes from 'prop-types';


class RightSelectBox extends Component {

  state ={
    rate_from: '',
    rate_to : 0,
    amountToConvert : 0,
  };

  selectChange = () => {
    this.props.onSelectChange(this.selectValue.value);
  };


	render(){
    return(
      <div className="card-container"> 
       <p className="per-rate"></p>
       <div  className="card">
          <select onChange={this.selectChange} ref={(select) => this.selectValue = select } name='USD'>
            {
              this.props.ratesInEuro.map((rates , index) => {
                return <option value={rates.rate} key={index}> {rates.currency} </option>
              })
            }
          </select>
          <input type="text" placeholder="type amount to convert here" ref={(input) => this.inputValue = input }/>
       </div>
      </div>
   );
  };
}

RightSelectBox.propTypes={
  ratesInEuro : PropTypes.array.isRequired,
  onSelectChange: PropTypes.func.isRequired
};

export default RightSelectBox ;