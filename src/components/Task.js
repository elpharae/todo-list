import { useState, useEffect } from 'react';
import '../style/task.css'

export const formatDate = (date) => {
    const options = {
        day: "numeric",
        month: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
    }
    const dateStr = date.toLocaleString("default", options)

    return `Due on ${dateStr}`
}

const Task = ( { taskId, title, dueDate, desc, deleteTask } ) => {

    const [taskInfo, setTaskInfo] = useState({
        pastDue: dueDate.getTime() - new Date().getTime() <= 0,
    })

    // TODO - do this for all tasks at once in TaskList
    useEffect(() => {
        const interval = setInterval(() => {
            setTaskInfo(() => ({
                pastDue: dueDate.getTime() - new Date().getTime() <= 0
            }))
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    const deleteSelf = () => {
        deleteTask(taskId)
    }

    return (
        <div className={taskInfo.pastDue ? "task-list-item past-due" : "task-list-item"}>
            <div className="task-panel">
                {!taskInfo.pastDue && <button className="task-item-finished" />}
                {!taskInfo.pastDue && <button className="task-item-edit" />}
                <button className="task-item-delete" onClick={deleteSelf}/>
            </div>
            <div className="task-time">
                <div>{formatDate(dueDate)}</div>
            </div>
            <div className="task-title">{title}</div>
            <div className="task-desc">{desc.length === 0 ? "No description" : desc}</div>
        </div>
    )
}

export default Task