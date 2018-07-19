import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';

class Column extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: this.props.index,
      height: this.props.length,
      inputHeight: this.props.length
    };
  }

  render() {
    const cells = Array.from(new Array(this.props.length), (x, i) => <Cell key={i + 1}>{i + 1}</Cell>);
    return (
      <div className="column">
        <div className="cell-container">
          { cells }
        </div>
        <div>
          <button onClick={this.handleDelete} className="delete">Lower</button>
          <button onClick={this.handleAdd} className="add">Higher</button>
          <input onChange={this.handleSetInputChange} value={this.state.inputHeight} />
          <button onClick={this.handleSet} className="set-height">Set</button>
        </div>
      </div>
    );
  }

  handleAdd = () => {
    this.props.onAdd(this.state.index);
  }

  handleDelete = () => {
    this.props.onDelete(this.state.index);
  }

  handleSet = () => {
    this.props.onSet(
        this.state.index,
        this.state.inputHeight);
  }

  handleSetInputChange = e => {
    // console.log(e);
    this.setState({ inputHeight: e.target.value });
  }

}

Column.propTypes = {
  length: PropTypes.number
};

export default Column;
