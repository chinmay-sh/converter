import React,{useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import TextField from '../TextField/TextField';
import './TempConverter.css';
import convert from 'convert-units';

function Temperature() {
    const [inpTemp, setInpTemp] = useState('');
    const [convTemp, setConvTemp] = useState('');
    const elements = convert().possibilities('temperature');
    const [inpUnit,setInpUnit] = useState(elements[0]);
    const [outUnit,setOutUnit] = useState(elements[0]);


    function handleInpTempChange(newTemp){
      setInpTemp(newTemp);
      setConvTemp(convert(newTemp).from(inpUnit).to(outUnit));
    }

    function handleInpUnitChange(key){
      setInpUnit(elements[key]);
    }

    function handleOutUnitChange(key){
      setOutUnit(elements[key]);
    }

    React.useEffect(()=>{
      setConvTemp(convert(inpTemp).from(inpUnit).to(outUnit));
    },[inpUnit,outUnit]);

    return(
      <div>
        <Container fluid="sm">
          <br/>
          <Row>
            <Col>
              <h3>Temperature Converter</h3>
            </Col>
          </Row>
          <br/>
          <br/>
          <br/>
          <Row>
            <Col lg={8} className="textCol">
              <TextField extension={inpUnit} type="number" placeholder="Enter Temperature" elements={elements} aria="Temperature input" 
                value={inpTemp} 
                onChange={handleInpTempChange}
                onUnitChange={handleInpUnitChange}/>
            </Col>
          </Row>
          <br/>
          <br/>
          <Row>
            <Col lg={8} className="textCol">
              <TextField readOnly extension={outUnit} placeholder="Converted Temperature" elements={elements} aria="Temperature output" 
              value={convTemp}
              onUnitChange={handleOutUnitChange}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }



export default Temperature;