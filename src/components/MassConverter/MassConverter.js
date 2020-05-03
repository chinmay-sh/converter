import React,{useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import TextField from '../TextField/TextField';
import './MassConverter.css';
import convert from 'convert-units';

function Mass() {
    const [inpWeight, setInpWeight] = useState('');
    const [convWeight, setConvWeight] = useState('');
    const elements = convert().possibilities('mass');
    const [inpUnit,setInpUnit] = useState(elements[0]);
    const [outUnit,setOutUnit] = useState(elements[0]);


    function handleInpWeightChange(newWeight){
      setInpWeight(newWeight);
      setConvWeight(convert(newWeight).from(inpUnit).to(outUnit));
    }

    function handleInpUnitChange(key){
      setInpUnit(elements[key]);
      setInpWeight('');
      setConvWeight('');
    }

    function handleOutUnitChange(key){
      setOutUnit(elements[key]);
      setInpWeight('');
      setConvWeight('');
    }

    return(
      <div>
        <Container fluid="sm">
          <br/>
          <Row>
            <Col>
              <h3>Mass Converter</h3>
            </Col>
          </Row>
          <br/>
          <br/>
          <br/>
          <Row>
            <Col lg={8} className="textCol">
              <TextField extension={inpUnit} type="number" placeholder="Enter Mass" elements={elements} aria="Mass input" 
                value={inpWeight} 
                onChange={handleInpWeightChange}
                onUnitChange={handleInpUnitChange}/>
            </Col>
          </Row>
          <br/>
          <br/>
          <Row>
            <Col lg={8} className="textCol">
              <TextField readOnly extension={outUnit} placeholder="Converted Mass" elements={elements} aria="Mass output" 
              value={convWeight}
              onUnitChange={handleOutUnitChange}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }



export default Mass;