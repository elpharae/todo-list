import { useCallback, useMemo } from 'react';
import Task from "./Task"

const TaskList = ({ appState, addCallback, removeCallback, clearCallback }) => {

    const tasks = useMemo(() => appState.tasks, [appState])
    const date = useMemo(() => appState.date, [appState])

    const handleAdd = useCallback(() => addCallback(), [addCallback])
    const handleRemove = useCallback((taskId) => removeCallback(taskId), [removeCallback])
    const handleClear = useCallback(() => clearCallback(), [clearCallback])

    return (
        <div className="tasks">
            <div className="tasks-title">
                {date.toLocaleString("default", {year: "numeric", month: "long", day: "numeric", weekday: "long"})}
            </div>
            <div className="tasks-items">
                <div className="tasks-buttons">
                    <button onClick={handleAdd}>+ New Task</button>
                    <button onClick={handleClear}>Clear Tasks</button>
                </div>
                {
                    [...tasks]
                        .sort((t1 , t2) => new Date("1970-01-01T" + t1.time + ":00Z").getTime() - new Date("1970-01-01T" + t2.time + ":00Z").getTime())
                        .map((v, i) => <Task key={i} task={v} removeCallback={handleRemove} />)
                }
            </div>
        </div>
    )
}

export default TaskList
