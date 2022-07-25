import React, { useState } from 'react'
import { FaUserNinja, FaMailBulk, FaPhoneVolume, FaCity, FaBuilding } from 'react-icons/fa'
import { RiLockPasswordLine } from "react-icons/ri"
import { BsFillCalendar2DateFill } from "react-icons/bs"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { validate } from '../common/validations'
import BasketNavBar from './BasketNavBar'
import InputField from './InputField'



function RegisterPage() {
    const [registerObj, setRegisterObj] = useState({
        firstname: {
            value: '',
            validations: {
                required: true,
                minLength: 2,
            },
            errors: [],
            type: "text",
            name: "FirstName",
            icon: FaUserNinja
        },
        lastname: {
            value: '',
            validations: {
                required: true,
                minLength: 2,
            },
            errors: [],
            type: "text",
            name: "LastName",
            icon: FaUserNinja
        },
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
        birthday: {
            value: '',
            validations: {
                required: true,
            },
            errors: [],
            type: "date",
            name: "BirthDay",
            icon: BsFillCalendar2DateFill
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
        phone: {
            value: '',
            validations: {
                required: true,
                pattern: /^\+?(972|0)(\-)?0?(([23489]{1}\d{7})|[5]{1}\d{8})$/
            },
            errors: [],
            type: "text",
            name: "Phone",
            icon: FaPhoneVolume
        },
        city: {
            value: '',
            validations: {
                required: true,
                minLength: 3,
            },
            errors: [],
            type: "text",
            name: "City",
            icon: FaCity
        },
        street: {
            value: '',
            validations: {
                required: true,
                minLength: 4,
            },
            errors: [],
            type: "text",
            name: "Street",
            icon: FaBuilding
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
        const currentInput = registerObj[name]
        currentInput.value = value
        currentInput.errors = validate(name, value, currentInput.validations)
        setRegisterObj({ ...registerObj })
    }

    const validateInput = (input, value = "") => {
        const currentInput = registerObj[input]
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


    const createRegisterFields = () => {
        return Object.keys(registerObj)
            .filter(field => 'type' in registerObj[field])
            .map(field => <InputField key={field} {...registerObj[field]} handleChange={handleChange} ></InputField>)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        let isValidSubmit = true

        for (const field in registerObj) {
            validateInput(field, registerObj[field].value)
            if (registerObj[field].errors.length > 0) {
                isValidSubmit = false
            }
            setRegisterObj({ ...registerObj })
        }
        if (isValidSubmit) {
            alert("Welcome Amigo!")

        }

    }
    return (
        <div>
            <BasketNavBar></BasketNavBar>
            <div className='main-div'>
                <h1>Register</h1>
                <Form onSubmit={handleSubmit}>
                    {createRegisterFields()}
                    <Button variant="primary" type="submit" size="lg">
                        Submit
                    </Button>

                </Form>



            </div>
        </div>
    )
}

export default RegisterPage