import React from 'react';
import {Container,Row, Col,Button,Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import CalcImg from './assets/calcImg.svg';
import currencyImg from './assets/currencyConvImg.svg';

export default function Home() {
    return(
        <Container fluid>
            <Row>
                <Col>
                    <h2>Welcome to Universal Calculator</h2>
                </Col>
            </Row>
            <br />
        <Row>
          <Col>
          <br />
            <Card bg="dark" style={{ width: '18rem',borderRadius:"20px",margin:"auto" }}>
                <Card.Img variant="top" src={CalcImg} />
                <Card.Body>
                    <Card.Title>Calculator</Card.Title>
                    <Card.Text>
                        A Simple Calculator
                    </Card.Text>
                    <Button variant="info" as={Link} to="/calc">Basic Calculator</Button>
                </Card.Body>
            </Card>
          </Col>
          <Col>
          <br/>
            <Card bg="dark" style={{ width: '18rem',borderRadius:"20px",margin:"auto"  }}>
                <Card.Img variant="top" src={currencyImg} />
                <Card.Body>
                    <Card.Title>Currency Converter</Card.Title>
                    <Card.Text>
                        A Simple Currency Converter
                    </Card.Text>
                    <Button variant="info" as={Link} to="/currency">Currency Converter</Button>
                </Card.Body>
            </Card>
          </Col>
        </Row>
        <br/>
      </Container>
    );
  }
  