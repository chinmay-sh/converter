import React,{useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import TextField from '../TextField/TextField';
import './MassConverter.css';

function Mass() {
    const [inpWeight, setWeight] = useState('');
    const [convWeight, setConvWeight] = useState('');


    function handleInpWeightChange(newWeight){
      setWeight(newWeight);
    }


    return(
      <div>
        <Container fluid="md">
          <Row>
            <Col>
              <h3>Mass Converter</h3>
            </Col>
          </Row>
          <br/>
          <br/>
          <Row>
            <Col lg={8} className="textCol">
              <TextField extension="kg" placeholder="Enter Mass" aria="Mass input" value={inpWeight} onChange={handleInpWeightChange}/>
            </Col>
          </Row>
          <br/>
          <Row>
          <Col lg={8} className="textCol">
              <TextField extension="kg" placeholder="Converted Mass" aria="Mass input" value={convWeight}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }



export default Mass;