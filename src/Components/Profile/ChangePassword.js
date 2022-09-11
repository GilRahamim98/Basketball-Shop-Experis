import React, { useState } from 'react'
import { updatePassword } from '../../DAL/api'
import InputField from '../InputField'
import { validate } from '../../common/validations'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import BasketBallFooter from '../Nav&Footer/BasketBallFooter'

function ChangePassword() {
    const [changePasswordForm, setChangePasswordForm] = useState({
        oldPassword: {
            value: '',
            validations: {
                required: true,
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/
            },
            errors: [],
            type: "password",
            name: "Old Password",

        },
        newPassword: {
            value: '',
            validations: {
                required: true,
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/
            },
            errors: [],
            type: "password",
            name: "New Password",

        },
        newPasswordValid: {
            value: '',
            validations: {
                required: true,
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/
            },
            errors: [],
            type: "password",
            name: "Repeat New Password",

        }
    })
    const handleChange = ({ target: { name, value } }) => {
        const currentInput = changePasswordForm[name]
        currentInput.value = value
        currentInput.errors = validate(name, value, currentInput.validations)
        setChangePasswordForm({ ...changePasswordForm })
    }
    const validateInput = (input, value = "") => {
        const currentInput = changePasswordForm[input]
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
        return Object.keys(changePasswordForm)
            .filter(field => 'type' in changePasswordForm[field])
            .map(field => <InputField key={field} {...changePasswordForm[field]} handleChange={handleChange} ></InputField>)
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        let isValidSubmit = true

        for (const field in changePasswordForm) {
            validateInput(field, changePasswordForm[field].value)
            if (changePasswordForm[field].errors.length > 0) {
                isValidSubmit = false
            }
            setChangePasswordForm({ ...changePasswordForm })
        }
        if (isValidSubmit) {
            // const ans = await loginFunction(loginForm.username.value, loginForm.password.value)
            // if (ans?.message) {
            //     alert(ans.message)
            // } else {
            //     navigate("/")
            //     document.location.reload()
            // }
        }
    }

    return (
        <>
            <div className='main-div'>
                <h1>Change Password</h1>
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

export default ChangePassword