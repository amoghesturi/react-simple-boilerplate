import React from 'react';
import ProgressBar from './ProgressBar.js'

class Progress extends React.Component{
  constructor(props) {
    super(props);
    this.state = { value: 25 };
  }

  setValue() {
    this.setState( { value: this.refs.range.value } );
  }

  render() {
    return (
      <div className="react-progress-example">
        <input
          ref="range"
          type="range"
          min="0"
          max="100"
          defaultValue={this.state.value}
          onChange={() => this.setValue()}
        />
        <ProgressBar current={this.state.value} total="100" />
      </div>
    )
  }
}

export default Progress;
