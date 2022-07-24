import React from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Errors from './Errors'


function InputField(props) {
    return (

        <Col xs="auto">
            <Form.Group >
                <Form.Label htmlFor="inlineFormInputGroup" >
                    {props.name}
                </Form.Label>
                <InputGroup className="mb-2" hasValidation>
                    <InputGroup.Text><props.icon></props.icon></InputGroup.Text>
                    <FormControl id="inlineFormInputGroup" type={props.type} name={props.name.toLowerCase()} placeholder={props.name} onBlur={props.handleChange} autoComplete="new-password" />
                </InputGroup>
                <Errors errors={props.errors}></Errors>


            </Form.Group>

        </Col>

    )
}

export default InputField