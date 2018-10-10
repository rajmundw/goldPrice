import React from "react";
import "./InputData1.css"
import Calendar from "../calendar/calendar"

const inputData1 = (props) =>{
    const showCalendar=()=>{
        //make a visible or hidden calendar
        document.querySelector('#calendar1').className='calendar-container-visivle'
        document.querySelector('#calendar2').className='calendar-container'
        }

    return(
        <div className="input1">
            <input onClick={showCalendar} type="data" placeholder="click" value={props.val1}/>
            <Calendar inputVal1={props.inputVal1}/>
        </div>
    )
}
export default inputData1