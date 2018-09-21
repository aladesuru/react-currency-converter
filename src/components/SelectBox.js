import React from 'react';
import PropTypes from 'prop-types';

// components
import Select from './Select.js'
import Input from './Input.js'


const SelectBox = (props) => {
	return(
		<div className="card-container">
     <p className="per-rate">1USD=GBP</p>
     <div  className="card">
        <Select rates={props.ratesInEuro}/>
        <Input />
     </div>
		</div>
	);
}

SelectBox.propTypes={
  ratesInEuro : PropTypes.array.isRequired,
};

export default SelectBox ;