import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Address from './Address';
import Contact from './Contact';
import contacts from './contacts.json';

const Home = props => (
  <div>
      <h2>Home</h2>
  </div>
);

const Contacts = ({ match }) => (
  <div>
    <h2>Contacts</h2>
    <ul>
      <li>
        <Link to={`${match.url}/1`}>John Andrews</Link>
      </li>
      <li>
        <Link to={`${match.url}/2`}>Peter Munro</Link>
      </li>
      <li>
        <Link to={`${match.url}/7`}>Who Is This</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:contactId`} component={({ match }) => {
      // console.log(match);
      const contactId = match.url.substr(match.url.lastIndexOf('/') + 1);
      console.log(contactId);
      return ( 
        <Contact {...contacts[contactId - 1]} />
      )
    }} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a contact.</h3>}
    />
  </div>
);

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

    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/address">Address</Link></li>
          <li><Link to="/contact">Contact Peter</Link></li>
          <li><Link to="/contacts">Contacts</Link></li>
        </ul>
        <hr />
        <Route exact path="/" component={Home} />
        <Route path="/address" component={(props) => ( <Address address={mockAddress} /> )} />
        <Route path="/contact" component={() => ( <Contact {...peter} /> )} />
        <Route path="/contacts" component={Contacts} />
      </div>
    );
  }
}

export default App;