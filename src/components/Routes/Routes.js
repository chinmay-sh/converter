import React from 'react';
import Home from '../Home/Home';
import Calc from '../Calculator/Calculator';
import Currency from '../CurrencyConvertor/CurrencyConvertor';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
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
                    <Link to="/" style={{ textDecoration: 'none',color:"white" }}>
                        CloudMark {' '}
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="ml-auto" >
                        {/* eventKey is required for collapse on select to work */}
                        <Nav.Link style={{ textDecoration: 'none',color:"white" }} eventKey="1" as={Link} to="/">Home</Nav.Link>
                        <Nav.Link style={{ textDecoration: 'none',color:"white" }} eventKey="2"  as={Link} to="/calc">Calculator</Nav.Link>
                        <Nav.Link style={{ textDecoration: 'none',color:"white" }} eventKey="3"  as={Link} to="/currency">Currency Convertor</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </Container>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/calc">
              <Calc />
            </Route>
            <Route path="/currency">
              <Currency />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }