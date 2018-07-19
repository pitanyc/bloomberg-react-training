import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Address from './Address';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { isExpanded: false };
    this.click = this.click.bind(this);
  }

  render() {
    const isExpanded = this.state.isExpanded;
    return (
      <div style={ isExpanded ? 
                  { border: '1px solid red'} :
                  { border: '1px solid blue'}}
           onClick={ this.click }>
        <p><b>{ this.props.name }</b></p>
        { isExpanded && (
          <div>
            <p><i>{ this.props.email }</i></p>
            <Address address={ this.props.address } />
          </div>
        )}
      </div>
    );
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  click() {
    console.log("click");
    this.setState(prevState => ({ isExpanded: !prevState.isExpanded }));
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.object.isRequired
};

export default Contact;