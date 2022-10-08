import React from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Errors from './Errors'
import FloatingLabel from 'react-bootstrap/FloatingLabel';



function InputField(props) {

    function checkIfLoginOrRegister() {
        return !props.signForm ?
            <Col xs="auto">
                <Form.Group >
                    <InputGroup className="mb-2" hasValidation>
                        {props.icon ? <InputGroup.Text><props.icon></props.icon></InputGroup.Text> : ""}
                        <FormControl type={props.type} name={props.name.toLowerCase()} placeholder={props.placeholder ? props.placeholder : props.name} onBlur={props.handleChange} defaultValue={props.value} autoComplete="new-password" />
                    </InputGroup>
                    <Errors errors={props.errors}></Errors>

                </Form.Group>

            </Col> :
            <>
                <FloatingLabel
                    controlId={props.name}
                    label={props.placeholder ? props.placeholder : props.name}
                    className="mb-3"
                >
                    <Form.Control type={props.type} name={props.name.toLowerCase()} placeholder={props.placeholder ? props.placeholder : props.name} onBlur={props.handleChange} defaultValue={props.value} autoComplete="new-password" />
                </FloatingLabel>
                <Errors errors={props.errors}></Errors>


            </>
    }

    return (

        checkIfLoginOrRegister()




    )
}

export default InputField