import { useCallback } from "react"

const categoryColors = {
    "School": "#fbd9c8",
    "Work": "#c5ccf9",
    "Exercise": "#b7efa1",
    "Free Time": "#e8edb9",
    "Other":"#e6e6e6"
}

const Task = ({ task, removeCallback }) => {

    const handleRemove = useCallback(() => removeCallback(task.taskId), [removeCallback, task.taskId])
    
    return (
        <div className="task" style={{backgroundColor: categoryColors[task.category]}}>
            <button className="task-button" onClick={handleRemove}/>  
            <div className="task-title">{task.title}</div>
            <div className="task-time">{task.time}</div>
            <div className="task-category">{task.category}</div>
        </div>
    )
}

export default Task