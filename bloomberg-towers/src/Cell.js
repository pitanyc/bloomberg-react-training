import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cell extends Component {
  render() {
    return (
      <div className="cell">
        { this.props.children }
      </div>
    );
  }
}

Cell.propTypes = {
  children: PropTypes.node
};

export default Cell;
