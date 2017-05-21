import React from "react";
import { Button, Navbar } from 'react-bootstrap';
import { Link ,NavLink } from 'react-router-dom';

import LoginForm from './components/LoginForm';
import Main from './components/Main';

const Header = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <NavLink to="/">React App  </NavLink>
        <NavLink to="/login">Login</NavLink>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Navbar.Form pullRight>
        {' '}
        <Button type="submit" bsStyle="primary">Logout</Button>
      </Navbar.Form>
    </Navbar.Collapse>
  </Navbar>
);

class App extends React.Component {
  render() {
    return (
      <app>
        <Header/>
        <Main/>
       </app>
    );
  }
}

export default App;
