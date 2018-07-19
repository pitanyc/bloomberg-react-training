import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.click = this.click.bind(this);
  }

  render() {
    return <button id="counter" onClick={this.click}>
              { this.state.count }
           </button>
  }

  click() {
    console.log("click");
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }
}

export default Counter;