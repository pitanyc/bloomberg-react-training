import React, { Component } from 'react';
import PropTypes from 'prop-types';

// With class:
class FooterClass extends Component {
  constructor(props) {
    // 1st way
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    console.log(this.props);
  }

  // 2nd way
  handleClick = (props) => {
    console.log(this.props);
  }

  render() {
    return (
      <footer className="footer-content" onClick={ this.handleClick }>
        <div className="container">
          &copy; Acme Industries Inc, {this.props.date || new Date().getFullYear()}
        </div>
      </footer>
    );
  }
}

// With SFC:
const Footer = props => (
  <footer className="footer-content">
    <div className="container">
      {props.children}
      &copy; Acme Industries Inc, {props.date || new Date().getFullYear()}
    </div>
  </footer>
)

// must be lower case on the component name
Footer.propTypes = {
  date: PropTypes.string.isRequired   // but here it must be UpperCase PropTypes
};

export default Footer;