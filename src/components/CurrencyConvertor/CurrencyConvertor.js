import React,{useState,useEffect} from 'react';
import './CurrencyConvertor.css';
import {Container, Row, Col, Button} from 'react-bootstrap';
import TextField from '../TextField/TextField';
import { findAllByDisplayValue } from '@testing-library/react';


function Currency() {
    const [inpCurrency, setInpCurrency] = useState('');
    const [convCurrency, setConvCurrency] = useState('');

    const elements = ['USD','INR'];
    const [inpUnit,setInpUnit] = useState(elements[0]);
    const [outUnit,setOutUnit] = useState(elements[0]);
    const [apiResponse,setResponse] = useState({data:[]});
    
    function handleInpCurrencyChange(newCurrency){
      setInpCurrency(newCurrency);
    }


    function handleInpUnitChange(key){
      setInpUnit(elements[key]);
      // setInpCurrency('');
      // setConvCurrency('');
    }

    function handleOutUnitChange(key){
      setOutUnit(elements[key]);
      // setInpCurrency('');
      // setConvCurrency('');
    }

    async function convert(){
      const response = await fetch('https://neutrinoapi.net/convert', {
        method: 'POST', headers: { 'Content-type': 'application/json'},
        body: JSON.stringify({
          'user-id': 'redlord',
    	    'api-key': 'dWBezecu9Ie8vtSrdIHVzAWoq6CdbhIJ0hdVByjJG5pfFxfu',
          'from-value':'10',
          'from-type':'USD',
          'to-type':'INR'
        })
      });
      const json = await response.json();
      setResponse({data: json});
      console.log(apiResponse)
    };

    return(
      <div>
        <Container fluid="sm">
          <br/>
          <Row>
            <Col>
              <h3>Currency Converter</h3>
            </Col>
          </Row>
          <br/>
          <br/>
          <br/>
          <Row>
            <Col lg={8} className="textCol">
              <TextField extension={inpUnit} type="number" placeholder="Enter Currency" elements={elements} aria="Currency input" 
                value={inpCurrency} 
                onChange={handleInpCurrencyChange}
                onUnitChange={handleInpUnitChange}/>
            </Col>
          </Row>
          <br/>
          <br/>
          <Row>
            <Col lg={8} className="textCol">
              <TextField readOnly extension={outUnit} placeholder="Converted Currency" elements={elements} aria="Currency output" 
              value={convCurrency}
              onUnitChange={handleOutUnitChange}/>
            </Col>
          </Row>

          <br/>
          <Row>
            <Col>
              <Button onClick={convert}>CONVERT</Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }



export default Currency;