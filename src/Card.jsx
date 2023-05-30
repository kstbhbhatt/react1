import React from 'react';
import Aos from "aos";
import 'aos/dist/aos.css'

function Card(props){
    const [rotate, makeItRotate] = React.useState({
        id:'',
        flip: false
    })
    function rotateCard(e){
        console.log(e.target.closest('.card').getAttribute('id'))
        const clickId = e.target.closest('.card').getAttribute('id')
        makeItRotate(
            (prevvalue)=>({
                id: clickId,
                flip: !prevvalue.flip

            })
        )
        e.preventDefault()

    }
    function rotateCardAgain(e){
        console.log(e.target.closest('.card').getAttribute('id'))
        const clickId = e.target.closest('.card').getAttribute('id')
        makeItRotate(
            (prevvalue)=>({
                id: clickId,
                flip: !prevvalue.flip

            })
        )
        e.preventDefault()

    }
    React.useEffect(()=> {
        Aos.init({duration:1000})
    })
    return(
        <div id={props.id} className={ props.id==rotate.id && rotate.flip?`flipp card`:'card'}>
            <div className="flip">
                <div className="front">
                    <img src={props.url}/>
                    <h3>{props.title}</h3>
                    <p  data-aos="fade-up">{props.descp}</p>
                    <a onClick={rotateCard} href="3" target="_blank">Read More</a>
                </div>
                <div className="back">
                    <p>Information will be added shortly. Stay Tuned</p>
                    <a onClick={rotateCardAgain} href="3" target="_blank">Go Back</a>
                </div>
            </div>
            

        </div>
    )
}
export default Card