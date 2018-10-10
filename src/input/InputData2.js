import React from "react";
import "./InputData2.css"
import Calendar from "../calendar2/calendar2"

const inputData2 = (props) =>{
    const showCalendar=()=>{
        //make a visible or hidden calendar
        document.querySelector('#calendar1').className='calendar-container'
        document.querySelector('#calendar2').className='calendar-container-visivle'
        }


    return(
        <div className="input2">
            <input onClick={showCalendar} type="data"  placeholder="click" value={props.val2}/>
            <Calendar inputVal2={props.inputVal2}/>
        </div>
    )
}
export default inputData2