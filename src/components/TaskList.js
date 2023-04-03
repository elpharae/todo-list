import { useState, useEffect } from 'react';
import TaskForm from "./TaskForm"
import Task from "./Task"

const TaskList = () => {

    const [tasks, setTasks] = useState([])

    const getTask = (task) => {
        const newTasks = [task, ...tasks]
        setTasks(newTasks)
    }

    const deleteTask = (taskId) => {
        const newTasks = tasks.filter((task, index) => index !== taskId)
        setTasks(newTasks)
    }

    return (
        <div className="tasks">
            <TaskForm getTask={getTask}/>
            <div className="task-list">
                { tasks.map((task, index) => <Task key={index} taskId={index} deleteTask={deleteTask} title={task.title} dueDate={task.dueDate} desc={task.desc}/>) }
            </div>
        </div>
    )
}

export default TaskList
