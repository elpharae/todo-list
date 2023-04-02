import { useState, useEffect } from 'react';


const InputField = ({ type, placeholder, getValue, isValid, validator }) => {

    const [inputState, setInputState] = useState({
        value: "",
        valid: false
    })
    const {value, valid} = inputState

    const setState = (e) => {
        setInputState(() => ({
            value: e.target.value,
            valid: validator(e.target.value)
        })) 
    }

    useEffect(() => {
        getValue(value)
        isValid(valid)
    }, [value, valid, getValue, isValid])

    return (
        <input type={type} placeholder={placeholder} onChange={setState}/>
    )

}

export default InputField
