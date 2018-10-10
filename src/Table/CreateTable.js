import React from "react";
import "./CreateTable.css"

const createTable=(props)=>{
    //array with element which create a table
    let elementArray=[];
    //this same like above but with react element ready to render
    let reactElementArray=[]
    //array to median
    let priceArray=[]
    let minPrice=0;
    let maxPrice=0;
    let minPriceData=''
    let maxPriceData=''
    let median=0;
    //additional array
    let apiArray=[]

    //choice way of sorting table from select option
    const sortArray=(event)=>{
        props.sort(event.target.value)
    }
    //col with data
    const dataCol=()=>{
        //array with apiAnswer
        apiArray=props.apiAnswer

        apiArray.forEach((element)=>{
            //push to array proper year and month like state value
            if(element.data.substr(0,4)===props.stateYear && element.data.substr(5,2)===props.stateMonth){
                elementArray.push(element)
                priceArray.push(element.cena)
            }
        })
        //sorting table if table is sort by price
        if(props.stateSort==='Price'){
            elementArray.sort((a,b)=>{
                return b.cena-a.cena
            })
        }
        //sorting table if table is sort by data
        else{
            elementArray.sort((a,b)=>{
                return a.data.substr(8,2)-b.data.substr(8,2)
            })
        }
        //col with data and price
        elementArray.forEach((element)=>{
            reactElementArray.push(<tr>
                <td>{element.data.substr(8,2)}</td>
                <td>{element.cena}</td>
            </tr>)
        })
        //max price
        minPrice=Math.min(...priceArray);
        //min price
        maxPrice=Math.max(...priceArray);
        //set a max and min price data
        elementArray.forEach((element)=>{
            if(element.cena===maxPrice) {
                maxPriceData = element.data
            }
            if(element.cena===minPrice) {
                minPriceData = element.data
            }
        })

        priceArray.sort((a,b)=>{
            return a-b
        })
        //to preper median
        if(priceArray.length%2===0){
            let centerOfArray=priceArray.length/2
            median=(priceArray[centerOfArray]+priceArray[centerOfArray-1])/2
        }else{
            let centerOfArray=Math.floor(priceArray.length/2)
            median=priceArray[centerOfArray]
        }
        return reactElementArray
    }
    return (
        <div className='table-class'>
            <table>
                <thead>
                    <th>Data</th>
                    <th>Price</th>
                </thead>
                <tbody>
                {dataCol()}
                </tbody>
                <tfoot>
                </tfoot>
            </table>
            <div>
                <p>
                    Max price={maxPrice}    Data={maxPriceData}
                </p>
                <p>
                    Min price={minPrice}    Data={minPriceData}
                </p>
                <p>
                    Median={median}
                </p>
            </div>
            <label>
                Sort:
                <select onChange={sortArray}>
                    <option>Data</option>
                    <option>Price</option>
                </select>
            </label>
        </div>
    )

}

export default createTable;
