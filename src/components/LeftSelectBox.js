import React , { Component } from 'react';
import PropTypes from 'prop-types';


class LeftSelectBox extends Component {

  state ={
    rate_from: 0,
    amountToConvert : 0,
  };

  componentDidMount = () => {
    this.setState({
      rate_from: this.selectValue.name,
    })
  };

  onSelectChangeValue = (e) => {
    this.setState({
      rate_from: e.target.options[e.target.selectedIndex].text
    })
  };


	render(){
    return(
      <div className="card-container"> 
       <p className="per-rate">{`1 ${this.state.rate_from} = ${this.props.rateTo}` }</p>
       <div  className="card">
          <select ref={(select) => this.selectValue = select }  onChange={this.onSelectChangeValue} name='USD'>
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
          <input type="text" placeholder="type amount to convert here" ref={(input) => this.inputValue = input }/>
       </div>
      </div>
   );
  };
}

LeftSelectBox.propTypes={
  ratesInEuro : PropTypes.array.isRequired,
  rateTo : PropTypes.number.isRequired,
};

export default LeftSelectBox ;