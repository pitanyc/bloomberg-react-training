import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';

class Column extends Component {
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
        </div>
      </div>
    );
  }

  handleAdd = () => {
    this.props.onAdd();
  }

  handleDelete = () => {
    this.props.onDelete();
  }

}

Column.propTypes = {
  length: PropTypes.number
};

export default Column;
