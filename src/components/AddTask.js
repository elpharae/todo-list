import { useState, useCallback } from 'react'

const defaultValues = {title: "", time: "", category: "Other"}

const AddTask = ({ show, addCallback, showCallback }) => {

    const [formState, setFormState] = useState(defaultValues)

    const handleAdd = useCallback((input) => {
        addCallback(input)
    }, [addCallback])

    const handleHide = useCallback(() => {
        showCallback()
    }, [showCallback])

    const handleSubmit = (e) => {
        e.target.reset()
        e.preventDefault()
        handleAdd(formState)
        handleHide()
        setFormState(defaultValues)
    }

    const handleCancel = () => {
        handleHide()
        setFormState(defaultValues)
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
            <div className="categories">
                <label>
                    School
                    <input type="radio" name="category" checked={formState.category === "School"} value="School" onChange={(e) => setFormState((prevState) => ({ ...prevState, category: e.target.value }))}/>
                </label>
                <label>
                    Work
                    <input type="radio" name="category" checked={formState.category === "Work"} value="Work" onChange={(e) => setFormState((prevState) => ({ ...prevState, category: e.target.value }))}/>
                </label>
                <label>
                    Exercise
                    <input type="radio" name="category" checked={formState.category === "Exercise"} value="Exercise" onChange={(e) => setFormState((prevState) => ({ ...prevState, category: e.target.value }))}/>
                </label>
                <label>
                    Free Time
                    <input type="radio" name="category" checked={formState.category === "Free Time"} value="Free Time" onChange={(e) => setFormState((prevState) => ({ ...prevState, category: e.target.value }))}/>
                </label>
                <label>
                    Other
                    <input type="radio" name="category" checked={formState.category === "Other"} value="Other" onChange={(e) => setFormState((prevState) => ({ ...prevState, category: e.target.value }))}/>
                </label>
            </div>
            <div className="task-form-buttons">
                <button type="submit">Add</button>
                <button type="reset" onClick={handleCancel}>Cancel</button>
            </div>
        </form>
    )

}

export default AddTask
