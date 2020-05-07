import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import imgtrollface from './assets/trollface.png';
import './NoMatch.css';


function NoMatch() {
    return(
        <div className="nomatch">
            <Container>
                <Row>
                    <Col>
                        <img src={imgtrollface} />
                    </Col>
                </Row>
                <Row className="nomatch">
                    <Button as={NavLink} to="/">GO HOME ?</Button>
                </Row>
            </Container>
        </div>
    );
  }



export default NoMatch;