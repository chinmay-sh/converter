import React from 'react';
import Home from '../Home/Home';
import Currency from '../CurrencyConvertor/CurrencyConvertor';
import Weight from '../WeightConverter/WeightConverter';
import NoMatch from '../NoMatch/NoMatch';
import {
    HashRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";
import {Nav,Navbar,Container} from 'react-bootstrap';
import logo from '../../logo.svg';

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
                        <Nav.Link style={{ textDecoration: 'none',color:"white" }} eventKey="2" activeClassName="active" as={NavLink} to="/weight">Weight Converter</Nav.Link>
                        <Nav.Link style={{ textDecoration: 'none',color:"white" }} eventKey="3" activeClassName="active" as={NavLink} to="/currency">Currency Convertor</Nav.Link>
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
            <Route path="/weight">
              <Weight/>
            </Route>
            <Route path="/currency">
              <Currency />
            </Route>
            <Route component={NoMatch}/>
          </Switch>
        </div>
      </Router>
    );
  }