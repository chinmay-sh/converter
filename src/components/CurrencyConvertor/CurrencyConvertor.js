import React,{useState} from 'react';
import './CurrencyConvertor.css';
import {Container, Row, Col} from 'react-bootstrap';
import TextField from '../TextField/TextField';


function Currency() {
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
              <h3>Currency Converter</h3>
            </Col>
          </Row>
          <br/>
          <br/>
          <Row>
            <Col lg={8} className="textCol">
              <TextField extension="kg" placeholder="Enter Weight" aria="Weight input" value={inpWeight} onChange={handleInpWeightChange}/>
            </Col>
          </Row>
          <br/>
          <Row>
          <Col lg={8} className="textCol">
              <TextField disabled extension="kg" placeholder="Converted Weight" aria="Weight input" value={convWeight}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }



export default Currency;