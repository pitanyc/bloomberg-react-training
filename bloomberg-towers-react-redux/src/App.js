import React, { Component } from 'react';
import './App.css';
import Column from './Column';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Column
          onAdd={this.handleAdd}
          onDelete={this.handleDelete}
          length={this.props.length}
          onSetHeight={this.handleSetHeight}
        />
      </div>
    );
  }

  handleAdd = () => {
    console.log(`add`);
    this.props.increaseColumn();
  }

  handleDelete = () => {
    console.log(`delete`);
    this.props.decreaseColumn();
  }

}

export default App;
