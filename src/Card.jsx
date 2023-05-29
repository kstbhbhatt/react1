import React from 'react';

function Card(props){
    return(
        <div className="card">
            <img src={props.url}/>
            <h3>{props.title}</h3>
            <p>{props.descp}</p>
            <a href="https://www.samsung.com/in/smartphones/galaxy-s23-ultra/" target="_blank">Read More</a>

        </div>
    )
}
export default Card