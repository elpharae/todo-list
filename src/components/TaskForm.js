import { useState, useEffect } from 'react';
import InputField from "./InputField"


const TaskForm = ({ getTask }) => {

    const [validInput, setValidInput] = useState(false)
    const [formState, setFormState] = useState({
        title: "",
        dueDate: "",
        desc: ""
    })

    const addTask = (e) => {
        e.preventDefault()

        const task = {
            title: formState.title,
            dueDate: new Date(formState.dueDate),
            desc: formState.desc
        }

        getTask(task)
        console.log(task)
    }

    useEffect(() => {
        setValidInput(formState.title.length === 0 || formState.dueDate.length === 0)
    }, [setValidInput, formState])

    const getTitle = (input) => setFormState((prevState) => ({ ...prevState, title: input.value }))
    const getDueDate = (input) => setFormState((prevState) => ({ ...prevState, dueDate: input.value }))
    const getDesc = (input) => setFormState((prevState) => ({ ...prevState, desc: input.value}))

    return (
        <form className="task-form" onSubmit={addTask}>
            <InputField type="text" placeholder="Task title" getInputState={getTitle} required={true}/><br/>
            <InputField type="datetime-local" placeholder="" getInputState={getDueDate} required={true}/><br/>
            <InputField type="text" placeholder="Task description" getInputState={getDesc} required={false}/><br/>
            <button type="submit" disabled={validInput}>Add task</button>
        </form>
    )

}

export default TaskForm
