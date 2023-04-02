import '../style/inputfield.css'

const InputField = ({ type, placeholder, getInputState, required }) => {

    const inputChange = (e) => {
        const newInput = {
            value: e.target.value,
            valid: e.target.validity.valid
        }
        getInputState(newInput)
    }

    return <input className="task-form-input" type={type} placeholder={placeholder} onChange={inputChange} required={required}/>
}

export default InputField
