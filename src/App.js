import React, {Component} from 'react';
import Progress from './Progress.js';
import Clock from './Clock.js'
import TempCalculator from './TempCalculator.js';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello React :)</h1>
        {/* Clock component*/}
        <Clock />

        {/* Progress component */}
        <Progress />

        <br />
        {/* Temperature calculator */}
        <TempCalculator />
      </div>
    );
  }
}
export default App;
