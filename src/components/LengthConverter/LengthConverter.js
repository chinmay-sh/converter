import React,{useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import TextField from '../TextField/TextField';
import './LengthConverter.css';
import convert from 'convert-units';

function Length() {
    const [inpLength, setInpLength] = useState('');
    const [convLength, setConvLength] = useState('');
    const elements = convert().possibilities('length');
    const [inpUnit,setInpUnit] = useState(elements[0]);
    const [outUnit,setOutUnit] = useState(elements[0]);


    function handleInpLengthChange(newLength){
      setInpLength(newLength);
      setConvLength(convert(newLength).from(inpUnit).to(outUnit));
    }

    function handleInpUnitChange(key){
      setInpUnit(elements[key]);
      setInpLength('');
      setConvLength('');
    }

    function handleOutUnitChange(key){
     
      setOutUnit(elements[key]);
      setInpLength('');
      setConvLength('');
      
    }

    return(
      <div>
        <Container fluid="sm">
          <br/>
          <Row>
            <Col>
              <h3>Length Converter</h3>
            </Col>
          </Row>
          <br/>
          <br/>
          <br/>
          <Row>
            <Col lg={8} className="textCol">
              <TextField extension={inpUnit} type="number" placeholder="Enter Length" elements={elements} aria="Length input" 
                value={inpLength} 
                onChange={handleInpLengthChange}
                onUnitChange={handleInpUnitChange}/>
            </Col>
          </Row>
          <br/>
          <br/>
          <Row>
            <Col lg={8} className="textCol">
              <TextField readOnly extension={outUnit} placeholder="Converted Length" elements={elements} aria="Length output" 
              value={convLength}
              onUnitChange={handleOutUnitChange}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }



export default Length;