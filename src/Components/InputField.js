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
                    {props.obj.name}
                </Form.Label>
                <InputGroup className="mb-2" hasValidation>
                    <InputGroup.Text><props.obj.icon></props.obj.icon></InputGroup.Text>
                    <FormControl id="inlineFormInputGroup" type={props.obj.type} name={props.obj.name.toLowerCase()} placeholder={props.obj.name} onBlur={props.handleChange} />
                </InputGroup>
                <Errors errors={props.obj.errors}></Errors>


            </Form.Group>

        </Col>

    )
}

export default InputField