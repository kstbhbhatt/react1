import React from 'react';
import Aos from "aos";
import 'aos/dist/aos.css'

function Card(props){
    React.useEffect(()=> {
        Aos.init({duration:1000})
    })
    return(
        <div className="card">
            <img src={props.url}/>
            <h3>{props.title}</h3>
            <p  data-aos="fade-up">{props.descp}</p>
            <a href="https://www.samsung.com/in/smartphones/galaxy-s23-ultra/" target="_blank">Read More</a>

        </div>
    )
}
export default Card