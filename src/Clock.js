import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  }

  componentDidMount() {
    // Runs when the component has been rendered to the DOM
    // Hence, set up the ticker here
    this.timerId = setInterval( () => {
      this.tick();
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    const element = (
      <div>
        <h2>It is { this.state.date.toLocaleTimeString() }.</h2>
      </div>
    );

    return element;
  }
}

export default Clock;
