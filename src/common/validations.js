
export const validate = (name, value, validations) => {
    const errors = []

    if (validations.required) {
        if (value.length === 0) {
            errors.push({
                value: `${name} is required`
            })
        }
    }
    if (validations.minLength) {
        if (value.length < validations.minLength) {
            errors.push({
                value: `${name} is must be at least ${validations.minLength} characters`
            })
        }
    }
    if (validations.pattern) {
        if (!validations.pattern.test(value)) {
            errors.push({ value: `${name} is invalid` })
        }
    }

    return errors
}
