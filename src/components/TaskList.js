import { useState, useEffect } from 'react';
import Task from "./Task"
import AddTask from "./AddTask"
import "../style/tasklist.css"

const TaskList = () => {

    return (
        <div className="tasks">
            <Task taskId={1} time={"10:00"}title="Task title" category="Work"/>
            <Task taskId={1} time={"10:00"}title="Task title" category="Other"/>
            <Task taskId={1} time={"10:00"}title="Task title" category="Free time"/>
            <Task taskId={1} time={"10:00"}title="Task title" category="Exercise"/>
            <Task taskId={1} time={"10:00"}title="Task title" category="Work"/>
        </div>
    )
}

export default TaskList
