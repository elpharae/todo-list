import { useCallback } from "react"

const Task = ( { task, removeCallback } ) => {

    const handleRemove = useCallback(() => removeCallback(task.taskId), [removeCallback, task.taskId])
    
    return (
        <div className="task">
            <button className="task-button" onClick={handleRemove}/>  
            <div className="task-title">{task.title}</div>
            <div className="task-time">{task.time}</div>
            <div className="task-category">{task.category}</div>
        </div>
    )
}

export default Task