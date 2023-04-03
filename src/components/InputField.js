import '../style/inputfield.css'

const InputField = ({ type, placeholder, getInputState, required, min }) => {

    const inputChange = (e) => {
        const newInput = {
            value: e.target.value,
            valid: e.target.validity.valid
        }
        getInputState(newInput)
    }

    return <input className="task-form-input" min={min} type={type} placeholder={placeholder} onChange={inputChange} required={required}/>
}

export default InputField
