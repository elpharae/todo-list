import React, { useState, useMemo, useCallback } from 'react'

const currentDate = new Date()

const Calendar = ( { changeCallback, exportCallback, eraseCallback } ) => {

    const [input, setInput] = useState({
        month: currentDate.getMonth(),
        year: currentDate.getFullYear(),
    })

    const date = useMemo(() => {
        return new Date(input.year, input.month, 1)
    }, [input])

    const handleChange = useCallback((date) => changeCallback(date), [changeCallback])
    const handleExport = useCallback(() => exportCallback(), [exportCallback])
    const handleErase = useCallback(() => eraseCallback(), [eraseCallback])
    const handleClick = (e) => handleChange(new Date(e.target.value))

    return (
        <div className="calendar">
            <div className="calendar-panel">
                <div className="calendar-input-label">Month</div>
                <input type="number" placeholder="Month" defaultValue={input.month + 1} min={1} max={12} onChange={(e) => setInput((prevInput) => ({ ...prevInput, month: e.target.value - 1 }))}/>
                <div className="calendar-input-label">Year</div>
                <input type="number" placeholder="Year" defaultValue={input.year} onChange={(e) => setInput((prevInput) => ({ ...prevInput, year: e.target.value }))}/>
            </div>
            <div className="calendar-days">
                <div>Mon</div>
                <div>Tue</div>
                <div>Wed</div>
                <div>Thu</div>
                <div>Fri</div>
                <div>Sat</div>
                <div>Sun</div>
                {
                    Array.from({ length: 49 }, (_, i) => i - 14).map(
                        (value, index) => {
                            let buttonDate = new Date(date.getFullYear(), date.getMonth(), 1)
                            buttonDate.setDate(value + (7 - date.getDay()) + 2)
                            return (
                                <button disabled={buttonDate.getMonth() !== input.month} key={index} value={buttonDate} onClick={handleClick}>
                                    {buttonDate.getDate()}
                                </button>
                            )
                        }
                    )
                }
            </div>
            <div className="calendar-buttons">
                <button onClick={handleExport}>Export calendar</button>
                <button onClick={handleErase}>Erase calendar</button>
            </div>
        </div>
    )

}

export default Calendar
