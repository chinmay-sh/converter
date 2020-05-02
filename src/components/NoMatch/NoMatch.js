import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';



function NoMatch() {
    return(
      <div>
        <Container>
          <Row>
            <Col>
              Not Found
            </Col>
          </Row>
        </Container>
      </div>
    );
  }



export default NoMatch;