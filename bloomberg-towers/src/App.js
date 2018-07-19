import React, { Component } from 'react';
import './App.css';
import Column from './Column';
import Header from './Header';
import * as ACTIONS from './redux/actionTypes';

class App extends Component {

  render() {
    const name = 'Some name';
    const state = this.props.store.getState();

    return (
      <div>
        <Header count={state.length} name={name} />
        <div className="App">
          { state.map((height, index) => (
            <Column
            key={index}
            index={index}
            onAdd={this.handleAdd}
            onDelete={this.handleDelete}
            onSet={this.handleSet}
            length={height}
            onSetHeight={this.handleSetHeight}
          />
          ))}
          <br/>
          <button onClick={this.handleAddColumn} className="set-height">Add Column</button>
          <button onClick={this.handleRemoveColumn} className="set-height">Remove Column</button>
        </div>
      </div>
    );
  }

  handleAdd = (index) => {
    console.log(`add`);
    this.props.store.dispatch({
      type: ACTIONS.INCREASE,
      index
    });
  }

  handleDelete = (index) => {
    console.log(`delete`);
    this.props.store.dispatch({
      type: ACTIONS.DECREASE,
      index
    });
  }

  handleSet = (index, height) => {
    console.log(`set`);
    this.props.store.dispatch({
      type: ACTIONS.SET_HEIGHT,
      index,
      height
    });
  }

  handleAddColumn = () => {
    console.log(`add column`);
    this.props.store.dispatch({
      type: ACTIONS.ADD_COLUMN
    });
  }

  handleRemoveColumn = () => {
    console.log(`remove column`);
    this.props.store.dispatch({
      type: ACTIONS.REMOVE_COLUMN
    });
  }

}

export default App;
