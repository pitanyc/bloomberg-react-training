import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Address extends Component {
  render() {
    return (
      <div>
        <p>{this.props.address.line1}</p>
        <p>{this.props.address.town}, {this.props.address.county} - {this.props.address.country}</p>
      </div>
    );
  }
}

Address.propTypes = {
  address: PropTypes.shape({
    line1: PropTypes.string.isRequired,
    town: PropTypes.string.isRequired,
    county: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,  
  }).isRequired
};

export default Address;