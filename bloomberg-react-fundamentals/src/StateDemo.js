import React, { Component } from 'react';

class StateDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'initial state'
    }
    setTimeout(() => this.setState({ message: 'hello world!' }), 5000)
  }

  render() {
    return (
      <div>
        <p>State: { this.state.message }</p>
      </div>
    );
  }
}

export default StateDemo;