import React from "react"
import Aos from "aos";
import 'aos/dist/aos.css'

function Trow(props){
    React.useEffect(()=> {
        Aos.init({duration:1000})
    })
    return(
        <tr>
            <th data-aos="fade-right">{props.name}</th>
            <td data-aos="fade-left">{`${props.descp}`}</td>
        </tr>
    )
}

export default Trow;