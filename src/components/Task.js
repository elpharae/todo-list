import '../style/task.css'

const Task = ( { taskId, title, time, category, deleteTask } ) => {

    const deleteSelf = () => {
        deleteTask(taskId)
    }

    return (
        <div className="task-item">
            <div className="task-button">
                <button className="task-remove" onClick={deleteSelf}/>  
            </div>
            <div className="task-title">{title}</div>
            <div className="task-time">{time}</div>
            <div className="task-category">{category}</div>
        </div>
    )
}

export default Task