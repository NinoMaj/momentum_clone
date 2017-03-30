/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTime: new Date()
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      currentTime: new Date()
    });
  }

  render() {
    return (
      <div className="clockStyle">
        {this.state.currentTime.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}
      </div>
    );
  }
}
