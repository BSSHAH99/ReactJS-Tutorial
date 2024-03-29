import React from "react";
import ButtonMapping from "./ButtonMapping";
import { objectValues } from "../RegularExpression";
export default ({ theadKeyMap, tbodyValueMap, buttonAttributes }) => (
    <table className="table" >
        <thead>
            <tr>
                {
                    theadKeyMap.map(value => <th key={value}>{value.toUpperCase()}</th>)
                }
            </tr>
        </thead>
        <tbody>
            {
                tbodyValueMap.map((value, index) => {
                    // console.log(">>>>>>>>>>", value, index);
                    return <tr key={index}>
                        {
                            objectValues(value).map((values, index) => {
                                return <td key={index}>{values}</td>
                            })
                        }
                        <td>
                            <ButtonMapping buttonAttributes={buttonAttributes} id={value.id} />
                        </td>
                    </tr>
                })
            }
        </tbody>
    </table>
)
