import React , { Component } from 'react';
import PropTypes from 'prop-types';

class SelectBox extends Component {
	render(){
    return(
      <div className="card-container"> 
       <p className="per-rate"></p>
       <div  className="card">
          <select  ref={(select) => this.selectValue = select }>
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

SelectBox.propTypes={
  ratesInEuro : PropTypes.array.isRequired, 
};

export default SelectBox ;