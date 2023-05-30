import React from "react"

function Trow(props){
    return(
        <tr>
            <th>{props.name}</th>
            <td>{props.descp}</td>
        </tr>
    )
}

export default Trow;