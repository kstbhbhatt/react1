import React from "react";
import Aos from "aos";
import 'aos/dist/aos.css'

function Description(){
    React.useEffect(()=> {
        Aos.init({duration:1000})
    })
return(
    <div className="description">
        <p data-aos="fade-up">Samsung's Galaxy S23 Ultra doesn't dare rock the boat. But what it lacks in excitement, it more than makes up for in what may be the best Android experience on the market right now.</p>
        <p data-aos="fade-up">One UI is as feature-packed as ever, and the 200MP camera can capture detail unlike any of the competition.</p>
        <p data-aos="fade-up">It's not perfect, but the Galaxy S23 Ultra is Samsung's best phone yet.</p>
    </div>
)
}

export default Description;