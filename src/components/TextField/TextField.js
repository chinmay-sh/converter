import React from 'react';
import {InputGroup,FormControl} from 'react-bootstrap';



function TextField(props) {
    return(
      <div>
        <InputGroup className="mb-3">
            <FormControl
            placeholder={props.placeholder}
            aria-label={props.aria}
            aria-describedby="basic-addon2"
            value={props.value}
            disabled={props.disabled}
            onChange={e=>{
                props.onChange(e.target.value)
            }}
            />
            <InputGroup.Append>
            <InputGroup.Text id="basic-addon2">{props.extension}</InputGroup.Text>
            </InputGroup.Append>
        </InputGroup>
      </div>
    );
  }



export default TextField;