import React from 'react';
import {Container,Row, Col,Button} from 'react-bootstrap';

export default function Home() {
    return(
        <Container fluid>
            <Row>
                
            </Row>
        <Row>
          <Col>
            <Button variant="success">Basic Calculator</Button>
          </Col>
          <Col>
            <Button variant="info">Currency Converter</Button>
          </Col>
        </Row>
      </Container>
    );
  }
  