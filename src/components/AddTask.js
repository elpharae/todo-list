import { useState, useCallback } from 'react'

const defaultValues = {title: "", time: "", category: ""}

const AddTask = ({ show, addCallback, showCallback }) => {

    const [formState, setFormState] = useState(defaultValues)

    const handleAdd = useCallback((input) => {
        addCallback(input)
    }, [addCallback])

    const handleHide = useCallback(() => {
        showCallback()
    }, [showCallback])

    const handleSubmit = (e) => {
        e.preventDefault()
        handleAdd(formState)
        handleHide()
    }

    const handleCancel = () => {
        handleHide()   
    }

    return (
        <form 
            style={{
                opacity: show ? "100%" : "0", 
                pointerEvents: show ? "auto" : "none"
            }} 
            className="task-form"
            onSubmit={handleSubmit}
        >
            <div className="task-form-title">New Task</div>
            <label>
                <div>Title</div>
                <input type="text" required={true} onChange={(e) => setFormState((prevState) => ({ ...prevState, title: e.target.value }))}/>
            </label>
            <label>
                <div>Time</div>
                <input type="time" required={true} onChange={(e) => setFormState((prevState) => ({ ...prevState, time: e.target.value }))}/>
            </label>
            <label>
                <div>Category</div>
                <input type="text" required={true} onChange={(e) => setFormState((prevState) => ({ ...prevState, category: e.target.value }))}/>
            </label>
            <div className="task-form-buttons">
                <button type="submit">Add</button>
                <button type="button" onClick={handleCancel}>Cancel</button>
            </div>
        </form>
    )

}

export default AddTask
