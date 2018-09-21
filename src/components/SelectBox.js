import React from 'react';
import PropTypes from 'prop-types';

// components
import Select from './Select.js'
import Input from './Input.js'


class LeftSelectBox extends Component {
	render(){
    return(
      <div className="card-container">
       <p className="per-rate">{props.perRate}</p>
       <div  className="card">
          <Select rates={props.ratesInEuro}/>
          <Input />
       </div>
      </div>
   );
  }
}

LeftSelectBox.propTypes={
  ratesInEuro : PropTypes.array.isRequired,
  perRate: PropTypes.number.isRequired,
  selectValueChange: PropTypes.func.isRequired,

};

export default LeftSelectBox ;