import React, { Component } from 'react';
import Address from './Address';
import Contact from './Contact';
import ContactList from './ContactList';
import contacts from './contacts.json';
import StateDemo from './StateDemo';
import Counter from './Counter';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    const mockAddress = {
      line1: '16 The Harbor',
      town: 'Newport',
      county: 'Gwent',
      country: 'Wales'
    };

    const peter = {
      name: 'Peter Szocs',
      email: 'pszocs@bloomberg.net',
      address: {
        line1: '731 Lexington Ave',
        town: 'New York',
        county: 'NY',
        country: 'USA'
      }
    }

    const reshmi = {
      name: 'Reshmi Krishna',
      email: 'rimi@gmail.com',
      address: {
        line1: '125 Jackson St',
        town: 'Hoboken',
        county: 'NJ',
        country: 'USA'
      }
    }
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Wednesday's React Class</h1>
        </header>
        <b>Static Address:</b>
        <Address address={mockAddress} />
        <hr/>
        <Contact {...peter} />
        <Contact {...reshmi} />
        <hr/>
        <StateDemo />
        <Counter />
        <hr/>
        <ContactList contacts={contacts} />
        <hr/>
        <Footer date="Wednesday">
          <p>One | Two | Three</p>
        </Footer>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
