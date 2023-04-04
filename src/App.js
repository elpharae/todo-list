import React, { useState } from 'react';
import TaskList from "./components/TaskList"
import Calendar from "./components/Calendar"

const App = () => {
    return (
        <div className="content">
            <Calendar />
            <TaskList />
        </div>
    )
}

export default App

