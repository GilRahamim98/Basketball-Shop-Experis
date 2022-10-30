import React, { useState } from 'react'
import { updatePassword } from '../../DAL/api'
import InputField from '../InputField'
import { validate } from '../../common/validations'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import BasketBallFooter from '../Nav&Footer/BasketBallFooter'
import { getCookie } from '../../common/cookie'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function ChangePassword() {
    const navigate = useNavigate()
    useEffect(() => {
        if (getCookie("id") === "") {
            navigate("/")
        }

    }, [])
    const [changePasswordForm, setChangePasswordForm] = useState({
        oldpassword: {
            value: '',
            validations: {
                required: true,
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/
            },
            errors: [],
            type: "password",
            name: "oldPassword",
            placeholder: "Old Password"

        },
        newpassword: {
            value: '',
            validations: {
                required: true,
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/
            },
            errors: [],
            type: "password",
            name: "newPassword",
            placeholder: "New Password"


        },

    })
    const [newPassword, setNewPassword] = useState({
        newpasswordvalid: {
            value: '',
            validations: {
                required: true,
                match: true
            },
            errors: [],
            type: "password",
            name: "newPasswordValid",
            placeholder: "Verify Password"



        }
    })
    const handleChange = ({ target: { name, value } }) => {
        const currentInput = changePasswordForm[name]
        currentInput.value = value
        currentInput.errors = validate(currentInput.placeholder ? currentInput.placeholder : name, value, currentInput.validations)
        setChangePasswordForm({ ...changePasswordForm })
    }
    const validateNewPassword = (newPasswordValue, value, validations) => {
        const errors = []

        if (validations.required) {
            if (value.length === 0) {
                errors.push({
                    value: `Verify Password is required`
                })
            }
        }
        if (validations.match) {
            if (value !== newPasswordValue) {
                errors.push({
                    value: `The Passwords Do Not Match`
                })
            }
        }
        return errors

    }
    const handleChangePassword = ({ target: { name, value } }) => {
        const currentInput = newPassword[name]
        currentInput.value = value
        currentInput.errors = validateNewPassword(changePasswordForm.newpassword.value, value, currentInput.validations)
        setNewPassword({ ...newPassword })
    }
    const validateInput = (input, value = "") => {
        const currentInput = changePasswordForm[input]
        currentInput.value = value
        currentInput.errors = []
        if (currentInput.validations.required) {
            if (value.length === 0) {
                currentInput.errors.push({
                    value: `${currentInput.placeholder} is required`
                })
            }
        }
        if (currentInput.validations.match)

            if (currentInput.validations.pattern) {
                if (!currentInput.validations.pattern.test(value)) {
                    currentInput.errors.push({
                        value: `${currentInput.placeholder} is invalid`
                    })
                }
            }
    }


    const createFormFields = () => {
        return Object.keys(changePasswordForm)
            .filter(field => 'type' in changePasswordForm[field])
            .map(field => <InputField key={field} {...changePasswordForm[field]} handleChange={handleChange} ></InputField>)
    }
    const createNewPasswordField = () => {
        return Object.keys(newPassword)
            .filter(field => 'type' in newPassword[field])
            .map(field => <InputField key={field} {...newPassword[field]} handleChange={handleChangePassword} ></InputField>)
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
            const ans = await updatePassword(getCookie('id'), { oldPassword: changePasswordForm.oldpassword.value, newPassword: changePasswordForm.newpassword.value })

            if (ans?.message) {
                alert(ans.message)
            } else {
                navigate("/MyProfile")
                document.location.reload()
            }
        }
    }

    return (
        <>
            <div className='main-div'>
                <h1>Change Password</h1>
                <Form onSubmit={handleSubmit}>
                    {createFormFields()}
                    {createNewPasswordField()}
                    <Button variant="outline-dark" type="submit" size="lg">
                        Submit
                    </Button>

                </Form>
            </div>
            <BasketBallFooter></BasketBallFooter>
        </>


    )
}

export default ChangePassword