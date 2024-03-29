import React, { useState } from 'react'
import InputField from '../InputField'
import { useNavigate } from "react-router-dom";
import BasketBallFooter from '../Nav&Footer/BasketBallFooter';
import { validate } from '../../common/validations'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { FaUserNinja } from 'react-icons/fa'
import { RiLockPasswordLine } from "react-icons/ri"
import { loginFunction } from '../../DAL/api'


function LoginPage(props) {
    const navigate = useNavigate();
    const [loginForm, setLoginForm] = useState({
        username: {
            value: '',
            validations: {
                required: true,
                minLength: 2,
            },
            errors: [],
            type: "text",
            name: "Username",
            icon: FaUserNinja
        },
        password: {
            value: '',
            validations: {
                required: true,
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/
            },
            errors: [],
            type: "password",
            name: "Password",
            icon: RiLockPasswordLine
        },
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
        if (currentInput.validations.minLength) {
            if (value.length < currentInput.validations.minLength) {
                currentInput.errors.push({
                    value: `${input} is must be at least ${currentInput.validations.minLength} characters`
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
            .map(field => <InputField key={field} {...loginForm[field]} handleChange={handleChange} signForm={true}></InputField>)
    }
    const handleSubmit = async (event) => {
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
            const ans = await loginFunction(loginForm.username.value, loginForm.password.value)
            if (ans?.message) {
                alert(ans.message)
            } else {
                navigate("/")
                document.location.reload()
            }
        }
    }

    return (

        <>
            <div className='main-div'>
                <h1>Sign into your account</h1>
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

export default LoginPage