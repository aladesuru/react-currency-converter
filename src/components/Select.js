import React , { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component{

 state={
  startRate : 1.1571,
 };

	render(){
   console.log(this.state.optiobValue);
		return(
		 <select>
    {
      this.props.rates.map((rates ,index) => {
       return  <option value={rates.rate} key={index}> {rates.currency} </option>
     })
    }
   </select>
		);
	}

}

Select.propTypes ={
 rates : PropTypes.array.isRequired,
}

export default Select;