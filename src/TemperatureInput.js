import React from 'react';
const scaleNames = {
  c: 'celsius',
  f: 'fahrenheit',
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value); // eslint-disable-line
  }

  render() {
    const temperature = this.props.temperature; // eslint-disable-line
    const scale = this.props.scale; // eslint-disable-line
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input type="number" value={ temperature } onChange={this.handleChange} />
      </fieldset>
    )
  }
}

export default TemperatureInput;
