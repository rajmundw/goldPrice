import React from "react";

const buttonSearch = (props) =>{
    //apiRequest
    const newFetch = (data1, data2) => {                                                      // zapytanie do serwera
         fetch(`http://api.nbp.pl/api/cenyzlota/${data1}/${data2}`)
            //to make a json answer proper format
            .then(resp => resp.json())
            .then(data => {
                //make a div with error hidden
                document.getElementById('error').className='no-error'
                //set state with api answer
                props.apiAnswer(data)
                //set state with current month and year
                props.currentState(data[0].data.substr(0, 4), data[0].data.substr(5, 2))
            }).catch(() => {
                //error
                fetch(`http://api.nbp.pl/api/cenyzlota/${data1}/${data2}`)
                    .then(error => {
                        //make a div with error visible
                        document.getElementById('error').className='error'
                        //append error statusText to div with error
                        document.getElementById('error').innerText=error.statusText
                        }
                    )


            })
    }
    const onClickHandler =()=>{
        //run api request
        newFetch(props.val1,props.val2)

        //make a calendars hidden
        document.querySelector('#calendar1').className='calendar-container'
        document.querySelector('#calendar2').className='calendar-container'
    }

    return(
        <div>
            <button onClick={onClickHandler}>Search</button>
        </div>
    )
}
export default buttonSearch