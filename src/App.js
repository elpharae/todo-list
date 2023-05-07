import { useState } from 'react';
import TaskList from "./components/TaskList"
import Calendar from "./components/Calendar"
import AddTask from "./components/AddTask"

const getDataByKey = (key) => JSON.parse(window.localStorage.getItem(key))
const getKeyByDate = (date) => date.toLocaleString("default", {year: "numeric", month: "numeric", day: "numeric"})

const findData = (date) => {
    const key = getKeyByDate(date)
    const data = getDataByKey(key)

    if (data != null && data.tasks !== undefined && data.tasks != null) 
        return { date: date, tasks: data.tasks, taskNum: data.taskNum }
    else 
        return { date: date, tasks: [], taskNum: 0 }
}

const saveData = (state) => {
    const key = getKeyByDate(state.date)
    const data = JSON.stringify({
        tasks: state.tasks,
        taskNum: state.taskNum
    })

    window.localStorage.setItem(key, data)
}

const App = () => {

    const [appState, setAppState] = useState(findData(new Date()))
    const [showDialog, setShowDialog] = useState(false)

    const handleChange = (date) => {
        const newState = findData(date)
        setAppState(newState)
    }

    const handleShowDialog = () => {
        const show = !showDialog
        setShowDialog(show)
    }

    const handleAdd = (input) => {
        const task = {
            ...input,
            taskId: appState.taskNum
        }

        const newState = {
            ...appState,
            tasks: [ ...appState.tasks, task ],
            taskNum: appState.taskNum + 1
        }

        setAppState(newState)
        saveData(newState)
    }

    const handleRemove = (taskId) => {
        const tasks = appState.tasks.filter((value) => value.taskId !== taskId)

        const newState = {
            ...appState,
            tasks: tasks,
        }

        setAppState(newState)
        saveData(newState)
    }

    const handleClear = () => {
        const newState = {
            ...appState,
            tasks: [],
            taskNum: 0
        }

        setAppState(newState)
        saveData(newState)
    }

    const handleExport = () => {
        const data = new Blob([JSON.stringify(window.localStorage, null, 2)], {type: "application/json"})
        const url = URL.createObjectURL(data)
        const link = document.createElement("a")
        link.href = url
        link.download = "calendar.js"

        document.body.appendChild(link)
        link.click()

        URL.revokeObjectURL(url)
        document.body.removeChild(link)
    }

    const handleErase = () => {
        window.localStorage.clear()
        handleChange(new Date())
    }

    const dialogStyle = {
        filter: showDialog ? "blur(10px)" : "none", 
        pointerEvents: showDialog ? "none" : "auto",
    }

    return (
        <div className="page">
            <h1>Your Calendar</h1>
            <AddTask show={showDialog} addCallback={handleAdd} showCallback={handleShowDialog}/>
            <div style={dialogStyle} className="container">
                <Calendar changeCallback={handleChange} exportCallback={handleExport} eraseCallback={handleErase}/>
                <TaskList appState={appState} addCallback={handleShowDialog} removeCallback={handleRemove} clearCallback={handleClear}/>
            </div>
            <div className="footer">
                <h1>@ UPCE FEI 2023, Simple Calendar app, made by František Boura </h1>
                <div className="footer-text">
                    Link to github <a href="https://github.com/elpharae/todo-list">here</a>. (or here https://github.com/elpharae/todo-list)
                </div>
            </div>
        </div>
    )
}

export default App

