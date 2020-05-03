import React from 'react';
import Home from '../Home/Home';
import Currency from '../CurrencyConvertor/CurrencyConvertor';
import Mass from '../MassConverter/MassConverter';
import NoMatch from '../NoMatch/NoMatch';
import {
    HashRouter as Router,
    Switch,
    Route,
    NavLink,
    Redirect
  } from "react-router-dom";
import {Nav,Navbar,Container,NavDropdown} from 'react-bootstrap';
import logo from '../../logo.svg';
import Length from '../LengthConverter/LengthConverter';
import github from './assets/github.svg';

export default function Routes(){
    return(
      <Router>
        <div>
            <Container fluid>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand>
                    <NavLink to="/" exact activeClassName="active" style={{ textDecoration: 'none',color:"white" }}>
                        CloudMark {' '}
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="ml-auto" >
                        {/* eventKey is required for collapse on select to work */}
                        <Nav.Link style={{ textDecoration: 'none',color:"white" }} eventKey="1" activeClassName="active" as={NavLink} to="/">Home</Nav.Link>
                        <NavDropdown title="Tools" id="nav-dropdown">
                          <NavDropdown.Item eventKey="2.1" activeClassName="active" as={NavLink} to="/mass">Mass Converter</NavDropdown.Item>
                          <NavDropdown.Item eventKey="2.2" activeClassName="active" as={NavLink} to="/currency">Currency Convertor</NavDropdown.Item>
                          <NavDropdown.Item eventKey="2.3" activeClassName="active" as={NavLink} to="/length">Length Convertor</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link style={{ textDecoration: 'none',color:"white" }} eventKey="3" activeClassName="active" as={NavLink} to="/about">About</Nav.Link>
                        <Nav.Link style={{ textDecoration: 'none',color:"white" }} eventKey="4" href="https://github.com/the-redlord/converter" target="_blank">
                          <img src={github} width="20" height="20" />{' '}GitHub</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </Container>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/mass">
              <Mass/>
            </Route>
            <Route path="/currency">
              <Currency />
            </Route>
            <Route path="/length">
              <Length />
            </Route>
            <Route path="/404" component={NoMatch}/>
            <Redirect to="/404" />
          </Switch>
        </div>
      </Router>
    );
  }