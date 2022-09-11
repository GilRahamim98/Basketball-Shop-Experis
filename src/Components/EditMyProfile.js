import React, { useEffect, useState } from 'react'
import InputField from './InputField'
import { validate } from '../common/validations'
import { getCookie } from '../common/cookie'
import { getCustomerById, updateCustomerProfile } from '../DAL/api'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import BasketBallFooter from './Nav&Footer/BasketBallFooter'




function EditMyProfile() {
    const navigate = useNavigate()
    const [currentCustomer, setCurrentCustomer] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        if (getCookie("id") === "") {
            navigate("/")
            return
        }
        async function getCustomer(id) {
            const customer = await getCustomerById(id)
            setCurrentCustomer(customer)
            changeValues(customer)

            setLoading(true)


        }
        getCustomer(getCookie("id"))
    }, [])

    const [editObj, setEditObj] = useState({
        first_name: {
            value: '',
            validations: {
                required: true,
                minLength: 2,
            },
            errors: [],
            type: "text",
            name: "FirstName",

        },
        last_name: {
            value: '',
            validations: {
                required: true,
                minLength: 2,
            },
            errors: [],
            type: "text",
            name: "LastName",

        },
        birth_day: {
            value: '',
            validations: {
                required: true,
            },
            errors: [],
            type: "date",
            name: "birth_Day",

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

        },


    })
    const changeValues = (customer) => {
        for (let field in editObj) {
            if (field === "birth_day") {
                editObj[field].value = customer[0][field].split("T")[0]
            } else {
                editObj[field].value = customer[0][field]

            }
            setEditObj({ ...editObj })

        }

    }
    const handleChange = ({ target: { name, value } }) => {
        if (name === "firstname") {
            name = "first_name"
        } else if (name === "lastname") {
            name = "last_name"
        }
        const currentInput = editObj[name]
        currentInput.value = value
        currentInput.errors = validate(name, value, currentInput.validations)
        setEditObj({ ...editObj })
    }

    const validateInput = (input, value = "") => {
        const currentInput = editObj[input]
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



    const createEditForm = () => {
        return Object.keys(editObj)
            .filter(field => 'type' in editObj[field])
            .map(field => <InputField key={field} {...editObj[field]} handleChange={handleChange} ></InputField>)
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        let isValidSubmit = true

        for (const field in editObj) {
            validateInput(field, editObj[field].value)
            if (editObj[field].errors.length > 0) {
                isValidSubmit = false
            }
            setEditObj({ ...editObj })
        }
        if (isValidSubmit) {
            await updateCustomerProfile(getCookie("id"), editObj.first_name.value, editObj.last_name.value, editObj.birth_day.value, editObj.phone.value, editObj.city.value, editObj.street.value)

            navigate("/myProfile")
            document.location.reload()


        }

    }
    return (
        <>
            <div className='main-div'>
                <h1>Edit Profile</h1>
                {currentCustomer.length > 0 ?
                    <Form onSubmit={handleSubmit}>
                        {createEditForm()}
                        <Button variant="outline-dark" type="submit" size="lg">
                            Submit
                        </Button>
                    </Form> : ""}

            </div>
            <BasketBallFooter></BasketBallFooter>

        </>
    )
}

export default EditMyProfile