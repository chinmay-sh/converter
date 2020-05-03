import React from 'react';
import {InputGroup,FormControl,Dropdown,DropdownButton} from 'react-bootstrap';



function TextField(props) {

    const elements = props.elements;

    const items = []

    for (const [index, value] of elements.entries()) {
        items.push(<Dropdown.Item eventKey={index}>{value}</Dropdown.Item>)
    }
    
    return(
      <div>
        <InputGroup className="mb-3">
            <FormControl
            placeholder={props.placeholder}
            aria-label={props.aria}
            aria-describedby="basic-addon2"
            value={props.value}
            type={props.type}
            readOnly={props.readOnly}
            onChange={e=>{
                props.onChange(e.target.value)
            }}
            />
            <Dropdown onSelect={(key,event)=>{
                    console.log(`${props.placeholder} : ${elements[key]}`)
                    props.onUnitChange(key)
                }}>
                <Dropdown.Toggle variant="success" id="input-group-dropdown-2">
                    {props.extension}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {items}
                </Dropdown.Menu>
                </Dropdown>
        </InputGroup>
      </div>
    );
  }



export default TextField;