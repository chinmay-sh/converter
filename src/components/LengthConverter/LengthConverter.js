import React,{useState, useEffect} from 'react';
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
      setInpLength(prevLength => prevLength = newLength);
      setConvLength(convert(newLength).from(inpUnit).to(outUnit));
    }

    function handleInpUnitChange(key){
      setInpUnit(prevInputUnit => prevInputUnit = elements[key]);
    }

    function handleOutUnitChange(key){
      setOutUnit(elements[key]);
      console.log('old' + outUnit)
    }

    // use effect to access the most current state of the state variables that are async in nature
    useEffect(()=>{
      setConvLength(convert(inpLength).from(inpUnit).to(outUnit));
    },[inpUnit,outUnit]);

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