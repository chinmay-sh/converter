import React,{useState,useEffect} from 'react';
import './CurrencyConvertor.css';
import {Container, Row, Col, Button} from 'react-bootstrap';
import TextField from '../TextField/TextField';
import axios from 'axios';


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
    }

    function handleOutUnitChange(key){
      setOutUnit(elements[key]);
    }
/*
    async function corstest(){
      const respone = await axios.get('https://hj8spoca8g.execute-api.us-east-1.amazonaws.com/dev/proxy?url=https://cloudmark-api.herokuapp.com/tags/');
      console.log(respone)
    }

    async function corstest1(){
      const respone = await axios.delete('http://localhost:4000/dev/proxy?url=https://cloudmark-api.herokuapp.com/tags/2',
      {
        "link":"https://www.mouse.com",
        "title":"mouse",
        "publisher":"mouse"
      },
      {
        headers: { 'Content-Type': 'application/json' }
      });
      console.log(respone.data)
    }
*/
    async function convert(){
      const url_cors_prefix = 'https://hj8spoca8g.execute-api.us-east-1.amazonaws.com/dev/proxy?url=';
      const response = await axios.post(
        url_cors_prefix + 'https://neutrinoapi.net/convert',
        {
          'user-id': 'redlord',
    	    'api-key': 'dWBezecu9Ie8vtSrdIHVzAWoq6CdbhIJ0hdVByjJG5pfFxfu',
          'from-value':'10',
          'from-type':'USD',
          'to-type':'INR'
        },
        { headers: { 'Content-Type': 'application/json' } }
      )
      console.log(response.data);
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