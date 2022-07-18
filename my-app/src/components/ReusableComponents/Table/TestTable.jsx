import React, { useState, useEffect } from 'react'
import TestButton from '../Button/TestButton';

const TestTable = ({ tableData, btnEdit, btnDelete, onDelete, onEdit, ...props }) => {
    // console.log("Reusable Components tabel props", tableData)


    // const [arrayobj, stearrayobj] = useState([])


    // function setup(params) {
    //     console.log(object);
    // }


    const th = new Set();
    tableData.map((items) => {
        return Object.entries(items).map(([key]) => {
            key === "id" ? console.log("") : th.add(key);
            return key;
        });
    });
    // let key =  Object.keys(tableData || {});
    //  console.log("this is key", key);


    //  let values = Object.values(tableData || {});
    //  console.log("this is values",values);
    // console.log("this is new states", arrayobj);
    return (
        <div className="container my-3">
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            {Array.from(th.values()).map((items, index) => {
                                return (
                                    <th key={index} scope="col">
                                        {items.toUpperCase()}
                                    </th>
                                );
                            })}
                        </tr>
                    </thead>
                    {/* { console.log('tableData :>> bhavik', tableData)} */}
                    <tbody>
                        {/* {tableData.length >0 && 
        values.map((data,index)=>{
            console.log("juykuy====>",data)
                return <React.Fragment key={index}>
                    <tr>
                        {key.map((items,index)=>{
                            console.log("juykuy====>",data[items])
                            return <td key={index}>{data[items]}</td>
                        })}
                    </tr>
                </React.Fragment>
            })
        } */}




                        {
                            tableData.length > 0 &&
                            tableData.map((data, index) => {
                                return <React.Fragment key={index}>
                                    <tr>
                                        {
                                            Array.from(th.values()).map((item, i) => {
                                                // console.log('data[item] :>> ', data[item]);
                                                let arr = []
                                                let test = []
                                                // if (Array.isArray(data[item])) {

                                                // }



                                                if ((typeof data[item] === "object" && !Array.isArray(data[item]))) {
                                                    arr[0] = data[item]
                                                } else {
                                                    arr = data[item]
                                                }
                                                // console.log('Arr Is This', arr)
                                                // console.log('Arr Of [0] Iss This', arr[0])
                                                return <React.Fragment key={i}>

                                                    {


                                                        // Array.isArray(data[item]) ? data[item].length && data[item]?.every((item) => typeof (item) === "object") ?
                                                        //     <React.Fragment>
                                                        //         <TestTable tableData={data[item]} />
                                                        //     </React.Fragment>
                                                        //     : <React.Fragment><td>{data[item].map(val => <div>{val}</div>)}</td></React.Fragment>
                                                        //     : typeof (data[item] === "object") ?
                                                        //         <React.Fragment>
                                                        //             <TestTable tableData={data[item]} />
                                                        //         </React.Fragment> : <React.Fragment><td key={i}>{data[item]}</td></React.Fragment>



                                                        (typeof arr === "object") && Array.isArray(arr) ?
                                                            <React.Fragment> <TestTable tableData={arr} /></React.Fragment> :
                                                            <React.Fragment><td key={i}>{arr}</td></React.Fragment>


                                                        //     console.log(data, item) : console.log("it's not working bro")
                                                        // <React.Fragment> <TestTable tableData={arrayobj} /></React.Fragment> :
                                                        // <React.Fragment><td key={i}>{data[item]}</td></React.Fragment>


                                                        // Array.isArray(data[item]) ?
                                                        //     <React.Fragment><TestTable tableData={data[item]} /></React.Fragment> :
                                                        //     < React.Fragment key={i}><td key={i}>{data[item]}</td></React.Fragment>

                                                    }
                                                </React.Fragment>
                                            })
                                        }
                                        {
                                            btnEdit && btnDelete &&
                                            <React.Fragment>
                                                <td>
                                                    <TestButton onClick={(e) => onEdit(e, index, data.id)}> {btnEdit}</TestButton>
                                                </td>
                                                <td>
                                                    <TestButton onClick={(e) => onDelete(e, index)}> {btnDelete}</TestButton>
                                                </td>
                                            </React.Fragment>
                                        }
                                    </tr>
                                </React.Fragment>
                            })
                        }



                        {/* {
            tbodyData.map((data,index)=>{
                return <React.Fragment key={index}>
                    <tr>
                        {Array.from(theadData.values()).map((items,index)=>{

                            return <React.Fragment key={index}>
                                {Array.isArray(data[items])?<React.Fragment><TestTable theadData={theadData} tbodyData={data[items]} /></React.Fragment>:<React.Fragment><td >{data[items]}</td></React.Fragment>}
                            </React.Fragment>
                            
                        })}
                    </tr>
                    </React.Fragment>
                })
                 } */}

                    </tbody>
                </table>
            </div >
        </div >
    )
}

export default TestTable

