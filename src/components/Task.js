const Task = ( {title, dueDate, desc } ) => {

    const formatDueDate = (dueDate) => {
        const day = dueDate.getDate()
        const month = dueDate.toLocaleString("default", {month: "long"})
        const year = dueDate.getFullYear()
        const hours = dueDate.getHours()
        const minutes = dueDate.getMinutes()
        const seconds = dueDate.getSeconds()

        return `Task is due: ${day} ${month} ${year} ${hours}:${minutes}:${seconds}`
    }

    return (
        <div className="task-list-item">
            <h1>{title}</h1>
            <p>{formatDueDate(dueDate)}</p>
            <p>
                {"Time remaining: " + new Date((dueDate - new Date())).toLocaleString()}
            </p>
            <p>{desc}</p>
        </div>
    )
}

export default Task