import React,{useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import TextField from '../TextField/TextField';
import './WeightConverter.css';

function Weight() {
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
              <h3>Weight Converter</h3>
            </Col>
          </Row>
          <br/>
          <br/>
          <Row>
            <Col lg={8}>
              <TextField extension="kg" placeholder="Enter Weight" aria="Weight input" value={inpWeight} onChange={handleInpWeightChange}/>
            </Col>
          </Row>
          <br/>
          <Row>
          <Col lg={8}>
              <TextField disabled extension="kg" placeholder="Converted Weight" aria="Weight input" value={convWeight}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }



export default Weight;