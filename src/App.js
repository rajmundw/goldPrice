import React, { Component } from 'react';
import './App.css';
import Button from "./button/buttonSearch"
import Input2 from "./input/InputData2"
import Input1 from "./input/InputData1"
import Table from "./Table/Table"

class App extends Component {
    //state
    constructor(props){
        super()
        this.state={
            valueInput1:'',
            valueInput2:'',
            apiAnswer:'',
            currentYear:'',
            currentMonth:'',
            sort:'Data'
        }
    }
    //function to setState start data
    valeOfInput1=(value)=> {
        this.setState ({
            valueInput1: value
        })

    }
    //function to setState end data
    valeOfInput2=(value)=> {
        this.setState({
            valueInput2: value
        })
    }
    //function to set apiAnswer in state
    apiAnswer=(answer)=>{
        this.setState({
            apiAnswer:answer
        })

    }
    //month to show in table
    currentMonth=(month)=>{
        this.setState({
            currentMonth:month
        })
    }
    //year to show in table
    currentYear=(year)=>{
        this.setState({
            currentYear:year
        })
    }
    //set state during apirequest to have first element to show in table
    currentState=(year,month)=>{
        this.setState({
            currentYear:year,
            currentMonth:month
        })

    }
    //function to setState to proper sorting
    sort=(sortBy)=>{
        this.setState({
            sort:sortBy
        })
    }

    render() {
        return(
            <div className="App">
                <div id="error" className="no-error"></div>
                <Table  apiAnswer={this.state.apiAnswer}
                        currentYear={this.currentYear}
                        currentMonth={this.currentMonth}
                        stateYear={this.state.currentYear}
                        stateMonth={this.state.currentMonth}
                        stateSort={this.state.sort}
                        sort={this.sort}
                />
                <Input1 inputVal1={this.valeOfInput1} val1={this.state.valueInput1}/>
                <Input2 inputVal2={this.valeOfInput2} val2={this.state.valueInput2}/>
                <Button
                    apiAnswer={this.apiAnswer}
                    val1={this.state.valueInput1}
                    val2={this.state.valueInput2}
                    errorState={this.error}
                    currentState={this.currentState}
                    />
            </div>
        )
    }
}

export default App;
