export const required = (value) => !value && 'Field is required!'
export const maxLength = (maxLength) => (value) => {
    if (value && value.length <= maxLength) {
        return undefined
    } else if (value) {
        return `Max length is ${maxLength} symbols!`
    }
}
export const minLength = (minLength) => (value) => {
    if (value && value.length >= minLength) {
        return undefined
    } else if (value) {
        return `Min length is ${minLength} symbols!`
    }
}
export const validEmail = (value) => {
    if (value && value.includes('@') && value.includes('.')) {
        return undefined
    } else {
        return 'Invalid Email!'
    }
}