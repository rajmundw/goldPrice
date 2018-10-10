import React from 'react';
import "./calendar2.css"

const data=new Date()

let currentMonth=data.getMonth()
let currentYear=data.getFullYear()
let fictionData=new Date(currentYear,currentMonth,1)
const daysNameArray=['Mon','Tue','Wen','Thu','Fri',"Sat",'Sun']
const monthsNameArray=["Jan","Feb",'Mar',"Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
let daysNameArrayReact=[]
const daysInMonth=(month, year)=> {
    return new Date(year, month, 0).getDate();
}
let daysArray=[]
let weeksArray=[]
class App extends React.Component{
    constructor(props){
        super()
        this.state={
            Month:currentMonth,
            Year:currentYear
        }
    }

    previousMonth=()=>{
        currentMonth=currentMonth-1
        if(currentMonth<0){
            currentMonth=11
            currentYear=currentYear-1
        }
        this.setState({
            Month:currentMonth,
            Year:currentYear
        })
        fictionData=new Date(currentYear,currentMonth,1)
        daysArray=[]
        weeksArray=[]
        daysNameArrayReact=[]
    }
    follwingMonth=()=>{
        currentMonth=currentMonth+1
        if(currentMonth>11){
            currentMonth=0
            currentYear=currentYear+1
        }
        this.setState({
            Month:currentMonth,
            Year:currentYear
        })
        fictionData=new Date(currentYear,currentMonth,1)
        daysArray=[]
        weeksArray=[]
        daysNameArrayReact=[]
    }
    choiceData=(event)=>{
        daysArray=[]
        weeksArray=[]
        daysNameArrayReact=[]

        let day=event.target.innerText
        const year=document.querySelectorAll('.month-year')[1].innerText.substr(4,4)
        let monthName=document.querySelectorAll('.month-year')[1].innerText.substr(0,3)
        let monthNumber=0
        monthsNameArray.forEach((element,index)=>{
            if(element===monthName){
                monthNumber=index+1
            }
        })
        if (day.length === 1) {
            day=`0${day}`
        }
        if (monthNumber.toString().length === 1) {
            monthNumber=`0${monthNumber}`
        }
        if (day.length === 1 && monthNumber.toString().length === 1) {
            day=`0${day}`
            monthNumber=`0${monthNumber}`
        }
        this.props.inputVal2(`${year}-${monthNumber}-${day}`)
    }

    calendar(){
        daysArray=[]
        weeksArray=[]
        daysNameArrayReact=[]
        daysNameArray.forEach((element)=>{
            daysNameArrayReact.push(<td>{element}</td>)
        })
        let numberOfDays=daysInMonth(currentMonth+1,currentYear)
        switch (fictionData.getDay()){
            case 1:{
                for (let i = 1; i <=numberOfDays ; i++) {
                    daysArray.push(<td onClick={this.choiceData}>{i}</td>)
                    if(daysArray.length===7){
                        weeksArray.push(<tr>{daysArray}</tr>)
                        daysArray=[]
                    }
                    if(i===numberOfDays){
                        weeksArray.push(<tr>{daysArray}</tr>)
                    }
                }

                break
            }
            case 2:{
                daysArray.push(<td> </td>)
                for (let i = 1; i <=numberOfDays ; i++) {
                    daysArray.push(<td onClick={this.choiceData}>{i}</td>)
                    if(daysArray.length===7){
                        weeksArray.push(<tr>{daysArray}</tr>)
                        daysArray=[]
                    }
                    if(i===numberOfDays){
                        weeksArray.push(<tr>{daysArray}</tr>)
                    }
                }

                break

            }
            case 3:{
                daysArray.push(<td> </td>,<td> </td>)
                for (let i = 1; i <=numberOfDays ; i++) {
                    daysArray.push(<td onClick={this.choiceData}>{i}</td>)
                    if(daysArray.length===7){
                        weeksArray.push(<tr>{daysArray}</tr>)
                        daysArray=[]
                    }
                    if(i===numberOfDays){
                        weeksArray.push(<tr>{daysArray}</tr>)
                    }
                }

                break

            }
            case 4:{
                daysArray.push(<td> </td>,<td> </td>,<td> </td>)
                for (let i = 1; i <=numberOfDays ; i++) {
                    daysArray.push(<td onClick={this.choiceData}>{i}</td>)
                    if(daysArray.length===7){
                        weeksArray.push(<tr>{daysArray}</tr>)
                        daysArray=[]
                    }
                    if(i===numberOfDays){
                        weeksArray.push(<tr>{daysArray}</tr>)
                    }
                }

                break

            }
            case 5:{
                daysArray.push(<td> </td>,<td> </td>,<td> </td>,<td> </td>)
                for (let i = 1; i <=numberOfDays ; i++) {
                    daysArray.push(<td onClick={this.choiceData}>{i}</td>)
                    if(daysArray.length===7){
                        weeksArray.push(<tr>{daysArray}</tr>)
                        daysArray=[]
                    }
                    if(i===numberOfDays){
                        weeksArray.push(<tr>{daysArray}</tr>)
                    }
                }

                break

            }
            case 6:{
                daysArray.push(<td> </td>,<td> </td>,<td> </td>,<td> </td>,<td> </td>)
                for (let i = 1; i <=numberOfDays ; i++) {
                    daysArray.push(<td onClick={this.choiceData}>{i}</td>)
                    if(daysArray.length===7){
                        weeksArray.push(<tr>{daysArray}</tr>)
                        daysArray=[]
                    }
                    if(i===numberOfDays){
                        weeksArray.push(<tr>{daysArray}</tr>)
                    }
                }

                break

            }
            default:{
                daysArray.push(<td> </td>,<td> </td>,<td> </td>,<td> </td>,<td> </td>,<td> </td>)
                for (let i = 1; i <=numberOfDays ; i++) {
                    daysArray.push(<td onClick={this.choiceData}>{i}</td>)
                    if(daysArray.length===7){
                        weeksArray.push(<tr>{daysArray}</tr>)
                        daysArray=[]
                    }
                    if(i===numberOfDays){
                        weeksArray.push(<tr>{daysArray}</tr>)
                    }
                }

                break;
            }
        }
        return(
            <table>
                <caption>
                    <div className="month-year-parent">
                        <div className="before" onClick={this.previousMonth}> > </div>
                        <div className="month-year">{monthsNameArray[currentMonth]} {currentYear}</div>
                        <div className="after" onClick={this.follwingMonth}> > </div>
                    </div>
                </caption>
                <thead>
                {daysNameArrayReact}
                </thead>
                <tbody>
                {weeksArray}
                </tbody>
                <tfoot>

                </tfoot>
            </table>
        )

    }
    render(){
        return(
            <div id="calendar2" className='calendar-container'>
                {this.calendar()}
            </div>
        )
    }
}

export default App