import { useState, useEffect } from 'react';
import TaskForm from "./TaskForm"
import Task from "./Task"

const TaskList = () => {

    const [tasks, setTasks] = useState([])

    const getTask = (task) => {

        setTasks((prevState) => [
            task,
            ...prevState
        ])
    }

    return (
        <div className="tasks">
            <TaskForm getTask={getTask}/>
            <div className="task-list">
                { tasks.map((task, index) => <Task key={index} title={task.title} dueDate={task.dueDate} desc={task.desc}/>) }
            </div>
        </div>
    )
}

export default TaskList
