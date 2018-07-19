import React from 'react';
import PropTypes from 'prop-types';

const Header = props => (
  <div className="Header">
      <h2>Columns Game</h2>
      <h4>count: {props.count}</h4>
      <h4>name: {props.name}</h4>
  </div>
);

Header.propTypes = {
  count: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};

export default Header;