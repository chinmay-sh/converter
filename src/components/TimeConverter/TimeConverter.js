import React,{useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import TextField from '../TextField/TextField';
import './TimeConverter.css';
import convert from 'convert-units';

function Time() {
    const [inpTime, setInpTime] = useState('');
    const [convTime, setConvTime] = useState('');
    const elements = convert().possibilities('time');
    const [inpUnit,setInpUnit] = useState(elements[0]);
    const [outUnit,setOutUnit] = useState(elements[0]);


    function handleInpTimeChange(newTime){
      setInpTime(prevTime => prevTime = newTime);
      setConvTime(convert(newTime).from(inpUnit).to(outUnit));
    }

    function handleInpUnitChange(key){
      setInpUnit(elements[key]);
    }

    function handleOutUnitChange(key){
      setOutUnit(elements[key]);
    }

    // use effect to access the most current state of the state variables that are async in nature
    useEffect(()=>{
      setConvTime(convert(inpTime).from(inpUnit).to(outUnit));
    },[inpUnit,outUnit]);

    return(
      <div>
        <Container fluid="sm">
          <br/>
          <Row>
            <Col>
              <h3>Time Converter</h3>
            </Col>
          </Row>
          <br/>
          <br/>
          <br/>
          <Row>
            <Col lg={8} className="textCol">
              <TextField extension={inpUnit} type="number" placeholder="Enter Time" elements={elements} aria="Time input" 
                value={inpTime} 
                onChange={handleInpTimeChange}
                onUnitChange={handleInpUnitChange}/>
            </Col>
          </Row>
          <br/>
          <br/>
          <Row>
            <Col lg={8} className="textCol">
              <TextField readOnly extension={outUnit} placeholder="Converted Time" elements={elements} aria="Time output" 
              value={convTime}
              onUnitChange={handleOutUnitChange}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }



export default Time;