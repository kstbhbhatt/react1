import React from "react";
import {specsS23} from "./features.js"
import Trow from "./Trow.jsx";
import Aos from "aos";
import 'aos/dist/aos.css'

function Specs(){
    React.useEffect(()=> {
        Aos.init({duration:1000})
    })
    specsS23.map((value, index)=>(
        console.log(value.value)
        ))
    return(
        <div>
            <h2>Specs</h2>
            <table>
                <thead>
                    <tr>
                        <th >Specification</th>
                        <th >Description</th>
                    </tr>
                </thead>
                <tbody>
                    {specsS23.map((value, index)=>(
                    <Trow key={index} name={Object.keys(value)[0]} descp={Object.values(value)[0]}/>
                    ))}
                </tbody>
                <tfoot>
                <tr>
                    <th >Source</th>
                    <th >GSMArena</th>
                </tr>
                </tfoot>
            </table>
        </div>
    )

}
export default Specs