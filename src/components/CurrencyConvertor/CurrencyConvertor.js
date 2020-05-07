import React,{useState,useEffect} from 'react';
import './CurrencyConvertor.css';
import {Container, Row, Col, Button} from 'react-bootstrap';
import TextField from '../TextField/TextField';
import axios from 'axios';

function Currency() {
    const [inpCurrency, setInpCurrency] = useState('');
    const [convCurrency, setConvCurrency] = useState('');
    const [elements,setElements] = useState([]);
    const [inpUnit,setInpUnit] = useState(elements[0]);
    const [outUnit,setOutUnit] = useState(elements[0]);
    const [exchangeRate,setExchangeRate] = useState(0);
    
    function handleInpCurrencyChange(newCurrency){
      setInpCurrency(newCurrency);
    }

    function handleInpUnitChange(key){
      setInpUnit(elements[key]);
    }

    function handleOutUnitChange(key){
      setOutUnit(elements[key]);
    }

    async function currencyListPopulater(){
      const response = await axios.get('https://api.exchangeratesapi.io/latest');
      var list = Object.keys(response.data.rates);
      var listarr=[];
      for(var i in list){
        listarr.push(list[i]);
      }
      setElements(listarr);
    }
    
    async function convert(){
      const url = `https://api.exchangeratesapi.io/latest?symbols=${outUnit}&base=${inpUnit}`;
      const response = await axios.get(
        url
      )
      console.log(response.data.rates[outUnit]);
      setExchangeRate(response.data.rates[outUnit]);
    };

    function calculate(){
      setConvCurrency(inpCurrency * exchangeRate);
    }

    useEffect(()=>{  
      currencyListPopulater();
      convert();
    },[inpUnit,outUnit]);


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
              <Button onClick={calculate}>CONVERT</Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }



export default Currency;