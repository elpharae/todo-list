import { useState, useEffect } from 'react';
import '../style/task.css'

const formatDate = (date) => {
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
    }
    const dateStr = date.toLocaleString("default", options)

    return `${dateStr}`
}

const formatRemainingTime = (date) => {

    const days = Math.floor(date / (1000 * 60 * 60 * 24))
    const hours = Math.floor((date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((date % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((date % (1000 * 60)) / 1000)

    return `${days} d ${hours} hr ${minutes} min ${seconds} sec` 
}

const Task = ( { title, dueDate, desc } ) => {

    const [taskInfo, setTaskInfo] = useState({
        remainingTime: dueDate.getTime() - new Date().getTime(),
        pastDue: dueDate.getTime() - new Date().getTime() <= 0,
    })

    useEffect(() => {
        const interval = setInterval(() => {
            setTaskInfo(() => ({
                remainingTime: dueDate.getTime() - new Date().getTime(),
                pastDue: dueDate.getTime() - new Date().getTime() <= 0
            }))
        }, 1000)

        return () => clearInterval(interval)
    }, [dueDate])

    return (
        <div className={taskInfo.pastDue ? "task-list-item past-due" : "task-list-item"}>
            <div className="task-time">
                <div>{formatDate(dueDate)}</div>
                <div>{taskInfo.pastDue ? "Past due!" : formatRemainingTime(taskInfo.remainingTime)}</div>
            </div>
            <div className="task-title">{title}</div>
            <div className="task-desc">{desc.length === 0 ? "No description" : desc}</div>
        </div>
    )
}

export default Task