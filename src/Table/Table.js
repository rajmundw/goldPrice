import React from "react";
import CreateTable from "./CreateTable"

const table = (props) =>{
    //array with years to select
    let yearArray=[]
    //array with years as a react element
    let yearArrayReactElements=[]
    //array with months to select
    let monthsArray=[]
    //array with months as a react element
    let monthsArrayReactElements=[]


    const setMonths=(event)=>{
        //set state by choice select option
        props.currentMonth(event.target.value)
    }

    const setYears=(event)=>{
        //set state by choice select option
        props.currentYear(event.target.value)
    }

    //create years to choice in select options
    const createYears=()=>{
        props.apiAnswer.forEach((element)=> {
            //if it's first element so push to array
            if (yearArray.length === 0) {
                yearArray.push(element.data.substr(0, 4))
            }
            //if next element is other then pervious element also push to array
            else if (yearArray[yearArray.length - 1] !== element.data.substr(0, 4)) {
                yearArray.push(element.data.substr(0, 4))
            }
        })
        //make a react element
        yearArray.forEach((element)=>{
            yearArrayReactElements.push(<option>{element}</option>)
        })



        return(
            <div>
                <label>Year:
                    <select value={props.stateYear} onChange={setYears}>
                        {yearArrayReactElements}
                    </select>
                </label>
            </div>
        )
    }


    //create months to choice in select options like above
    const createMonths=()=>{
        props.apiAnswer.forEach((element)=> {
            if (monthsArray.length === 0) {
                monthsArray.push(element.data.substr(5,2))
            } else if (monthsArray.length<=11 && monthsArray[monthsArray.length - 1] !== element.data.substr(5,2)) {
                monthsArray.push(element.data.substr(5,2))
            }
        })
        monthsArray.forEach((element)=>{
            monthsArrayReactElements.push(<option>{element}</option>)
        })


        return(
            <div>
                <label>Month:
                    <select value={props.stateMonth} onChange={setMonths}>
                        {monthsArrayReactElements}
                    </select>
                </label>
            </div>
        )
    }


    //condition render if apiAnswer is empty then not render otherwise render table
    if(props.apiAnswer.length===0){
        return null
    }else {
        return (
            <div>
                {createYears()}
                {createMonths()}
                <CreateTable
                    stateYear={props.stateYear}
                    stateMonth={props.stateMonth}
                    stateSort={props.stateSort}
                    apiAnswer={props.apiAnswer}
                    sort={props.sort}
                />
            </div>
        )
    }
}
export default table