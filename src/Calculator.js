import React, { Component } from 'react';
//import ExchangeRate from 'react-currency-conversion';


import UsdValue from './UsdValue.js';
import GbpValue from './GbpValue.js';
import TaxValue from './TaxValue.js';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usdValue: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    //alert('USD value is: ' + this.state.usdValue);
    this.props.usdValue =  this.state.usdValue
  }

  handleChange(event) {
    this.setState({
      usdValue: event.target.value
    });


}
  render() {
    return (
      <div className="Calculator">
        <form onSubmit={this.handleSubmit}>
          <h3 className="Currencies" >Enter your USD Figure: </h3>
          <input type="number" id="input" value={this.state.usdValue} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>

        <div className="Currencies">
          <h3 className="usd">{'USD Value : $' + this.state.usdValue} </h3>
        </div>

        <div className="Currencies">
          <h3 className="gbp">{'GBP Value : £' + this.state.usdValue * 1.25}</h3>
        </div>

        <div className="Currencies">
          <h3 className="gbp">{'Tax Liability: £' + Math.round(this.state.usdValue / 3)}</h3>
        </div>

        <div className="Pay">
          <h3 className="Pay">{'Take Home Pay: £' + Math.round((this.state.usdValue * 1.25) - (this.state.usdValue / 3))}</h3>
        </div>        
      </div>
    );
  }
}




export default Calculator;