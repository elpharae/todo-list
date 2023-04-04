import React, { useState, useEffect } from 'react';
import "../style/calendar.css"

const currentDate = new Date()

const Calendar = () => {
    
    const [date, setDate] = useState(currentDate)
    const [input, setInput] = useState({
        month: currentDate.getMonth(),
        year: currentDate.getFullYear(),
        numberOfDays: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate(),
        startingDay: new Date(currentDate.year, currentDate.month, 1).getDay() - 1
    })

    useEffect(() => {
        setDate(new Date(input.year, input.month, -input.startingDay))
    }, [input])

    useEffect(() => {
        setInput((prevState) => ({
            ...prevState,
            numberOfDays: new Date(input.year, input.month + 1, 0).getDate(),
            startingDay: new Date(input.year, input.month, 1).getDay() - 1
        }))
    }, [input.month, input.year])

    const handleDayButton = (e) => {
        const date = new Date(e.target.attributes.date.value)
        console.log(date.toLocaleString("default", {year: "numeric", month: "long", day: "numeric"}))
    }

    return (
        <div className="calendar">
            <div className="calendar-panel">
                <input type="number" placeholder="Month" defaultValue={input.month + 1} min={1} max={12} onChange={(e) => setInput((prevInput) => ({ ...prevInput, month: e.target.value - 1 }))}/>
                <input type="number" placeholder="Year" defaultValue={input.year} onChange={(e) => setInput((prevInput) => ({ ...prevInput, year: e.target.value }))}/>
            </div>
            <div className="calendar-days">
                {
                    Array.from({ length: input.numberOfDays + input.startingDay }, (_, i) => i + 1).map(
                        (value, index) => {
                            return (
                                <button key={index} date={(new Date(date.getFullYear(), date.getMonth(), date.getDate() + value))} onClick={handleDayButton}>
                                    {
                                        new Date(date.getFullYear(), date.getMonth(), date.getDate() + value).toLocaleString("default", {month: "long", day: "numeric", weekday: "long"})
                                    }
                                </button>
                            )
                        }
                    )
        }
            </div>
        </div>
    )

}

export default Calendar
