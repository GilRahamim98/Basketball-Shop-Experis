import React, { useState } from 'react'
import { FaUserNinja, FaMailBulk } from 'react-icons/fa'
import { RiMessage3Fill } from "react-icons/ri"

import InputField from './InputField'
import { validate } from '../common/validations'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import BasketBallFooter from './Nav&Footer/BasketBallFooter'

function ContactUs() {
    const [loginForm, setLoginForm] = useState({
        username: {
            value: '',
            validations: {
                required: true,
            },
            errors: [],
            type: "text",
            name: "Username",
            icon: FaUserNinja
        },
        email: {
            value: '',
            validations: {
                required: true,
                pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            },
            errors: [],
            type: "text",
            name: "Email",
            icon: FaMailBulk
        },
        message: {
            value: '',
            validations: {
                required: true,
            },
            errors: [],
            type: "text",
            name: "Message",
            icon: RiMessage3Fill

        }
    })
    const handleChange = ({ target: { name, value } }) => {
        const currentInput = loginForm[name]
        currentInput.value = value
        currentInput.errors = validate(name, value, currentInput.validations)
        setLoginForm({ ...loginForm })
    }

    const validateInput = (input, value = "") => {
        const currentInput = loginForm[input]
        currentInput.value = value
        currentInput.errors = []
        if (currentInput.validations.required) {
            if (value.length === 0) {
                currentInput.errors.push({
                    value: `${input} is required`
                })
            }
        }
        if (currentInput.validations.pattern) {
            if (!currentInput.validations.pattern.test(value)) {
                currentInput.errors.push({
                    value: `${input} is invalid`
                })
            }
        }
    }


    const createLoginFields = () => {
        return Object.keys(loginForm)
            .filter(field => 'type' in loginForm[field])
            .map(field => <InputField key={field} {...loginForm[field]} handleChange={handleChange} ></InputField>)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        let isValidSubmit = true

        for (const field in loginForm) {
            validateInput(field, loginForm[field].value)
            if (loginForm[field].errors.length > 0) {
                isValidSubmit = false
            }
            setLoginForm({ ...loginForm })
        }
        if (isValidSubmit) {
            alert("Thanks for your message we will contact you !")

        }

    }

    return (

        <>

            <div className='main-div'>
                <h1>Contact us</h1>
                <Form onSubmit={handleSubmit}>
                    {createLoginFields()}
                    <Button variant="primary" type="submit" size="lg">
                        Submit
                    </Button>

                </Form>




            </div>
            <BasketBallFooter></BasketBallFooter>
        </>

    )
}

export default ContactUs