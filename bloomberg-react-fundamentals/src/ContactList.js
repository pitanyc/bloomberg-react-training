import React, { Component } from 'react';
import Contact from './Contact';

class ContactList extends Component {
  render() {
    return (
      <div>
        { this.props.contacts.map(item => (<Contact {...item} />)) }
      </div>
    );
  }
}

export default ContactList;