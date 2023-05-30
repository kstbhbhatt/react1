import React from "react";
import {specsS23} from "./features.js"
import Trow from "./Trow.jsx";

function Specs(){
    specsS23.map((value, index)=>(
        console.log(value.value)
        ))
    return(
        <div>
            <h3>Specs</h3>
            <table>
                <thead>
                    <tr>
                        <th>Specification</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {specsS23.map((value, index)=>(
                    <Trow key={index} name={Object.keys(value)[0]} descp={Object.values(value)[0]}/>
                    ))}
                </tbody>
                <tfoot>
                <tr>
                    <th>Source</th>
                    <td>GSMArena</td>
                </tr>
                </tfoot>
            </table>
        </div>
    )

}
export default Specs